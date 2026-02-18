"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const options = [
  {
    id: "home-kit",
    title: "At-Home Kit",
    subtitle: "Finger-prick convenience",
    description:
      "A clinical-grade collection kit arrives at your door. Collect your sample in under five minutes and return it with the prepaid mailer.",
    features: [
      "Simple finger-prick collection",
      "Prepaid return mailer included",
      "No appointment needed",
      "5–7 day results",
      "Up to 75 biomarkers",
    ],
    cta: "Order a Kit",
    accent: "#E3B77F",
    bg: "#FAF7F2",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="8" y="10" width="32" height="28" rx="4" stroke="#E3B77F" strokeWidth="2" />
        <path d="M24 18v12M18 24h12" stroke="#E3B77F" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 8l4 4h8l4-4" stroke="#E3B77F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "lab-slip",
    title: "Lab Slip",
    subtitle: "Professional venous draw",
    description:
      "We generate a lab order you take to any LabCorp or Quest Diagnostics location. Supports broader panel options with a professional draw.",
    features: [
      "Professional venous draw",
      "LabCorp & Quest locations",
      "150+ biomarker support",
      "5–7 day results",
      "No kit shipping required",
    ],
    cta: "Find a Lab",
    accent: "#313E4C",
    bg: "#F0E9DF",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="18" r="10" stroke="#313E4C" strokeWidth="2" />
        <path d="M16 38c0-4.42 3.58-8 8-8s8 3.58 8 8" stroke="#313E4C" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 14l4-4" stroke="#313E4C" strokeWidth="2" strokeLinecap="round" />
        <circle cx="34" cy="10" r="2" fill="#313E4C" />
      </svg>
    ),
  },
];

export function DrawOptions() {
  return (
    <section id="draw-options" className="py-24 bg-[#F0E9DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E3B77F] mb-3">
            Collection Methods
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#313E4C] mb-4">
            Choose Your Draw
          </h2>
          <p className="text-lg text-[#6B7582] max-w-xl mx-auto">
            Two paths to the same precise results. Pick what fits your lifestyle.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {options.map((opt, i) => (
            <motion.div
              key={opt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 border border-[#E3D5C5] shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="mb-6">{opt.icon}</div>

              <h3 className="text-2xl font-bold font-serif text-[#313E4C] mb-1">
                {opt.title}
              </h3>
              <p className="text-sm font-medium text-[#E3B77F] mb-4">{opt.subtitle}</p>
              <p className="text-[#6B7582] text-sm leading-relaxed mb-6">
                {opt.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8">
                {opt.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#313E4C]">
                    <span className="w-5 h-5 rounded-full bg-[#F5DFB8] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6l2.5 2.5 4.5-5"
                          stroke="#E3B77F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={
                  opt.id === "home-kit"
                    ? "w-full bg-[#E3B77F] hover:bg-[#D4A56F] text-[#1C2733] font-semibold h-12 rounded-xl border-0"
                    : "w-full bg-[#313E4C] hover:bg-[#1C2733] text-white font-semibold h-12 rounded-xl border-0"
                }
              >
                <a href="#pricing">{opt.cta}</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
