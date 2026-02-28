import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col Poppins bg-gray-50 text-gray-800">

      <section className="flex justify-center items-center min-h-screen w-screen bg-gradient-to-br from-[#1a2e4a] to-[#243b63] text-white mt-10">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <p className="uppercase tracking-wider text-foreground/25 text-xs font-semibold mb-3 PoppinMedium">
              Founder Story
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 PoppinBold">
              Hi, I’m  CA<br/> Shalini Jain
            </h1>

            <p className="text-gray-300 leading-relaxed mb-5 Poppins">
              With 10+ years of real-world experience working directly with
              Australian clients across industries, I’ve handled everything
              from GST & BAS to payroll compliance and advisory.
            </p>

            <p className="text-gray-200 leading-relaxed Poppins">
              This isn’t theoretical knowledge. This is hands-on Australian
              accounting — practiced daily with real businesses.
            </p>

            <button className="mt-8 bg-foreground text-background hover:bg-foreground/50 transition px-6 py-3 rounded-lg font-semibold shadow-lg">
              Start Learning Today
            </button>
          </div>

          {/* Optional image placeholder */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur rounded-2xl h-100 flex items-end justify-center border border-white/20">
              <Image
                src="/founder.png"
                alt="Australia Map"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── DISCOVERY ───────────────── */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-500 mb-4 Poppins">
            During this journey, I realized something important
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e4a] leading-snug mb-6 PoppinBold">
            Students learn accounting theory.
            <br />
            But very few understand how Australian accounting actually works in real life.
          </h2>

          <div className="inline-block bg-background/5 text-background font-semibold px-6 py-3 rounded-full text-sm">
            That’s why this course exists.
          </div>
        </div>
      </section>

      {/* ───────────────── WHY LEARN ───────────────── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1a2e4a] mb-14 PoppinBold">
            Why Learn From Me?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Practical Australian bookkeeping & taxation",
              "Real client-based scenarios",
              "Compliance procedures step-by-step",
              "Hands-on Xero training",
              "Job-ready preparation for outsourcing firms",
              "Confidence in real-world accounting"
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100 Poppins"
              >
                <div className="w-10 h-10 bg-background/5 text-background rounded-lg flex items-center justify-center font-bold mb-4">
                  ✓
                </div>
                <p className="text-sm font-medium text-gray-700 Poppins">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── WHO IT'S FOR ───────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

          <div>
            <h3 className="text-2xl font-bold text-[#1a2e4a] mb-6 PoppinBold">
              Designed For
            </h3>

            <ul className="space-y-4 text-gray-700 Poppins">
              <li>• Commerce Students</li>
              <li>• CA / CMA / B.Com Graduates</li>
              <li>• Freshers seeking global opportunities</li>
              <li>• Accountants wanting international exposure</li>
            </ul>
          </div>

          <div className="bg-[#1a2e4a] text-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 PoppinBold">My Goal</h3>
            <p className="text-gray-300 mb-4 leading-relaxed Poppins">
              To make you confident, practical, and globally employable
              in Australian accounting.
            </p>
            <p className="font-semibold PoppinMedium">
              If you’re serious about building a career beyond borders,
              you’re in the right place.
            </p>
          </div>

        </div>
      </section>



      {/* ───────────────── FOOTER ───────────────── */}


    </div>
  );
}