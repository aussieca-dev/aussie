"use client";

import { useState } from "react";
import clsx from "clsx";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft } from "lucide-react";

const services = [
  "Logo Design",
  "Social Media Posts",
  "Website Design",
  "Branding",
];

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (step === 1) {
      if (!name || !email || !phone) {
        toast.error("Please fill in all fields");
        return;
      }
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!service || !message) {
      toast.error("Please select a service and provide a message");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, service, message }),
      });

      const contentType = res.headers.get("content-type");

      if (!res.ok) {
        const errorData =
          contentType && contentType.includes("application/json")
            ? await res.json()
            : { message: "Unexpected server error" };

        toast.error(`Failed: ${errorData.message}`);
        return;
      }

      const data = await res.json();
      toast.success(data.message || "Message sent successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
      setStep(1);
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-col md:flex-row relative items-start justify-between Geist max-w-6xl w-[95%] mt-40 border-b pb-5">
        <div className="flex justify-start items-start flex-col md:w-[40%] w-[95%]">
          <h3 className="w-full text-4xl md:text-5xl GeistBold mb-6 text-foreground uppercase">
            Get in Touch
          </h3>
          <p className="w-full text-left text-sm md:text-xl Geist mb-6 text-foreground">
            Have an idea, question, or project in mind? We&apos;d love to hear
            from you! Reach out to Arctic Base and let&apos;s build something awesome
            together—no delays, no fuss, just clear communication and great
            collaboration.
          </p>
        </div>

        <div className="flex flex-col justify-start items-start w-full md:w-[50%]">
          {/* Step Indicators */}
          <div className="flex items-center justify-center w-full mb-8 gap-4">
            <div className="flex flex-col items-center gap-2">
              <div
                className={clsx(
                  "w-10 h-10 rounded-full flex items-center justify-center GeistMedium transition-all duration-300",
                  step >= 1
                    ? "bg-primary text-background"
                    : "bg-foreground/20 text-foreground/50"
                )}
              >
                1
              </div>
              <span
                className={clsx(
                  "text-sm GeistMedium transition-all duration-300 text-center",
                  step >= 1 ? "text-primary" : "text-foreground/50"
                )}
              >
                Contact Info
              </span>
            </div>
            <div className="h-px w-8 bg-foreground/20 self-center -mt-5"></div>
            <div className="flex flex-col items-center gap-2">
              <div
                className={clsx(
                  "w-10 h-10 rounded-full flex items-center justify-center GeistMedium transition-all duration-300",
                  step >= 2
                    ? "bg-primary text-background"
                    : "bg-foreground/20 text-foreground/50"
                )}
              >
                2
              </div>
              <span
                className={clsx(
                  "text-sm GeistMedium transition-all duration-300 text-center",
                  step >= 2 ? "text-primary" : "text-foreground/50"
                )}
              >
                Service & Message
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-start items-start w-full space-y-6"
          >
            {/* Step 1: Contact Information */}
            {step === 1 && (
              <div className="w-full space-y-6">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="w-full text-left text-sm md:text-xl Geist py-3 border-b text-foreground bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="w-full text-left text-sm md:text-xl Geist py-3 border-b text-foreground bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  required
                  className="w-full text-left text-sm md:text-xl Geist py-3 border-b text-foreground bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full bg-primary text-background py-3 text-xl rounded-full GeistMedium uppercase transition-all duration-300 hover:bg-opacity-80 flex items-center justify-center gap-2"
                >
                  Next
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Step 2: Service & Message */}
            {step === 2 && (
              <div className="w-full space-y-6">
                <div className="w-full">
                  <label className="text-sm md:text-xl GeistMedium text-foreground mb-4 block uppercase">
                    Service Required
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {services.map((serviceOption) => (
                      <button
                        key={serviceOption}
                        type="button"
                        onClick={() => setService(serviceOption)}
                        className={clsx(
                          "w-full text-left text-sm md:text-xl Geist py-4 px-4 border border-foreground transition-all duration-300",
                          service === serviceOption
                            ? "bg-primary text-background border-primary"
                            : "bg-transparent text-foreground hover:bg-primary/10"
                        )}
                      >
                        {serviceOption}
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full text-left text-sm md:text-xl Geist py-3 border-b text-foreground bg-transparent focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                ></textarea>

                <div className="flex gap-4 w-full">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 bg-transparent border border-foreground text-foreground py-3 text-xl rounded-full GeistMedium uppercase transition-all duration-300 hover:bg-foreground/10 flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className={clsx(
                      "flex-1 bg-primary text-background py-3 text-xl rounded-full GeistMedium uppercase transition-all duration-300 flex items-center justify-center gap-2",
                      loading
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:bg-opacity-80"
                    )}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 py-10">
        <p className="text-lg text-muted-foreground mb-6 max-w-xl">
          Quickly connect and directly discuss your project requirements with
          our team. No delays, no middlemen – just clear, focused communication
          to bring your ideas to life.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4 text-xl pt-5">
          <a
            href="mailto:hello@arcticbase.tech"
            className="Geist hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            hello@arcticbase.tech
          </a>
          <a
            href="tel:+919104320305"
            className="Geist hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            +91 91043 20305
          </a>
          <a
            href="tel:+819016743347"
            className="Geist hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            +81 9016743347
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
