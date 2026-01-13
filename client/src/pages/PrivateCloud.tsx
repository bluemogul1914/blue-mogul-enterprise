import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Cloud, 
  Shield, 
  DollarSign, 
  Lock, 
  Zap, 
  Users, 
  Phone, 
  Settings, 
  Check, 
  X, 
  AlertCircle,
  Building2,
  Scale,
  Palette,
  Globe,
  KeyRound,
  Stethoscope
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import heroImage from "@assets/Dawn-column_1768258400703.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PrivateCloud() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage}
            alt="Private Cloud Solutions" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/70" />
        </div>

        <div className="container-padding relative z-10 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-blue-200 border border-primary/30 text-sm font-medium mb-6">
              <Cloud className="w-4 h-4" />
              Professional Private Cloud Solutions
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 font-display">
              Take Control of Your <span className="text-blue-400">Business Data</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-slate-300 mb-8 leading-relaxed">
              Professional Nextcloud hosting from Houston's veteran-owned MSP. No per-user fees. Complete data privacy. Enterprise infrastructure.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg h-14 px-8 shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                  Get Started - Free Consultation
                </Button>
              </Link>
              <a href="https://demo.bluemogul.us/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="text-lg h-14 px-8 bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white">
                  Try Our Demo
                </Button>
              </a>
            </motion.div>

            <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { label: "10+ Years Experience", icon: Settings },
                { label: "100% Veteran-Owned", icon: Shield },
                { label: "HIPAA & GDPR Compliant", icon: Lock },
                { label: "24/7 US-Based Support", icon: Users },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-blue-200 text-sm justify-center">
                  <stat.icon className="w-4 h-4" />
                  <span>{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-padding">
          <SectionHeading 
            title="Tired of Paying Google, Microsoft & Dropbox Every Month?" 
            subtitle="You're not alone. Thousands of businesses are discovering the hidden costs and risks of traditional cloud providers."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Rising Costs",
                icon: DollarSign,
                color: "text-red-500",
                points: [
                  "Per-user licensing adds up fast",
                  "Annual price increases without notice",
                  "Hidden fees for extra storage",
                  "Example: 10 users = $1,200+/year"
                ]
              },
              {
                title: "Privacy Concerns",
                icon: Lock,
                color: "text-orange-500",
                points: [
                  "Tech giants mining your business data",
                  "No control over security policies",
                  "Data stored on shared infrastructure",
                  "Compliance nightmares for regulated industries"
                ]
              },
              {
                title: "Limited Features",
                icon: AlertCircle,
                color: "text-yellow-600",
                points: [
                  "Restrictive storage limits",
                  "Can't customize to your needs",
                  "Vendor lock-in makes switching difficult",
                  "Pay extra for basic features"
                ]
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-t-4 border-t-slate-300">
                  <CardContent className="p-6">
                    <item.icon className={`w-10 h-10 ${item.color} mb-4`} />
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i} className="text-slate-600 flex items-start gap-2">
                          <span className="text-slate-400 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Benefits */}
      <section className="section-padding">
        <div className="container-padding">
          <SectionHeading 
            title="Your Own Private Cloud - Complete Control, Lower Costs" 
            subtitle="Blue Mogul MSP hosts your Nextcloud instance on enterprise infrastructure in professional US datacenters."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Save Money",
                desc: "One-time setup fee, no per-user licensing, predictable monthly costs. ROI in 6-12 months.",
                icon: DollarSign
              },
              {
                title: "Your Data, Your Control",
                desc: "Hosted in US datacenters with complete data ownership. HIPAA & GDPR compliant. No tech giant surveillance.",
                icon: Lock
              },
              {
                title: "All-in-One Platform",
                desc: "File storage & sync, online document editing, calendar & contacts, video calls & chat.",
                icon: Zap
              },
              {
                title: "Enterprise Security",
                desc: "SSL/TLS encryption, daily automated backups, 99.9% uptime guarantee, 24/7 monitoring.",
                icon: Shield
              },
              {
                title: "Full Support",
                desc: "US-based expert help, training included. Phone: (346) 309-5514. Same-day response.",
                icon: Users
              },
              {
                title: "Professional Setup",
                desc: "Custom domain, mobile & desktop apps, migration assistance, ongoing maintenance.",
                icon: Settings
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-slate-50">
        <div className="container-padding">
          <SectionHeading 
            title="Nextcloud vs. Google Workspace & Microsoft 365" 
            subtitle="See how Blue Mogul's private cloud solution compares to the major providers."
          />
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-slate-600">Google Workspace</th>
                  <th className="text-center p-4 font-semibold text-slate-600">Microsoft 365</th>
                  <th className="text-center p-4 font-semibold text-primary bg-primary/5">Blue Mogul Nextcloud</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Monthly Cost (10 users)", google: "$120+", microsoft: "$125+", bluemogul: "$35 (total!)", highlight: true },
                  { feature: "Setup Fee", google: "$0", microsoft: "$0", bluemogul: "$199-499 (one-time)", highlight: false },
                  { feature: "Data Ownership", google: false, microsoft: false, bluemogul: true, isBoolean: true },
                  { feature: "Per-User Fees", google: true, microsoft: true, bluemogul: false, isBoolean: true, invert: true },
                  { feature: "Storage Limits", google: "30GB-2TB", microsoft: "1TB", bluemogul: "Flexible", highlight: true },
                  { feature: "HIPAA Compliant", google: "Extra cost", microsoft: "Extra cost", bluemogul: "Included", highlight: true },
                  { feature: "File Storage", google: true, microsoft: true, bluemogul: true, isBoolean: true },
                  { feature: "Office Suite", google: true, microsoft: true, bluemogul: true, isBoolean: true },
                  { feature: "Video Calls", google: "Meet", microsoft: "Teams", bluemogul: "Talk", isString: true },
                  { feature: "Calendar/Contacts", google: true, microsoft: true, bluemogul: true, isBoolean: true },
                  { feature: "US-Based Support", google: false, microsoft: false, bluemogul: true, isBoolean: true },
                  { feature: "Annual Cost (10 users)", google: "$1,440", microsoft: "$1,500", bluemogul: "$420 + setup", highlight: true },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-100 last:border-b-0">
                    <td className="p-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.isBoolean ? (
                        row.invert ? (
                          row.google ? <X className="w-5 h-5 text-red-500 mx-auto" /> : <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          row.google ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-600">{row.google}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.isBoolean ? (
                        row.invert ? (
                          row.microsoft ? <X className="w-5 h-5 text-red-500 mx-auto" /> : <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          row.microsoft ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-600">{row.microsoft}</span>
                      )}
                    </td>
                    <td className={`p-4 text-center bg-primary/5 ${row.highlight ? 'font-semibold text-primary' : ''}`}>
                      {row.isBoolean ? (
                        row.invert ? (
                          row.bluemogul ? <X className="w-5 h-5 text-red-500 mx-auto" /> : <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          row.bluemogul ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className={row.highlight ? 'text-primary font-semibold' : 'text-slate-900'}>{row.bluemogul}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center bg-green-50 border border-green-200 rounded-xl p-6"
          >
            <p className="text-lg text-green-800">
              <strong>Calculate Your Savings:</strong> With 10 users, you could save <strong>$1,020-$1,080 per year</strong> with Nextcloud!
            </p>
            <Link href="/contact">
              <Button className="mt-4">Get Your Custom Quote</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="container-padding">
          <SectionHeading 
            title="Simple, Transparent Pricing - No Hidden Fees" 
            subtitle="Choose the package that fits your business needs. All packages include professional setup and ongoing support."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                subtitle: "Perfect for individuals & micro-businesses",
                setup: "$199",
                monthly: "$25",
                features: [
                  "50GB secure storage",
                  "SSL certificate (HTTPS)",
                  "Custom domain setup",
                  "File sync & share",
                  "Email support",
                  "Setup documentation"
                ],
                delivery: "2 business days"
              },
              {
                name: "Business Pro",
                subtitle: "Perfect for small businesses (up to 15 users)",
                setup: "$299",
                monthly: "$35",
                popular: true,
                features: [
                  "Everything in Starter PLUS:",
                  "100GB secure storage",
                  "OnlyOffice integration",
                  "Calendar & Contacts",
                  "Mobile & desktop apps",
                  "Video calls & chat (Talk)",
                  "Email & phone support",
                  "30-minute video training"
                ],
                delivery: "3 business days"
              },
              {
                name: "Enterprise",
                subtitle: "Complete Microsoft 365 replacement",
                setup: "$499",
                monthly: "$45",
                features: [
                  "Everything in Business Pro PLUS:",
                  "250GB secure storage",
                  "Custom branding",
                  "Advanced security config",
                  "External storage integration",
                  "2 hours admin training",
                  "Data migration (50GB)",
                  "90 days priority support"
                ],
                delivery: "5 business days"
              }
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className={`h-full relative ${plan.popular ? 'border-primary border-2 shadow-xl' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <p className="text-slate-500 text-sm">{plan.subtitle}</p>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-primary">{plan.setup}</div>
                      <div className="text-slate-500 text-sm">One-time setup</div>
                      <div className="text-2xl font-bold text-slate-900 mt-2">{plan.monthly}/month</div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600">
                          <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center text-sm text-slate-500 mb-4">
                      <Zap className="w-4 h-4 inline mr-1" />
                      Delivery: {plan.delivery}
                    </div>
                    <Link href="/contact">
                      <Button className={`w-full ${plan.popular ? '' : 'variant-outline'}`} variant={plan.popular ? 'default' : 'outline'}>
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Card className="inline-block">
              <CardContent className="p-6">
                <h4 className="font-bold text-slate-900 mb-3">Add-Ons Available</h4>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
                  <span>Extra storage: $10/50GB/month</span>
                  <span>•</span>
                  <span>Email hosting: $5/user/month</span>
                  <span>•</span>
                  <span>Large migrations: $50/50GB</span>
                  <span>•</span>
                  <span>Security audit: $100</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-padding">
          <SectionHeading 
            title="Who Benefits from Private Cloud Solutions?" 
            subtitle="Blue Mogul's Nextcloud hosting is perfect for organizations that value data control, compliance, and cost savings."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Healthcare Practices",
                desc: "HIPAA-compliant storage for patient data. Secure team collaboration. Business Associate Agreements available.",
                quote: "Protect sensitive patient information with private, compliant cloud storage.",
                icon: Stethoscope
              },
              {
                title: "Legal Firms",
                desc: "Client confidentiality. Document version control. Secure file sharing with clients. Attorney-client privilege protection.",
                quote: "Keep privileged communications truly private.",
                icon: Scale
              },
              {
                title: "Financial Services",
                desc: "SOX compliance support. Encrypted data storage. Audit trails. Regulatory requirement adherence.",
                quote: "Meet regulatory requirements with complete data control.",
                icon: Building2
              },
              {
                title: "Creative Agencies",
                desc: "Large file handling. Client collaboration. Version history. No storage limits on creative assets.",
                quote: "Store and share high-resolution files without limits.",
                icon: Palette
              },
              {
                title: "Remote Teams",
                desc: "Anywhere access. Real-time collaboration. Video conferencing built-in. Team productivity tools.",
                quote: "Keep distributed teams connected and productive.",
                icon: Globe
              },
              {
                title: "Privacy-Conscious Businesses",
                desc: "Data sovereignty. No tech giant surveillance. European/US compliance. Complete control.",
                quote: "Your data stays yours, always.",
                icon: KeyRound
              }
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <industry.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{industry.title}</h3>
                    <p className="text-slate-600 mb-4">{industry.desc}</p>
                    <p className="text-sm italic text-slate-500 border-l-2 border-primary pl-3">"{industry.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Blue Mogul */}
      <section className="section-padding">
        <div className="container-padding">
          <SectionHeading 
            title="Why Choose Blue Mogul MSP?" 
            subtitle="Trusted by businesses across Texas, Louisiana & North Carolina"
          />
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">Our Credentials</h3>
              <ul className="space-y-4">
                {[
                  "10+ Years IT Experience - Managing enterprise infrastructure since 2015",
                  "100% Veteran-Owned - Military precision, reliability, and integrity",
                  "24/7 US-Based Support - Real people in Houston, not outsourced call centers",
                  "Enterprise Infrastructure - Professional datacenter hosting (Dallas, Texas)",
                  "Trusted by Businesses - Schools, and government agencies"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">What Sets Us Apart</h3>
              <ul className="space-y-4">
                {[
                  "Real MSP, Not Just Hosting - Complete IT infrastructure management",
                  "Custom Solutions - Every business is different, we tailor to your needs",
                  "Direct Phone Support - Call (346) 309-5514 - we actually answer",
                  "Fast Deployment - Most setups completed within 2-3 business days",
                  "Long-Term Partnership - We're here for the life of your business"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container-padding relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Ready to Take Control of Your Data?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Schedule a free 15-minute consultation to discuss your needs. No obligation, no pressure - just expert advice from Houston's veteran-owned MSP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 bg-white text-primary hover:bg-blue-50 font-bold text-lg shadow-xl">
                Request Free Consultation
              </Button>
            </Link>
            <a href="https://demo.bluemogul.us/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="h-14 px-8 text-white border-white/30 hover:bg-white/10 font-bold text-lg">
                Try Live Demo
              </Button>
            </a>
            <a href="tel:+13463095514">
              <Button size="lg" variant="outline" className="h-14 px-8 text-white border-white/30 hover:bg-white/10 font-bold text-lg">
                <Phone className="mr-2 h-5 w-5" />
                (346) 309-5514
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
