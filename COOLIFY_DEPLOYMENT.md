# Coolify Deployment Guide

## Prerequisites
- Coolify instance running
- PostgreSQL database (or managed DB service)
- GitHub repository connected to Coolify

## Environment Variables Setup

In your Coolify project settings, add the following environment variables:

### Required
- **DATABASE_URL**: PostgreSQL connection string
  - Format: `postgresql://username:password@hostname:port/database_name`
  - Example: `postgresql://blue_mogul:password123@db.example.com:5432/blue_mogul_prod`

- **NODE_ENV**: Set to `production`

### Optional
- **PORT**: Leave as `3000` (Coolify will handle the public port mapping)
- **HUBSPOT_ACCESS_TOKEN**: Only needed if using HubSpot contact form integration

## Deployment Steps

1. **Connect GitHub Repository**
   - Add your repository to Coolify
   - Configure the branch to deploy (e.g., `main`)

2. **Set Environment Variables**
   - Go to your project settings in Coolify
   - Add all required variables from `.env.example`
   - Save configuration

3. **Configure Database**
   - Create a PostgreSQL database in Coolify or use an external provider
   - Copy the connection string to `DATABASE_URL` environment variable

4. **Deploy**
   - Trigger deployment from Coolify dashboard
   - Coolify will:
     - Pull code from GitHub
     - Install dependencies (`npm install`)
     - Build the project (`npm run build`)
     - Start the application (`npm start`)

5. **Database Migrations**
   - After initial deployment, run migrations:
     ```
     npm run db:push
     ```
   - You can execute this via Coolify's SSH/terminal feature or add it to a deployment hook

## Build & Start Scripts

The project uses:
- **Build**: `npm run build` - Compiles TypeScript and bundles for production
- **Start**: `npm start` - Runs the compiled production server
- **Database**: `npm run db:push` - Applies Drizzle ORM migrations

## Troubleshooting

- **Database connection errors**: Verify `DATABASE_URL` format and network access
- **Build failures**: Check that all environment variables are set
- **Port issues**: Coolify handles port mapping; the app uses the PORT variable internally
