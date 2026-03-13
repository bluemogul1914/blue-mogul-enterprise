import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield } from "lucide-react";

const sections = [
  {
    title: "1. Introduction",
    content: `Blue Mogul Enterprise, LLC ("Blue Mogul," "we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. We are a 100% veteran-owned Texas limited liability company headquartered in Houston, Texas.`,
  },
  {
    title: "2. Information We Collect",
    items: [
      { label: "Contact & Account Info", text: "Name, email, phone number, company name, billing information when you contact us, request demos, or create an account." },
      { label: "Automatically Collected", text: "IP address, browser type, operating system, pages viewed, and device identifiers when you visit our websites." },
      { label: "Third-Party Sources", text: "Information from partners including Frontier Communications, TravelSim/BICS, Voip.ms, Vultr, Stripe, and others." },
    ],
  },
  {
    title: "3. How We Use Your Information",
    items: [
      { label: "Service Delivery", text: "Delivering, maintaining, and improving our IT services, cloud hosting, fiber internet, and voice solutions." },
      { label: "Account Management", text: "Creating and managing your account, billing, and technical support." },
      { label: "Communication", text: "Responding to inquiries, sending service updates, and marketing (you may opt out anytime)." },
      { label: "Security", text: "Detecting and preventing fraud, abuse, and security incidents." },
      { label: "Legal Compliance", text: "Complying with applicable laws and regulations." },
    ],
  },
  {
    title: "4. Legal Basis for Processing (GDPR)",
    content: "For individuals in the European Economic Area, we process personal data based on contract performance, legitimate interests, consent (for marketing), and legal obligations. You may withdraw consent at any time.",
  },
  {
    title: "5. Information Sharing",
    content: "We do not sell your personal information. We share data only with trusted service providers (Frontier, Voip.ms, Vultr, Stripe, n8n, ITFlow) who are bound by confidentiality agreements, and as required by law.",
  },
  {
    title: "6. Cookies",
    content: "We use essential, analytics, functional, and (with consent) marketing cookies. You can control cookies through your browser settings. See our Cookie Policy for details.",
  },
  {
    title: "7. Data Security",
    content: "We implement SSL/TLS encryption, 24/7 security monitoring (Wazuh), regular audits, two-factor authentication for staff, and daily backups with 30-day retention at our Dallas, Texas datacenters.",
  },
  {
    title: "8. Data Retention",
    items: [
      { label: "Account information", text: "Duration of account plus 90 days." },
      { label: "Billing records", text: "7 years (legal requirements)." },
      { label: "Support tickets", text: "2 years." },
      { label: "Logs", text: "90 days." },
    ],
  },
  {
    title: "9. Your Rights",
    content: "Depending on your location, you may request access, correction, deletion, restriction, or portability of your data; object to processing; or withdraw consent. Contact privacy@bluemogul.biz. We respond within 30 days.",
  },
  {
    title: "10. California Privacy Rights (CCPA)",
    content: "California residents have the right to know what data we collect, delete personal information, and opt out of sale (we do not sell data). Contact privacy@bluemogul.biz or call (346) 309-5514.",
  },
  {
    title: "11. Children's Privacy",
    content: "Our services are not directed to individuals under 18. We do not knowingly collect information from children.",
  },
  {
    title: "12. Contact Us",
    content: "Email: privacy@bluemogul.biz | Phone: (346) 309-5514 | Mail: 801 Travis St, Houston, TX 77002 | DPO: dpo@bluemogul.biz",
  },
];

export default function Privacy() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-primary pt-32 pb-16">
        <div className="container-padding text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-4">
            <Shield className="w-10 h-10 text-blue-200" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
            Privacy Policy
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-blue-200 text-sm">
            Effective Date: March 15, 2026 &nbsp;·&nbsp; Version 1.0
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
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/gdpr" className="hover:text-primary transition-colors">GDPR</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
