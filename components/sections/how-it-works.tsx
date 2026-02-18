"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Order",
    description:
      "Choose a test plan and receive a finger-prick kit or lab slip at your door within days.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="8" y="6" width="24" height="28" rx="3" stroke="#E3B77F" strokeWidth="2" />
        <path d="M14 14h12M14 20h12M14 26h8" stroke="#E3B77F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Collect",
    description:
      "Use your at-home finger-prick kit in minutes, or visit a local LabCorp or Quest for a professional draw.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="14" r="8" stroke="#E3B77F" strokeWidth="2" />
        <path d="M20 22v4M20 30v2" stroke="#E3B77F" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 34c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="#E3B77F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Review",
    description:
      "Receive physician-reviewed results in your personalized dashboard within 5–7 days. Understand every number.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="6" y="8" width="28" height="24" rx="3" stroke="#E3B77F" strokeWidth="2" />
        <path d="M12 22l4-5 4 3 4-6 4 4" stroke="#E3B77F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-[#FAF7F2]">
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
            Simple Process
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#313E4C] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#6B7582] max-w-xl mx-auto">
            From order to insight in three straightforward steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-[#E3D5C5]">
            <motion.div
              className="h-full bg-[#E3B77F] origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                className="flex flex-col items-center lg:items-center text-center relative"
              >
                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden w-px h-12 bg-[#E3D5C5] my-2 mx-auto" />
                )}

                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#F5DFB8] border-2 border-[#E3B77F] flex items-center justify-center relative z-10">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#E3B77F] flex items-center justify-center">
                    <span className="text-xs font-bold text-[#1C2733]">{i + 1}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-serif text-[#313E4C] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6B7582] leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
