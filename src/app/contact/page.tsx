"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

function ContactForm() {
  const searchParams = useSearchParams();
  const defaultEnquiry = searchParams.get("enquiry") || "";

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: defaultEnquiry || "General",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "General", message: "" });
    }, 1500);
  };

  return (
    <div className="bg-bone-white border border-grey-muted/15 p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center py-12"
        >
          <div className="w-16 h-16 bg-primary-teal/10 rounded-full flex items-center justify-center text-primary-teal mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-display text-2xl font-bold text-ink-navy mb-3">
            Message Sent Successfully
          </h3>
          <p className="font-body text-sm text-grey-muted max-w-sm mb-8 leading-relaxed">
            Thank you for reaching out to Innomedix Pharma. Our business relations team will review your inquiry and get back to you shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-primary-teal font-body text-xs font-semibold uppercase tracking-wider border-b-2 border-primary-teal pb-1 hover:text-coral hover:border-coral transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col items-start">
            <span className="font-label-pill text-xs text-primary-teal uppercase tracking-widest mb-2 font-semibold">
              COMMUNICATION CHANNEL
            </span>
            <h2 className="font-display text-2xl font-bold text-ink-navy">
              Send Your Message
            </h2>
          </div>

          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="font-body text-xs font-semibold text-ink-navy uppercase tracking-wider">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full bg-sage-green/5 border border-grey-muted/20 focus:border-primary-teal/60 focus:ring-0 rounded-lg p-3 text-sm font-body text-ink-charcoal outline-none transition-all"
              placeholder="E.g. Agraj Sharma"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-body text-xs font-semibold text-ink-navy uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full bg-sage-green/5 border border-grey-muted/20 focus:border-primary-teal/60 focus:ring-0 rounded-lg p-3 text-sm font-body text-ink-charcoal outline-none transition-all"
              placeholder="yourname@company.com"
            />
          </div>

          {/* Subject Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject" className="font-body text-xs font-semibold text-ink-navy uppercase tracking-wider">
              Subject Inquiry
            </label>
            <select
              id="subject"
              value={formState.subject}
              onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
              className="w-full bg-sage-green/5 border border-grey-muted/20 focus:border-primary-teal/60 focus:ring-0 rounded-lg p-3 text-sm font-body text-ink-charcoal outline-none transition-all"
            >
              <option value="General">General Inquiry</option>
              <option value="drugs">Drug Manufacturing</option>
              <option value="nutra">Nutraceutical Formulations</option>
              <option value="ayurvedic">Ayurvedic Sciences</option>
              <option value="cosmetics">Clinical Cosmetics</option>
              <option value="partnership">Business Partnership</option>
            </select>
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="font-body text-xs font-semibold text-ink-navy uppercase tracking-wider">
              Message Details
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full bg-sage-green/5 border border-grey-muted/20 focus:border-primary-teal/60 focus:ring-0 rounded-lg p-3 text-sm font-body text-ink-charcoal outline-none transition-all resize-none"
              placeholder="Describe your manufacturing or procurement needs..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-ink-navy hover:bg-primary-teal text-bone-white font-body font-semibold py-4 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.01] transition-all shadow-md active:scale-95 duration-200 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>SENDING...</span>
            ) : (
              <>
                <span>SEND INQUIRY</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      {/* Breadcrumb */}
      <nav className="flex text-xs font-body uppercase tracking-wider text-grey-muted mb-12">
        <Link href="/" className="hover:text-primary-teal transition-colors">
          Home
        </Link>
        <span className="mx-2 text-grey-muted/40">/</span>
        <span className="text-ink-navy font-semibold">Contact Us</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Info & Map (Spans 5 cols) */}
        <div className="lg:col-span-5 space-y-12">
          
          <div className="flex flex-col items-start">
            <span className="font-label-pill text-xs text-grey-muted uppercase tracking-widest mb-3 block">
              GET IN TOUCH
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-ink-navy font-semibold leading-tight">
              Let's Connect
            </h1>
            <p className="font-body text-sm text-grey-muted mt-4 leading-relaxed">
              We look forward to helping you expand your pharmaceutical supply chain or custom formulation portfolio.
            </p>
          </div>

          {/* Contact Details cards */}
          <div className="space-y-6">
            <div className="flex gap-4 p-5 bg-sage-green/5 border border-grey-muted/10 rounded-xl">
              <MapPin className="w-6 h-6 text-primary-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-base font-semibold text-ink-navy mb-1">
                  Registered Office
                </h4>
                <p className="font-body text-sm text-grey-muted leading-relaxed">
                  R/O 263/972, Sec 26 Pratap Nagar, Jaipur, Rajasthan - 302033, Rajasthan, India.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-sage-green/5 border border-grey-muted/10 rounded-xl">
              <Phone className="w-6 h-6 text-primary-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-base font-semibold text-ink-navy mb-1">
                  Phone Support
                </h4>
                <a
                  href="tel:+917827878176"
                  className="font-body text-sm text-grey-muted hover:text-primary-teal transition-colors block"
                >
                  +91 78278 78176
                </a>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-sage-green/5 border border-grey-muted/10 rounded-xl">
              <Mail className="w-6 h-6 text-primary-teal shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-base font-semibold text-ink-navy mb-1">
                  Email Correspondence
                </h4>
                <a
                  href="mailto:agraj@innomedixpharma.com"
                  className="font-body text-sm text-grey-muted hover:text-primary-teal transition-colors block"
                >
                  agraj@innomedixpharma.com
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/917827878176?text=Innomedix%20Pharma%20Private%20Limited,%20Hi%20How%20can%20I%20Help%20You?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 bg-[#25D366]/10 border border-[#25D366]/30 text-ink-navy hover:bg-[#25D366]/20 transition-all rounded-xl cursor-pointer"
            >
              <MessageCircle className="w-6 h-6 fill-[#25D366] text-transparent shrink-0" />
              <div>
                <h4 className="font-display text-base font-semibold text-ink-navy mb-0.5">
                  Direct WhatsApp Chat
                </h4>
                <p className="font-body text-xs text-grey-muted leading-none">
                  Instant response from Agraj Sharma
                </p>
              </div>
            </a>
          </div>

          {/* SVG Map Widget representing Jaipur Laboratory Location */}
          <div className="bg-sage-green/10 border border-grey-muted/15 rounded-2xl p-6 relative overflow-hidden h-[250px] flex items-center justify-center shadow-inner">
            <div className="absolute inset-0 opacity-15">
              {/* Abstract Map Grid Lines */}
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="text-center z-10 space-y-3">
              <MapPin className="w-10 h-10 text-coral mx-auto animate-bounce" />
              <h4 className="font-display text-base font-semibold text-ink-navy">
                Pratap Nagar, Jaipur
              </h4>
              <p className="font-body text-xs text-grey-muted max-w-xs mx-auto leading-relaxed">
                Facility coordinates: 26.8122° N, 75.7873° E. Modern manufacturing center of Rajasthan.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form (Spans 7 cols) */}
        <div className="lg:col-span-7">
          <Suspense fallback={<div className="p-8 text-center text-grey-muted">Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </div>

      </div>
    </div>
  );
}
