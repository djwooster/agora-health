"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How accurate are the results?",
    a: "All samples are processed in CLIA-certified laboratories — the same standard used by hospitals and physician offices. Our finger-prick collection method is clinically validated with a coefficient of variation under 5% for key biomarkers, comparable to traditional venous draws.",
  },
  {
    q: "Who reviews my results?",
    a: "Every panel is reviewed by a licensed physician before being released to you. Physicians flag out-of-range values, add context-specific commentary, and on Prime and Apex plans provide personalized optimization recommendations.",
  },
  {
    q: "Does insurance cover Agora Health tests?",
    a: "Our plans are currently priced for direct-pay. We provide an itemized receipt you can submit to your FSA, HSA, or for potential out-of-network reimbursement. We do not bill insurance directly at this time.",
  },
  {
    q: "How long until I receive my results?",
    a: "Most panels are completed within 5–7 business days from when the lab receives your sample. Lab-draw orders typically process slightly faster (3–5 days) due to fresh sample quality. You'll receive an email notification the moment your results are ready.",
  },
  {
    q: "Is finger-prick collection safe and hygienic?",
    a: "Yes. The kit uses single-use, sterile lancets with a safety-retract mechanism. The collection tube is vacuum-sealed and uses a FDA-cleared collection method. All supplies meet medical device regulations and are individually packaged.",
  },
  {
    q: "What age is required to use Agora Health?",
    a: "You must be 18 or older to order independently. Minors aged 13–17 may participate with written parental consent and a guardian billing account.",
  },
  {
    q: "Can I use the results to diagnose a condition?",
    a: "Agora Health results are for informational and wellness purposes. They are not intended to diagnose, treat, or cure any medical condition. If a result is significantly abnormal, our physician reviewers will recommend follow-up with your primary care provider.",
  },
  {
    q: "How does the subscription work?",
    a: "Subscriptions bill monthly and automatically dispatch a new kit or lab order on your chosen cadence. You can pause, change plans, or cancel anytime from your account settings — no penalty, no minimum commitment.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E3B77F] mb-3">
            Questions
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#313E4C]">
            Frequently Asked
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white border border-[#E3D5C5] rounded-xl px-6 data-[state=open]:border-[#E3B77F] transition-colors"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-[#313E4C] hover:text-[#E3B77F] py-5 hover:no-underline [&>svg]:text-[#E3B77F]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7582] text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
