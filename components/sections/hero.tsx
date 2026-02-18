"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const orbs = [
  { size: 400, x: "70%", y: "10%", color: "rgba(227,183,127,0.12)", delay: 0 },
  { size: 300, x: "10%", y: "60%", color: "rgba(49,62,76,0.08)", delay: 1 },
  { size: 200, x: "80%", y: "65%", color: "rgba(245,223,184,0.18)", delay: 0.5 },
  { size: 150, x: "30%", y: "20%", color: "rgba(227,183,127,0.1)", delay: 1.5 },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FAF7F2] overflow-hidden pt-16">
      {/* Animated background orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, -10, 0],
            y: [0, -15, 10, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E3B77F] bg-[#F5DFB8]/40 px-4 py-2 rounded-full border border-[#E3B77F]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3B77F] animate-pulse" />
              Physician-reviewed results
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-[#313E4C] leading-[1.08] tracking-tight mb-6"
          >
            Know Your Body.{" "}
            <span className="text-[#E3B77F]">Own Your Health.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-[#6B7582] leading-relaxed max-w-xl mb-10"
          >
            Comprehensive blood analysis from your fingertip to a
            physician-reviewed dashboard — no lab visit required.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#E3B77F] hover:bg-[#D4A56F] text-[#1C2733] font-semibold px-8 h-14 rounded-full text-base border-0 shadow-lg shadow-[#E3B77F]/25 hover:shadow-[#E3B77F]/40 transition-all duration-300"
            >
              <a href="#pricing">Order a Test Kit</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[#313E4C] text-[#313E4C] hover:bg-[#313E4C] hover:text-white font-semibold px-8 h-14 rounded-full text-base transition-all duration-300 bg-transparent"
            >
              <a href="#draw-options">Find a Lab</a>
            </Button>
          </motion.div>

          {/* Social proof mini row */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            {[
              { value: "12,000+", label: "panels analyzed" },
              { value: "CLIA", label: "certified labs" },
              { value: "5–7 days", label: "to results" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="text-lg font-bold font-serif text-[#313E4C]">
                  {stat.value}
                </span>
                <span className="text-sm text-[#6B7582]">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none" />
    </section>
  );
}
