"use client";

import { useState } from "react";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="w-full bg-[#f3f5f7] text-[#0b2540] overflow-x-hidden Poppins">

      {/* ================= HERO ================= */}
      <section className="w-full bg-[#0e2a47] text-white pt-28 pb-44 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide PoppinBold">
            Contact us
          </h1>
          <p className="mt-4 text-gray-300 text-lg Poppins">
            We’d love to hear from you. Please fill out this form.
          </p>
        </div>
      </section>

      {/* ================= FLOATING FORM ================= */}
      <section className="relative -mt-32 z-10 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-10">

          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 Poppins">
                  First name
                </label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="First name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0e2a47]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 Poppins">
                  Last name
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="Last name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0e2a47]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2 Poppins">
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                placeholder="you@company.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0e2a47]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2 Poppins">
                Phone number
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0e2a47]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0e2a47] text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition PoppinBold"
            >
              {loading ? "Sending..." : "Send message"}
            </button>

          </form>
        </div>
      </section>

      {/* ================= CONTACT INFO STRIP ================= */}
      <section className="w-full bg-[#081c34] text-white mt-20 py-16">
        <div className="flex justify-between items-center max-w-3xl mx-auto px-6 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-4 PoppinBold">Contact us</h3>
            <p className="text-gray-300 Poppins">+91 63526 44993</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 PoppinBold">Email us now</h3>
            <p className="text-gray-300 Poppins">theaussieca@gmail.com</p>
          </div>
        </div>
      </section>

    </main>
  );
}