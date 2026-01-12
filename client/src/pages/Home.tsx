import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Globe, Server, Phone, Users, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* server room abstract tech */}
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50" />
        </div>

        <div className="container-padding relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-blue-200 border border-primary/30 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Veteran-Owned Managed Service Provider
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 font-display">
                Your Trusted <span className="text-blue-400">IT Partner</span> for Enterprise Growth
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl text-slate-300 mb-8 leading-relaxed">
                Empower your business with reliable IT solutions. We bring military precision to managed services, cybersecurity, and connectivity for SMBs and government agencies.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" className="text-lg h-14 px-8 shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="text-lg h-14 px-8 bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:block relative"
            >
               {/* Decorative elements or a floating dashboard image could go here */}
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                 {/* dashboard analytics screen */}
                 <img 
                   src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                   alt="IT Analytics Dashboard"
                   className="w-full h-auto object-cover"
                 />
                 <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-12">
        <div className="container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years IT Experience", value: "10+", icon: Clock },
              { label: "Service Locations", value: "6", icon: MapPin },
              { label: "Support Available", value: "24/7", icon: Users },
              { label: "Veteran Owned", value: "100%", icon: Shield },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                <div className="text-4xl font-bold font-display mb-1">{stat.value}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-padding">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* professional team meeting */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="Blue Mogul Team"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                title="Veteran-Owned Excellence in IT Services" 
                alignment="left"
                className="mb-8"
              />
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Blue Mogul brings military precision and reliability to your business technology. As a veteran-owned managed service provider, we understand the importance of mission-critical systems and reliable support.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We specialize in delivering comprehensive IT solutions tailored to the unique needs of small and medium businesses, schools, and government agencies across Texas, Louisiana, and North Carolina.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-padding">
          <SectionHeading 
            title="Comprehensive IT Solutions" 
            subtitle="Designed to optimize operations, enhance security, and provide reliable connectivity."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Broadband Solutions",
                desc: "Reliable high-speed connectivity with fiber, wireless, and global 5G options to keep your business connected anywhere.",
                icon: Globe
              },
              {
                title: "Voice Solutions",
                desc: "Modern communication systems including Cloud PBX, SIP Trunking, and traditional voice lines for clear business communications.",
                icon: Phone
              },
              {
                title: "Managed IT Services",
                desc: "Complete IT management including Office365, Nextcloud, patching, DaaS, and cloud infrastructure support.",
                icon: Server
              },
              {
                title: "Cybersecurity",
                desc: "Comprehensive security with audits, continuous monitoring, and endpoint protection to safeguard your valuable data.",
                icon: Shield
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{service.desc}</p>
                    <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:underline">
                      Learn more <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="container-padding">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Trusted by businesses across Texas, Louisiana, and North Carolina."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Blue Mogul transformed our IT infrastructure. Their veteran-led team provided exceptional service beyond our expectations.",
                author: "Diane Williams",
                role: "Chairperson, WHF Group"
              },
              {
                quote: "Their cybersecurity solutions gave us peace of mind. Professional, responsive, and truly invested in our success.",
                author: "Derrick Mahoney",
                role: "Broker, Mahoney Elite Realty"
              },
              {
                quote: "The broadband solution they implemented has dramatically improved our connectivity. A reliable partner we can trust.",
                author: "Tonya Thomas",
                role: "CEO, Stileto Chique"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container-padding relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Ready to Transform Your IT Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Schedule a consultation with our team to discuss how Blue Mogul can help optimize your technology infrastructure.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-8 bg-white text-primary hover:bg-blue-50 font-bold text-lg shadow-xl">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
