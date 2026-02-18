"use client";

import { motion } from "framer-motion";

const categories = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle cx="16" cy="16" r="6" stroke="#E3B77F" strokeWidth="2" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="#E3B77F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    name: "Metabolic Health",
    desc: "Glucose, insulin, HbA1c, and metabolic markers",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M8 20c0-4.42 3.58-8 8-8s8 3.58 8 8" stroke="#E3B77F" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="10" r="4" stroke="#E3B77F" strokeWidth="2" />
        <path d="M12 26h8" stroke="#E3B77F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    name: "Hormones",
    desc: "Testosterone, estrogen, cortisol, DHEA, and more",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M16 8c-5.5 0-8 4-8 8s2.5 8 8 8 8-4 8-8-2.5-8-8-8z" stroke="#E3B77F" strokeWidth="2" />
        <path d="M10 14c1.5-1 3-1.5 6-1.5s4.5.5 6 1.5" stroke="#E3B77F" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    name: "Heart Health",
    desc: "LDL, HDL, triglycerides, ApoB, hsCRP",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <rect x="6" y="10" width="20" height="14" rx="3" stroke="#E3B77F" strokeWidth="2" />
        <path d="M11 10V8a5 5 0 0110 0v2" stroke="#E3B77F" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 17v2" stroke="#E3B77F" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="16" r="1.5" fill="#E3B77F" />
      </svg>
    ),
    name: "Vitamins & Minerals",
    desc: "Vitamin D, B12, folate, iron, magnesium",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M8 16c0-4.42 3.58-8 8-8" stroke="#E3B77F" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 16c0 4.42-3.58 8-8 8" stroke="#E3B77F" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="16" r="3" fill="#E3B77F" opacity="0.5" />
        <circle cx="16" cy="16" r="1.5" fill="#E3B77F" />
      </svg>
    ),
    name: "Inflammation",
    desc: "hsCRP, IL-6, homocysteine, ferritin",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <ellipse cx="16" cy="16" rx="5" ry="7" stroke="#E3B77F" strokeWidth="2" />
        <path d="M16 9V7M16 25v-2" stroke="#E3B77F" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 12l-2-1M22 12l2-1M10 20l-2 1M22 20l2 1" stroke="#E3B77F" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    name: "Thyroid",
    desc: "TSH, Free T3, Free T4, thyroid antibodies",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M16 8c-1 3-4 5-4 9s3 7 4 7 4-3 4-7-3-6-4-9z" stroke="#E3B77F" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 18h12" stroke="#E3B77F" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    name: "Blood Health",
    desc: "CBC, RBC, WBC, platelets, hemoglobin",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M8 20l4-8 4 4 4-8 4 8" stroke="#E3B77F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 24h20" stroke="#E3B77F" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    name: "Fitness & Recovery",
    desc: "Creatine kinase, lactic acid, growth hormone",
  },
];

export function Biomarkers() {
  return (
    <section className="py-24 bg-[#FAF7F2]">
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
            What We Measure
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#313E4C] mb-4">
            150+ Biomarkers
          </h2>
          <p className="text-lg text-[#6B7582] max-w-xl mx-auto">
            Covering every system that drives your health, performance, and longevity.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              className="bg-white rounded-2xl p-6 border border-[#E3D5C5] hover:border-[#E3B77F] hover:shadow-sm transition-all cursor-default"
            >
              <div className="mb-4">{cat.icon}</div>
              <h3 className="text-base font-bold text-[#313E4C] mb-1.5">{cat.name}</h3>
              <p className="text-sm text-[#6B7582] leading-snug">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
