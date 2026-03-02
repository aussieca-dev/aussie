"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Dot } from "lucide-react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-5 text-left font-medium"
      >
        <span>{question}</span>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden px-6`}
      >
        <p className="pb-5 text-gray-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [enrollEmail, setEnrollEmail] = useState<string>("");
  const [enrollLoading, setEnrollLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleEnroll = async () => {
    if (!enrollEmail) {
      alert("Please enter your email");
      return;
    }

    setEnrollLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: "Enroll",
          lastName: "User",
          email: enrollEmail,
          phone: "Not provided",
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Enrollment successful!");
        setEnrollEmail("");
      } else {
        alert("Failed to submit.");
      }
    } catch (error) {
      alert("Something went wrong.");
    }

    setEnrollLoading(false);
  };

  return (
    <main className="w-full overflow-x-hidden bg-[#f4f6f8] text-[#0b2540] Poppins">
      {/* ================= HERO ================= */}
      <section className="w-full min-h-screen flex justify-center items-center bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl PoppinBold leading-tight">
              Master Australian <br />
              Bookkeeping & Xero
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Become Client-Ready for Australian Firms 🇦🇺
            </p>

            <p className="mt-4 text-gray-300">
              Learn GST, BAS, Payroll & Real-World Xero Workflows
              <br />
              <span className="font-semibold">
                Step-by-Step. Practical. CA-Led.
              </span>
            </p>

            <Button
              onClick={() => router.push("/contact")}
              className="mt-8 bg-white text-[#0e2a47] px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
            >
              Get in touch
            </Button>
          </div>

          {/* Right Map */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[250px] h-[250px] md:w-[450px] md:h-[450px]">
              <Image
                src="/australia-map.png"
                alt="Australia Map"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="relative -mt-16 z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl">
          <div className="px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
            {/* Heading Section */}
            <div className="flex justify-center items-center flex-col text-center max-w-5xl mx-auto">
              <p className="text-4xl uppercase tracking-widest text-background PoppinBold">
                About the Trainer
              </p>

              <h2 className="mt-3 text-lg sm:text-lg PoppinMedium text-gray-900">
                Learn Directly from CA Shalini Jain
              </h2>

              <p className="mt-4 text-gray-600 Poppins sm:text-sm max-w-lg w-full leading-relaxed">
                This course is designed and taught by a qualified Chartered
                Accountant with real industry experience in Australian
                accounting systems.
              </p>
            </div>

            {/* Features Section (Flex Only) */}
            <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-6 justify-center">
              <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <Feature
                  title="Learn Without Feeling Lost"
                  desc="Complex topics are simplified into practical, easy-to-follow lessons."
                />
              </div>

              <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <Feature
                  title="Always Updated & Relevant"
                  desc="Australian laws change — and so does this course."
                />
              </div>

              <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <Feature
                  title="Practical, Job-Ready Training"
                  desc="Focused entirely on real-world skills you can apply immediately."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADVANTAGES ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <h2 className="text-2xl font-semibold text-center mb-12 PoppinBold">
          The Advantage of Choosing This Course?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-gray-700">
          {/* Column 1 */}
          <ul className="space-y-5">
            {[
              "Learn practical Australian accounting, not just theory",
              "Designed specifically for Indian students and professionals",
              "Based on 10+ years of direct experience with Australian clients",
              "Step-by-step training on real compliance work (GST, BAS, Payroll, Div 7A)",
              "Hands-on exposure to Xero software",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 group transition-all duration-300"
              >
                <div className="mt-1 flex-shrink-0">
                  <Dot />
                </div>
                <p className="leading-relaxed group-hover:text-black transition-colors duration-300">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          {/* Column 2 */}
          <ul className="space-y-5">
            {[
              "Job-oriented curriculum focused on real industry requirements",
              "Learn how Australian outsourcing firms actually work",
              "Lifetime support even after course completion",
              "Regular updates on law amendments",
              "Clear roadmap to build a global accounting career",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 group transition-all duration-300"
              >
                <div className="mt-1 flex-shrink-0">
                  <Dot />
                </div>
                <p className="leading-relaxed group-hover:text-black transition-colors duration-300">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= 3 STEP CAREER SECTION ================= */}
      <section className="w-full bg-[#0e2a47] text-white py-20">
        <div className="flex justify-center items-center flex-col max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-14 PoppinBold max-w-3xl">
            Build your career with Australian accounting skills designed to earn
            more
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="01"
              title="Enroll in the Program"
              desc="Register for the Live or Recorded course and secure your seat instantly."
            />
            <StepCard
              number="02"
              title="Learn With Practical Training"
              desc="Master GST, BAS, and XERO through hands-on real-world accounting scenarios."
            />
            <StepCard
              number="03"
              title="Start Working With Aussie Clients"
              desc="Track your earnings in real-time and enjoy benefits of limitless saving."
            />
          </div>
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-left mb-10">
          <p className="text-sm text-gray-500">Real results matter</p>
          <h2 className="text-2xl font-bold PoppinBold">
            Why professionals trust our Aussie CA training
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-10 grid md:grid-cols-3 text-center gap-6">
          <Stat title="240+" desc="Students Enrolled" />
          <Stat title="100%" desc="Practical Satisfaction Rate" />
          <Stat title="Regular" desc="Curriculum Updates with Law Changes" />
        </div>
      </section>

      {/* ================= WHAT YOU'LL LEARN ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-[#0e2a47] to-[#123a63] text-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              What You’ll Learn
            </h2>
            <p className="text-white/70 mt-3 max-w-2xl mx-auto">
              A complete step-by-step practical system to understand and manage
              Australian bookkeeping with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Introduction to Australian Business Structures",
              "GST & BAS Fundamentals",
              "Complex Xero Overview + Chart of Accounts",
              "Payroll & STP",
              "BAS Preparation",
              "Practical workflow explained step-by-step",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex justify-start items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed w-full ml-2">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= FAQ ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <p className="text-sm text-gray-500">FAQ</p>
            <h2 className="text-3xl font-bold mt-2">
              Frequently asked questions
            </h2>
            <p className="mt-6 text-gray-600 max-w-md">
              Everything you need to know before starting your journey toward
              Australian accounting expertise.
            </p>
          </div>

          {/* Right Accordion */}
          <div className="space-y-4">
            <FAQItem
              question="Who is this course for?"
              answer="This course is designed for Indian accounting students, professionals, and freelancers who want to work with Australian clients or outsourcing firms."
            />
            <FAQItem
              question="Is this course practical or theoretical?"
              answer="It is 100% practical. You will learn GST, BAS, Payroll, and Xero through real-world workflows — not just textbook theory."
            />
            <FAQItem
              question="What is the difference between Live and Recorded options?"
              answer="Live sessions include real-time interaction and Q&A support. Recorded courses allow you to learn at your own pace with lifetime access."
            />
            <FAQItem
              question="Will I get a certificate after completion?"
              answer="Yes. You will receive a course completion certificate once you successfully finish the training modules."
            />
            <FAQItem
              question="Will I get job assistance?"
              answer="Yes. We guide you on building your resume, portfolio, and preparing for interviews with Australian outsourcing firms."
            />
          </div>
        </div>
      </section>
      {/* ================= CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-[#0e2a47] text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold">
            Ready to master Australian GST, BAS & XERO?
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => router.push("/pricing")}
              className="bg-white text-[#0e2a47] px-6 py-3 rounded-md font-semibold"
            >
              Enroll now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-500 mt-2">{desc}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-[#132f52] p-10 rounded-2xl">
      <h3 className="text-5xl font-bold text-gray-300">{number}</h3>
      <h4 className="mt-6 font-semibold">{title}</h4>
      <p className="text-gray-300 mt-4 text-sm">{desc}</p>
    </div>
  );
}

function Stat({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="text-gray-500 mt-2">{desc}</p>
    </div>
  );
}
