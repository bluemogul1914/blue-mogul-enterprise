import { motion } from "framer-motion";
import { ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const portal = {
  title: "Client Portal",
  description: "Your all-in-one hub for managing your Blue Mogul services. Access network management, monitor your broadband connection, manage your account, view invoices, and submit support tickets.",
  url: "https://portal.bluemogul.biz/portal",
  icon: Users,
  features: ["Network Status & Monitoring", "Usage Statistics", "Account Management", "Billing & Invoices", "Support Tickets", "Service Dashboard"]
};

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
            title="Access Your Portal" 
            subtitle="Manage all your Blue Mogul services from one convenient location."
          />
          
          <div className="mt-12 max-w-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
                      <portal.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">{portal.title}</h3>
                  <p className="text-slate-600 mb-6">{portal.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-2 mb-8">
                    {portal.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-slate-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={portal.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full h-12" size="lg" data-testid="button-portal-access">
                      Access Portal
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
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
