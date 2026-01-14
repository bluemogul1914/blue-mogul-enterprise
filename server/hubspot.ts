// HubSpot integration for contact form submissions
import { Client } from '@hubspot/api-client';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=hubspot',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('HubSpot not connected');
  }
  return accessToken;
}

// WARNING: Never cache this client.
// Access tokens expire, so a new client must be created each time.
// Always call this function again to get a fresh client.
export async function getUncachableHubSpotClient() {
  const accessToken = await getAccessToken();
  return new Client({ accessToken });
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  service: string;
}

export async function createHubSpotContact(data: ContactFormData) {
  const client = await getUncachableHubSpotClient();
  
  // Split name into first and last name
  const nameParts = data.name.trim().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  try {
    // Create or update contact in HubSpot
    const contactResponse = await client.crm.contacts.basicApi.create({
      properties: {
        email: data.email,
        firstname: firstName,
        lastname: lastName,
        message: data.message,
        hs_lead_status: 'NEW',
      },
      associations: []
    });

    return { success: true, contactId: contactResponse.id };
  } catch (error: any) {
    // If contact already exists, try to update it
    if (error.code === 409 || error.message?.includes('already exists')) {
      try {
        // Search for existing contact
        const searchResponse = await client.crm.contacts.searchApi.doSearch({
          filterGroups: [{
            filters: [{
              propertyName: 'email',
              operator: 'EQ',
              value: data.email
            }]
          }],
          properties: ['email', 'firstname', 'lastname'],
          limit: 1
        });

        if (searchResponse.results.length > 0) {
          const existingContactId = searchResponse.results[0].id;
          
          // Update the existing contact with new message
          await client.crm.contacts.basicApi.update(existingContactId, {
            properties: {
              firstname: firstName,
              lastname: lastName,
              message: data.message,
            }
          });

          return { success: true, contactId: existingContactId, updated: true };
        }
      } catch (updateError) {
        console.error('Error updating existing contact:', updateError);
        throw updateError;
      }
    }
    throw error;
  }
}
