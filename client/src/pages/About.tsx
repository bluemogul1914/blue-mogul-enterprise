import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, Target, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import buildingImg from "@assets/2118_1773371443917.jpg";
import { SiLenovo, SiMicrosoft, SiVerizon } from "react-icons/si";

const partners = [
  { name: "Lenovo", icon: SiLenovo },
  { name: "Microsoft", icon: SiMicrosoft },
  { name: "Verizon", icon: SiVerizon },
  { name: "V2Cloud", icon: null },
  { name: "MSP Alliance", icon: null },
  { name: "D&H Distributing", icon: null },
];

export default function About() {
  return (
    <div className="bg-white min-h-screen">
       {/* Hero */}
       <section className="bg-primary pt-32 pb-16">
         <div className="container-padding text-center text-white">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-5xl font-bold font-display mb-4 text-white"
           >
             About Blue Mogul
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-xl text-blue-100 max-w-3xl mx-auto"
           >
             A veteran-owned managed service provider dedicated to empowering businesses with reliable, secure, and innovative technology solutions.
           </motion.p>
         </div>
       </section>

       <div className="container-padding py-20">
         <div className="grid md:grid-cols-2 gap-16 items-start">
           <div className="space-y-6">
             <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
             <p className="text-lg text-slate-600 leading-relaxed">
               At Blue Mogul, our mission is to bring military-grade precision and reliability to the IT services industry. We believe that technology should be an enabler, not a hurdle.
             </p>
             <p className="text-lg text-slate-600 leading-relaxed">
               Founded by veterans, we apply the principles of discipline, integrity, and service to every client relationship. Whether you are a small business, a school, or a government agency, we are committed to your operational success.
             </p>
             <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-6 bg-slate-50 rounded-xl">
                  <Target className="w-8 h-8 text-primary mb-3" />
                  <div className="font-bold text-slate-900 mb-1">Precision</div>
                  <div className="text-sm text-slate-500">Exact solutions for complex problems.</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl">
                  <Shield className="w-8 h-8 text-primary mb-3" />
                  <div className="font-bold text-slate-900 mb-1">Integrity</div>
                  <div className="text-sm text-slate-500">Honest advice and transparent pricing.</div>
                </div>
             </div>
           </div>
           
           <div className="relative">
             <div className="absolute inset-0 bg-primary/20 transform rotate-3 rounded-2xl"></div>
             <img 
               src={buildingImg}
               alt="801 Travis St, Houston TX — Blue Mogul HQ"
               className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-80 md:h-96"
             />
           </div>
         </div>
       </div>

       {/* Values Section */}
       <div className="bg-slate-50 py-20">
         <div className="container-padding">
           <h2 className="text-3xl font-bold text-center mb-16">Why Choose Blue Mogul?</h2>
           
           <div className="grid md:grid-cols-3 gap-8">
             {[
               {
                 icon: Users,
                 title: "Veteran Led",
                 desc: "Our leadership brings decades of disciplined experience from military service to the corporate IT world."
               },
               {
                 icon: Award,
                 title: "Certified Experts",
                 desc: "Our team holds industry-leading certifications to ensure you receive top-tier technical support."
               },
               {
                 icon: Shield,
                 title: "Security First",
                 desc: "We prioritize the security of your data in every solution we design and implement."
               }
             ].map((value, idx) => (
               <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                 <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-primary mb-6">
                   <value.icon className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                 <p className="text-slate-600">{value.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </div>

       {/* CTA + Partners */}
       <div className="container-padding py-24 text-center">
         <h2 className="text-3xl font-bold text-slate-900 mb-6">Join Our Growing List of Partners</h2>
         <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
           We are proud to serve businesses across Texas, Louisiana, and North Carolina. Let us help you take your technology to the next level.
         </p>
         <Link href="/contact">
           <Button size="lg" className="shadow-xl shadow-primary/20">
             Work With Us
           </Button>
         </Link>

         {/* Partner Logos */}
         <div className="mt-16">
           <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-8">Trusted Partners &amp; Vendors</p>
           <div className="flex flex-wrap justify-center items-center gap-8">
             {partners.map((partner, i) => (
               <motion.div
                 key={partner.name}
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.07 }}
                 className="flex flex-col items-center gap-2 group"
               >
                 <div className="h-14 px-6 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-xl group-hover:border-primary/30 group-hover:bg-blue-50 transition-colors">
                   {partner.icon ? (
                     <partner.icon className="w-8 h-8 text-slate-500 group-hover:text-primary transition-colors" />
                   ) : (
                     <span className="text-sm font-bold text-slate-500 group-hover:text-primary transition-colors whitespace-nowrap">
                       {partner.name}
                     </span>
                   )}
                 </div>
                 <span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">{partner.name}</span>
               </motion.div>
             ))}
           </div>
         </div>
       </div>
    </div>
  );
}
