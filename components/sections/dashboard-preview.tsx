"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const biomarkerResults = [
  { name: "Glucose", value: "89", unit: "mg/dL", range: "70–99", status: "Optimized", trend: "+2%" },
  { name: "Testosterone", value: "742", unit: "ng/dL", range: "264–916", status: "Optimized", trend: "+8%" },
  { name: "Vitamin D", value: "38", unit: "ng/mL", range: "30–80", status: "Watch", trend: "-4%" },
  { name: "LDL", value: "118", unit: "mg/dL", range: "<100", status: "Act", trend: "+12%" },
  { name: "hsCRP", value: "0.4", unit: "mg/L", range: "<1.0", status: "Optimized", trend: "-15%" },
  { name: "Free T3", value: "3.1", unit: "pg/mL", range: "2.3–4.2", status: "Optimized", trend: "0%" },
];

const statusConfig = {
  Optimized: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  Watch: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  Act: { bg: "bg-rose-50", text: "text-rose-700", dot: "bg-rose-500" },
};

export function DashboardPreview() {
  return (
    <section className="py-24 bg-[#1C2733] overflow-hidden">
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
            Results Dashboard
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-white mb-4">
            Your results, beautifully organized.
          </h2>
          <p className="text-lg text-[#8E9BAA] max-w-xl mx-auto">
            Every biomarker explained, contextualized, and tracked over time.
          </p>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 18 }}
          className="max-w-4xl mx-auto"
        >
          {/* Browser chrome */}
          <div className="bg-[#2D3D4E] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
            {/* Top bar */}
            <div className="bg-[#243140] px-6 py-3 flex items-center gap-3 border-b border-[#354758]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-[#354758] rounded-md px-3 py-1 text-xs text-[#6B7582] max-w-sm">
                  app.agorahealth.com/results
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6">
              {/* Dashboard header row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
                <div>
                  <h3 className="text-white font-bold font-serif text-lg">
                    Your Results — Feb 2026
                  </h3>
                  <p className="text-[#8E9BAA] text-sm mt-0.5">
                    75 biomarkers analyzed · Reviewed by Dr. Sarah Chen, MD
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-medium">
                    68% Optimized
                  </span>
                  <span className="text-xs bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full font-medium">
                    22% Watch
                  </span>
                  <span className="text-xs bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full font-medium">
                    10% Act
                  </span>
                </div>
              </div>

              {/* Biomarker cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {biomarkerResults.map((marker, i) => {
                  const config = statusConfig[marker.status as keyof typeof statusConfig];
                  const isPositive = marker.trend.startsWith("+");
                  const isZero = marker.trend === "0%";
                  return (
                    <motion.div
                      key={marker.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                      className="bg-[#243140] rounded-xl p-4 border border-[#354758]"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-[#8E9BAA]">
                          {marker.name}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${config.bg} ${config.text}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
                          {marker.status}
                        </span>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <span className="text-2xl font-bold font-serif text-white">
                            {marker.value}
                          </span>
                          <span className="text-xs text-[#6B7582] ml-1">{marker.unit}</span>
                        </div>
                        <div className="text-right">
                          <div
                            className={`text-xs font-medium ${
                              isZero
                                ? "text-[#6B7582]"
                                : isPositive
                                ? marker.status === "Act"
                                  ? "text-rose-400"
                                  : "text-emerald-400"
                                : "text-emerald-400"
                            }`}
                          >
                            {marker.trend}
                          </div>
                          <div className="text-xs text-[#6B7582]">vs last draw</div>
                        </div>
                      </div>
                      {/* Range bar */}
                      <div className="mt-3">
                        <div className="h-1 bg-[#354758] rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              marker.status === "Optimized"
                                ? "bg-emerald-500"
                                : marker.status === "Watch"
                                ? "bg-amber-500"
                                : "bg-rose-500"
                            }`}
                            style={{
                              width:
                                marker.status === "Optimized"
                                  ? "65%"
                                  : marker.status === "Watch"
                                  ? "35%"
                                  : "88%",
                            }}
                          />
                        </div>
                        <div className="text-xs text-[#6B7582] mt-1">
                          Range: {marker.range} {marker.unit}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
