"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tiers = [
  {
    id: "vital",
    name: "Vital",
    price: { once: 79, sub: 71 },
    description: "Essential markers for a clear health baseline.",
    markers: "30 core markers",
    cadence: "Quarterly",
    draw: "Finger-prick kit",
    features: [
      "30 core biomarkers",
      "Finger-prick kit included",
      "Quarterly testing",
      "Basic results view",
      "Reference ranges",
    ],
    cta: "Start with Vital",
    popular: false,
  },
  {
    id: "prime",
    name: "Prime",
    price: { once: 149, sub: 134 },
    description: "Deep insights with trend tracking and expert summaries.",
    markers: "75 markers",
    cadence: "Monthly",
    draw: "Kit or Lab",
    features: [
      "75 biomarkers",
      "Kit or lab draw",
      "Monthly testing",
      "Trend graphs",
      "Physician insight summaries",
      "Priority support",
    ],
    cta: "Start with Prime",
    popular: true,
  },
  {
    id: "apex",
    name: "Apex",
    price: { once: 249, sub: 224 },
    description: "Comprehensive optimization with personal health coaching.",
    markers: "150+ markers",
    cadence: "Monthly",
    draw: "Kit or Lab",
    features: [
      "150+ biomarkers",
      "Kit or lab draw",
      "Monthly testing",
      "Health coach access",
      "Custom optimization protocols",
      "Dedicated care coordinator",
      "Priority lab processing",
    ],
    cta: "Start with Apex",
    popular: false,
  },
];

export function Pricing() {
  const [isSubscription, setIsSubscription] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-[#F0E9DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E3B77F] mb-3">
            Transparent Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#313E4C] mb-4">
            Plans for Every Goal
          </h2>
          <p className="text-lg text-[#6B7582] max-w-xl mx-auto mb-8">
            Start with a one-time test or save 10% with a subscription.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 border border-[#E3D5C5] shadow-sm">
            <button
              onClick={() => setIsSubscription(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isSubscription
                  ? "bg-[#313E4C] text-white shadow-sm"
                  : "text-[#6B7582] hover:text-[#313E4C]"
              }`}
            >
              One-time
            </button>
            <button
              onClick={() => setIsSubscription(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                isSubscription
                  ? "bg-[#313E4C] text-white shadow-sm"
                  : "text-[#6B7582] hover:text-[#313E4C]"
              }`}
            >
              Subscribe
              <span className="text-xs bg-[#E3B77F] text-[#1C2733] px-1.5 py-0.5 rounded-full font-bold">
                −10%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative flex flex-col bg-white rounded-2xl p-8 border-2 transition-shadow hover:shadow-lg ${
                tier.popular
                  ? "border-[#E3B77F] shadow-md"
                  : "border-[#E3D5C5] shadow-sm"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#E3B77F] text-[#1C2733] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold font-serif text-[#313E4C] mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-[#6B7582]">{tier.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <motion.div
                  key={isSubscription ? "sub" : "once"}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-end gap-1"
                >
                  <span className="text-4xl font-bold font-serif text-[#313E4C]">
                    ${isSubscription ? tier.price.sub : tier.price.once}
                  </span>
                  <span className="text-[#6B7582] text-sm mb-1.5">
                    /{isSubscription ? "mo" : "panel"}
                  </span>
                </motion.div>
                <p className="text-xs text-[#6B7582] mt-1">
                  {tier.markers} · {tier.cadence} · {tier.draw}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#313E4C]">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        tier.popular ? "bg-[#F5DFB8]" : "bg-[#F0E9DF]"
                      }`}
                    >
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
                className={`w-full h-12 rounded-xl font-semibold text-base border-0 ${
                  tier.popular
                    ? "bg-[#E3B77F] hover:bg-[#D4A56F] text-[#1C2733] shadow-md shadow-[#E3B77F]/30"
                    : "bg-[#313E4C] hover:bg-[#1C2733] text-white"
                }`}
              >
                <a href="#">{tier.cta}</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-[#6B7582] mt-8">
          All plans include CLIA-certified lab processing and physician review.
          Cancel subscriptions anytime.
        </p>
      </div>
    </section>
  );
}
