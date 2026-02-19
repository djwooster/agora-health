"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:py-32">

          {/* Left: Content */}
          <motion.div variants={container} initial="hidden" animate="show">
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
              className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold font-serif text-[#313E4C] leading-[1.08] tracking-tight mb-6"
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
            <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-6">
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

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            {/* Decorative orbs behind image */}
            <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#E3B77F]/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-[#F5DFB8]/50 blur-2xl pointer-events-none" />

            <div className="relative h-[620px] rounded-3xl overflow-hidden shadow-2xl shadow-[#313E4C]/15">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
                alt="Medical professional reviewing blood test results"
                fill
                className="object-cover"
                priority
              />
              {/* Warm gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2733]/50 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 flex items-center gap-4 shadow-lg">
                  <div className="w-10 h-10 rounded-full bg-[#E3B77F]/20 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        stroke="#E3B77F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#313E4C]">Physician-reviewed</p>
                    <p className="text-xs text-[#6B7582]">Results in 5–7 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none" />
    </section>
  );
}
