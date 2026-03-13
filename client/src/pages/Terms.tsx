import { motion } from "framer-motion";
import { Link } from "wouter";
import { FileText } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing our website, using our services, or signing any service agreement, you agree to be bound by these Terms & Conditions, our Privacy Policy, and any applicable Service Orders or Statements of Work. If you are entering into this Agreement on behalf of a company or legal entity, you represent that you have the authority to bind such entity.`,
  },
  {
    title: "2. Services",
    items: [
      { label: "Managed IT Services", text: "Remote monitoring, help desk, patch management, endpoint protection." },
      { label: "Nextcloud Private Cloud", text: "Secure file hosting, collaboration, document editing." },
      { label: "Fiber Internet", text: "High-speed broadband connectivity." },
      { label: "Voice Services", text: "VoIP phone systems via Voip.ms." },
      { label: "Cybersecurity", text: "Security monitoring, audits, incident response." },
      { label: "Consulting", text: "Technology strategy and project implementation." },
    ],
  },
  {
    title: "3. Service Levels",
    content: "Standard response times: Critical (P1 — system down) 1 hour; High (P2 — major feature impaired) 4 hours; Medium (P3 — minor issue) 8 hours; Low (P4 — information request) 24 hours. Specific SLAs are defined in each Service Order.",
  },
  {
    title: "4. Fees & Payment",
    items: [
      { label: "Monthly recurring", text: "Billed in advance on the 1st of each month." },
      { label: "Payment terms", text: "Invoices due upon receipt. Late payments incur 1.5% monthly interest (18% APR)." },
      { label: "Suspension", text: "Unpaid invoices may result in service suspension. Reactivation fee: $150." },
      { label: "Price changes", text: "30 days notice. You may terminate without penalty before the change takes effect." },
    ],
  },
  {
    title: "5. Term & Termination",
    content: "Initial term is typically 12 months, auto-renewing annually with 60 days written notice to cancel. Early termination: 90 days notice required; ETL for fiber $200–$500, other services 50% of remaining contract value. Upon termination, data export available within 15 days upon request; data deleted after 90 days.",
  },
  {
    title: "6. Client Responsibilities",
    content: "You agree to provide accurate information, designate authorized contacts, provide reasonable system access, comply with security policies, maintain your own data backups, keep credentials confidential, and notify us immediately of any security incidents.",
  },
  {
    title: "7. Acceptable Use Policy",
    content: "You may not use our services to violate any law, infringe intellectual property, transmit malware, launch denial-of-service attacks, send spam, access unauthorized systems, or engage in phishing or fraud. Violations may result in immediate suspension or termination.",
  },
  {
    title: "8. Intellectual Property",
    content: "We retain all rights to our software, tools, AI agents, workflows, documentation, and branding. You receive a limited, non-exclusive, non-transferable license to use our services. You retain all rights to your data and content.",
  },
  {
    title: "9. Data Ownership",
    content: "You own all your data. We do not mine, sell, or use your data for any purpose other than providing services to you. Backups are maintained as described in service agreements, but you are ultimately responsible for your critical data.",
  },
  {
    title: "10. Limitation of Liability",
    content: "Our total liability shall not exceed fees paid during the 12 months preceding the claim. Neither party shall be liable for indirect, incidental, special, consequential, or punitive damages. We are not liable for acts or omissions of third-party providers.",
  },
  {
    title: "11. Warranty Disclaimer",
    content: 'SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.',
  },
  {
    title: "12. Dispute Resolution",
    content: "Governed by Texas law, venue in Harris County. Parties shall attempt informal resolution for 30 days before arbitration. Binding arbitration in Houston under AAA rules. All disputes resolved individually — no class actions.",
  },
  {
    title: "13. Contact",
    content: "General: info@bluemogul.biz | Support: support@bluemogul.biz | Legal: legal@bluemogul.biz | Phone: (346) 309-5514 | 801 Travis St, Houston, TX 77002",
  },
];

export default function Terms() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-primary pt-32 pb-16">
        <div className="container-padding text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-4">
            <FileText className="w-10 h-10 text-blue-200" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
            Terms &amp; Conditions
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
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/gdpr" className="hover:text-primary transition-colors">GDPR</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
