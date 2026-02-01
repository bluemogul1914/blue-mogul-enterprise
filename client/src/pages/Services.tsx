import { Link } from "wouter";
import { motion } from "framer-motion";
import { Server, Shield, Globe, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-padding text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-display mb-4 text-white"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Comprehensive IT solutions designed to optimize your business operations, enhance security, and provide reliable connectivity.
          </motion.p>
        </div>
      </section>

      <div className="container-padding py-20 space-y-32">
        {/* Broadband */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Connectivity
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Broadband Solutions</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Reliable high-speed connectivity is the backbone of modern business. We offer diverse solutions including fiber, wireless, and global 5G options to keep you connected anywhere.
            </p>
            <ul className="space-y-3 mb-8">
              {["High-speed Fiber Optics", "Global 5G Connectivity", "Wireless Backups", "Redundant Networks"].map(item => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button>Get Connected</Button>
            </Link>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
          >
            {/* fiber optics abstract */}
            <img 
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
              alt="Broadband Solutions"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Voice */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-2 md:order-1 relative"
          >
            {/* call center voip */}
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
              alt="Voice Solutions"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-sm font-medium mb-6">
              <Phone className="w-4 h-4" />
              Communication
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Voice Solutions</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Modernize your communications with our advanced voice systems. From Cloud PBX to SIP Trunking, we ensure crystal clear communication for your team and clients.
            </p>
            <ul className="space-y-3 mb-8">
              {["Cloud PBX Systems", "SIP Trunking", "Unified Communications"].map(item => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button>Upgrade Your Phone System</Button>
            </Link>
          </motion.div>
        </div>

        {/* Managed IT & Security Grid */}
        <div>
          <SectionHeading title="More Services" className="mb-12" />
          <div className="grid md:grid-cols-2 gap-8">
             <Card className="bg-slate-50 border-none shadow-md">
               <CardContent className="p-8">
                 <Server className="w-10 h-10 text-primary mb-6" />
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">Managed IT Services</h3>
                 <p className="text-slate-600 mb-6 leading-relaxed">
                   Complete IT management tailored to your needs. We handle the heavy lifting so you can focus on your business.
                 </p>
                 <ul className="space-y-2 mb-6">
                   <li className="flex items-center gap-2 text-sm text-slate-700"><div className="w-1.5 h-1.5 bg-primary rounded-full" />Office365 Management</li>
                   <li className="flex items-center gap-2 text-sm text-slate-700"><div className="w-1.5 h-1.5 bg-primary rounded-full" />Nextcloud Integration</li>
                   <li className="flex items-center gap-2 text-sm text-slate-700"><div className="w-1.5 h-1.5 bg-primary rounded-full" />Automated Patching</li>
                   <li className="flex items-center gap-2 text-sm text-slate-700"><div className="w-1.5 h-1.5 bg-primary rounded-full" />DaaS (Desktop as a Service)</li>
                 </ul>
               </CardContent>
             </Card>

             <Card className="bg-slate-50 border-none shadow-md">
               <CardContent className="p-8">
                 <Shield className="w-10 h-10 text-primary mb-6" />
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">Cybersecurity Solutions</h3>
                 <p className="text-slate-600 mb-6 leading-relaxed">
                   Protect your organization with enterprise-grade security. We provide comprehensive protection against modern threats.
                 </p>
                 <ul className="space-y-2 mb-6">
                   <li className="flex items-center gap-2 text-sm text-slate-700"><div className="w-1.5 h-1.5 bg-primary rounded-full" />Security Audits</li>
                   <li className="flex items-center gap-2 text-sm text-slate-700"><div className="w-1.5 h-1.5 bg-primary rounded-full" />Endpoint Protection</li>
                   <li className="flex items-center gap-2 text-sm text-slate-700"><div className="w-1.5 h-1.5 bg-primary rounded-full" />Continuous Monitoring</li>
                   <li className="flex items-center gap-2 text-sm text-slate-700"><div className="w-1.5 h-1.5 bg-primary rounded-full" />Threat Response</li>
                 </ul>
               </CardContent>
             </Card>
          </div>
        </div>
      </div>

      <section className="bg-primary py-16 text-center text-white">
        <div className="container-padding">
          <h2 className="text-3xl font-bold mb-6 text-white">Need a custom solution?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Every business is unique. Contact us to discuss a tailored IT strategy that fits your specific goals and budget.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
              Contact Sales
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
