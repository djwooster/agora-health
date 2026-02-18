"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 12000, suffix: "+", label: "Panels Analyzed", prefix: "" },
  { value: 100, suffix: "%", label: "CLIA-Certified Labs", prefix: "" },
  { value: 50000, suffix: "+", label: "Biomarkers Tracked", prefix: "" },
  { value: 57, suffix: " days", label: "Average Turnaround", prefix: "5–" },
];

function CountUp({
  target,
  suffix,
  prefix,
  started,
}: {
  target: number;
  suffix: string;
  prefix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target]);

  // Special handling for "5–7 days" display
  if (prefix === "5–") {
    return (
      <span>
        5–7<span className="text-2xl font-normal ml-1">days</span>
      </span>
    );
  }

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

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
                transform: isInView ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div className="text-3xl sm:text-4xl font-bold font-serif text-[#313E4C] mb-1">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  started={isInView}
                />
              </div>
              <div className="text-sm text-[#6B7582] font-medium">{stat.label}</div>
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[#D4C4B0]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
