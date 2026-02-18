"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const productLinks = ["How It Works", "Biomarkers", "Pricing", "Dashboard"];
const companyLinks = ["About", "Blog", "Careers", "Press"];
const legalLinks = ["Privacy Policy", "Terms of Service", "HIPAA Notice"];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#1C2733] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-2xl font-bold font-serif text-white tracking-tight">
              Agora Health
            </span>
            <p className="mt-3 text-sm text-[#8E9BAA] max-w-xs leading-relaxed">
              Comprehensive blood analysis delivered directly to you. Know your
              body. Own your health.
            </p>
            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-[#E3B77F] font-semibold mb-3">
                Health insights, weekly
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[#313E4C] text-white placeholder:text-[#6B7582] text-sm px-4 py-2 rounded-lg border border-[#3D4E5F] focus:outline-none focus:border-[#E3B77F] transition-colors"
                />
                <Button
                  type="submit"
                  className="bg-[#E3B77F] hover:bg-[#D4A56F] text-[#1C2733] font-semibold px-4 h-10 rounded-lg border-0"
                >
                  Subscribe
                </Button>
              </form>
            </div>
            {/* Social */}
            <div className="mt-6 flex gap-4">
              {["Twitter", "Instagram", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[#6B7582] hover:text-[#E3B77F] text-xs transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#E3B77F] font-semibold mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-[#8E9BAA] hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#E3B77F] font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-[#8E9BAA] hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#E3B77F] font-semibold mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-[#8E9BAA] hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2D3D4E] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6B7582]">
            © {new Date().getFullYear()} Agora Health, Inc. All rights reserved.
          </p>
          <p className="text-xs text-[#6B7582]">
            Results are not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
