"use client";

import { Dot } from "lucide-react";
import React from "react";

export default function PricingPage() {
  return (
    <main className="w-full overflow-x-hidden bg-[#f2f4f7] text-[#0b2540] Poppins">
      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-[#0e2a47] text-white pt-24 pb-40 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold PoppinBold">
            Pricing plans
          </h1>
          <p className="mt-4 text-gray-300 text-lg Poppins">
            Simple, transparent pricing that grows with you.
          </p>
        </div>
      </section>

      {/* ================= FLOATING PRICING CARD ================= */}
      <section className="relative -mt-32 z-10 px-6">
        <div className="max-w-4xl mx-auto mb-10 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 PoppinBold">
            WHAT MAKES THIS COURSE DIFFERENT?
          </h2>

          <ul className="space-y-4 text-gray-700 max-w-md w-auto mx-auto">
            <CheckItem text="Free lifetime support on WhatsApp/Telegram" />
            <CheckItem text="Give you assistance for Job" />
            <CheckItem text="Updates on Job vacancy" />
            <CheckItem text="Future Amendments guidance" />
            <CheckItem text="Certificate of course for easy job apply" />
            <CheckItem text="On hand training with XERO software" />
          </ul>

          {/* Pricing Options */}
          <div className="mt-12 grid md:grid-cols-2 gap-10 text-center">
            <a
              href="https://rzp.io/rzp/C5efaWH"
              className="flex flex-col items-center"
            >
              <div className="bg-[#0e2a47] text-white px-6 py-3 rounded-md text-2xl font-bold">
                <p>9999/-</p>
              </div>
              <p className="mt-4 text-lg font-semibold">Live Session</p>
            </a>
            <a
              href="https://rzp.io/rzp/bl0GvGU"
              className="flex flex-col items-center"
            >
              <div className="bg-[#0e2a47] text-white px-6 py-3 rounded-md text-2xl font-bold">
                4999/-
              </div>
              <p className="mt-4 text-lg font-semibold">Recorded & Live Q/A</p>
            </a>
          </div>
          <div className="mt-12 border-t border-black/10 pt-10">
            <h3 className="text-3xl font-bold text-center text-[#1a2e4a] mb-12 PoppinBold">
              Important: Payments Are Non Refundable
            </h3>

            <div className="text-red-700 text-base md:text-lg Poppins max-w-2xl mx-auto">
              <p className="leading-relaxed">
                Please review the policy before completing your purchase. All
                payments are final.
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-sm">
                <li>We do not offer refunds under any circumstances.</li>
                <li>
                  Access is granted immediately upon payment and cannot be
                  revoked.
                </li>
                <li>
                  Double-check your plan selection before completing checkout.
                </li>
                <li>
                  Reach out to support if you need help choosing the right
                  option.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ================= WHY THIS COURSE ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14">
            <h3 className="text-3xl font-bold text-center text-[#1a2e4a] mb-12 PoppinBold">
              Why This Course?
            </h3>

            <ul className="space-y-6 text-gray-700 text-base md:text-lg Poppins max-w-2xl mx-auto">
              {[
                "Business Structures",
                "GST Treatment",
                "BAS Preparation",
                "Payroll & STP Compliance",
                "Real Xero System Handling",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 group transition-all duration-300"
                >
                  <div className="mt-2 flex-shrink-0">
                    <Dot />
                  </div>

                  <p className="leading-relaxed group-hover:text-black transition-colors duration-300">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-[#0e2a47] font-bold mt-1">✔</span>
      <span>{text}</span>
    </li>
  );
}
