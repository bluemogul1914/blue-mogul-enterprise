import { motion } from "framer-motion";
import { ExternalLink, Users, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const portals = [
  {
    title: "Blue Mogul Fiber",
    description: "Access network management, service monitoring, and usage statistics for your broadband connection.",
    url: "https://uisp.bluemogul.us/crm/login",
    icon: Wifi,
    features: ["Network Status", "Usage Statistics", "Service Monitoring", "Connection Details"]
  },
  {
    title: "Client Portal",
    description: "Manage your account, view invoices, submit support tickets, and access your service dashboard.",
    url: "https://portal.bluemogul.biz",
    icon: Users,
    features: ["Account Management", "Billing & Invoices", "Support Tickets", "Service Dashboard"]
  }
];

export default function ClientPortal() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-padding text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-display mb-4 text-white"
          >
            Client Portal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Access your accounts, manage services, and get support through our dedicated client portals.
          </motion.p>
        </div>
      </section>

      {/* Portal Cards Section */}
      <section className="py-20">
        <div className="container-padding">
          <SectionHeading 
            title="Access Your Portals" 
            subtitle="Choose the portal that best fits your needs. Our network portal provides technical insights while the client portal handles account and billing management."
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            {portals.map((portal, index) => (
              <motion.div 
                key={portal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                      <portal.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{portal.title}</h3>
                    <p className="text-slate-600 mb-6">{portal.description}</p>
                    
                    <ul className="space-y-2 mb-8">
                      {portal.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-slate-600">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href={portal.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full h-12" size="lg" data-testid={`button-portal-${index}`}>
                        Access Portal
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-slate-50">
        <div className="container-padding text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Help?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            If you're having trouble accessing your portal or need assistance with your account, our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button variant="outline" size="lg" className="h-12 px-8" data-testid="button-contact-support">
                Contact Support
              </Button>
            </a>
            <a href="tel:+13463095514">
              <Button size="lg" className="h-12 px-8" data-testid="button-call-now">
                Call 346.309.5514
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
