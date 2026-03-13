import { motion } from "framer-motion";
import { Link } from "wouter";
import { Lock } from "lucide-react";

const sections = [
  {
    title: "Our Commitment to GDPR",
    content: "Blue Mogul Enterprise, LLC is committed to protecting the personal data of individuals in the European Economic Area (EEA) and the United Kingdom in accordance with the General Data Protection Regulation (GDPR). This page summarizes your rights and how we uphold them.",
  },
  {
    title: "Data Controller",
    content: "Blue Mogul Enterprise, LLC acts as the Data Controller for personal data collected through our website and services. Our Data Protection Officer (DPO) can be contacted at dpo@bluemogul.biz.",
  },
  {
    title: "Legal Bases for Processing",
    items: [
      { label: "Contract Performance", text: "Processing necessary to deliver the services you have requested." },
      { label: "Legitimate Interests", text: "Improving services, ensuring security, and preventing fraud." },
      { label: "Consent", text: "For marketing communications — you may withdraw consent at any time." },
      { label: "Legal Obligation", text: "Complying with applicable laws and regulations." },
    ],
  },
  {
    title: "Your Rights Under GDPR",
    items: [
      { label: "Right of Access (Art. 15)", text: "Request a copy of the personal data we hold about you." },
      { label: "Right to Rectification (Art. 16)", text: "Request correction of inaccurate or incomplete data." },
      { label: "Right to Erasure (Art. 17)", text: "Request deletion of your personal data, subject to legal retention obligations." },
      { label: "Right to Restriction (Art. 18)", text: "Request that we limit how we process your data." },
      { label: "Right to Data Portability (Art. 20)", text: "Receive your data in a structured, machine-readable format." },
      { label: "Right to Object (Art. 21)", text: "Object to processing for direct marketing or legitimate interest purposes." },
      { label: "Right to Withdraw Consent", text: "Withdraw consent at any time without affecting prior processing." },
    ],
  },
  {
    title: "How to Exercise Your Rights",
    content: "Submit a request by email to privacy@bluemogul.biz or by mail to: Blue Mogul Enterprise, LLC, 801 Travis St, Houston, TX 77002. We will respond within 30 days. We may need to verify your identity before processing your request.",
  },
  {
    title: "International Data Transfers",
    content: "Your data may be processed in the United States, where our servers are located in Dallas, Texas. For EU residents, we ensure adequate safeguards through Standard Contractual Clauses (SCCs) with all subprocessors.",
  },
  {
    title: "Data Retention",
    items: [
      { label: "Account information", text: "Retained for the duration of your account plus 90 days." },
      { label: "Billing records", text: "7 years to satisfy tax and legal obligations." },
      { label: "Support tickets", text: "2 years." },
      { label: "Marketing data", text: "Until you unsubscribe." },
      { label: "Server logs", text: "90 days." },
    ],
  },
  {
    title: "Cookies & Tracking",
    content: "We use essential, analytical, and functional cookies. Marketing cookies are set only with your explicit consent. You can manage your cookie preferences through our cookie consent banner or your browser settings.",
  },
  {
    title: "Security Measures",
    content: "We protect your data with SSL/TLS encryption in transit, encryption at rest where applicable, 24/7 security monitoring via Wazuh, regular security audits, two-factor authentication for all staff, and access controls on a need-to-know basis.",
  },
  {
    title: "Filing a Complaint",
    content: "If you believe we have not handled your data appropriately, you have the right to lodge a complaint with your local data protection authority (e.g., the UK ICO or your EU Member State supervisory authority).",
  },
  {
    title: "Contact Our DPO",
    content: "Data Protection Officer: dpo@bluemogul.biz | Privacy inquiries: privacy@bluemogul.biz | Phone: (346) 309-5514 | 801 Travis St, Houston, TX 77002",
  },
];

export default function Gdpr() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-primary pt-32 pb-16">
        <div className="container-padding text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-4">
            <Lock className="w-10 h-10 text-blue-200" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
            GDPR Compliance
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-blue-200 text-sm">
            General Data Protection Regulation &nbsp;·&nbsp; Effective March 15, 2026
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">{section.title}</h2>
                {section.content && <p className="text-slate-600 leading-relaxed">{section.content}</p>}
                {section.items && (
                  <ul className="space-y-2 mt-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-slate-600">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span><strong className="text-slate-800">{item.label}:</strong> {item.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500 space-y-1">
            <p>© 2026 Blue Mogul Enterprise, LLC. All rights reserved. | Veteran-Owned | Houston, Texas</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
