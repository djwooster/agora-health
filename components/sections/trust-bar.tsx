"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const stats = [
  { display: "12,000+", label: "Panels Analyzed" },
  { display: "100%", label: "CLIA-Certified Labs" },
  { display: "50,000+", label: "Biomarkers Tracked" },
  { display: "5–7 days", label: "Average Turnaround" },
];

export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#F0E9DF] py-14" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center flex flex-col items-center"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
              }}
            >
              <div className="text-3xl sm:text-4xl font-bold font-serif text-[#313E4C] mb-1">
                {stat.display}
              </div>
              <div className="text-sm text-[#6B7582] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
