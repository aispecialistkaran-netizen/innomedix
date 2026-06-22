"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "General",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink-navy/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-bone-white border border-grey-muted/15 w-full max-w-lg rounded-2xl shadow-2xl p-6 md:p-10 relative z-10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-grey-muted hover:text-ink-navy p-2 hover:bg-grey-muted/10 rounded-full transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-8"
              >
                <div className="w-16 h-16 bg-primary-teal/10 rounded-full flex items-center justify-center text-primary-teal mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink-navy mb-3">
                  Enquiry Submitted
                </h3>
                <p className="font-body text-sm text-grey-muted max-w-sm mb-8 leading-relaxed">
                  Thank you for submitting your enquiry. Our client relations team will review your requirements and reach out to you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="bg-primary-teal text-bone-white font-body text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-ink-navy transition-colors"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col items-start pr-8">
                  <span className="font-label-pill text-xs text-primary-teal uppercase tracking-widest mb-1.5 font-semibold">
                    SUBMIT ENQUIRY
                  </span>
                  <h2 className="font-display text-2xl font-bold text-ink-navy">
                    How Can We Assist You?
                  </h2>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-name" className="font-body text-xs font-semibold text-ink-navy uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-sage-green/5 border border-grey-muted/20 focus:border-primary-teal/60 focus:ring-0 rounded-lg p-3 text-sm font-body text-ink-charcoal outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-email" className="font-body text-xs font-semibold text-ink-navy uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-sage-green/5 border border-grey-muted/20 focus:border-primary-teal/60 focus:ring-0 rounded-lg p-3 text-sm font-body text-ink-charcoal outline-none transition-all"
                    placeholder="yourname@company.com"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-subject" className="font-body text-xs font-semibold text-ink-navy uppercase tracking-wider">
                    Inquiry Division
                  </label>
                  <select
                    id="modal-subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-sage-green/5 border border-grey-muted/20 focus:border-primary-teal/60 focus:ring-0 rounded-lg p-3 text-sm font-body text-ink-charcoal outline-none transition-all"
                  >
                    <option value="General">General Support</option>
                    <option value="drugs">Drug Manufacturing</option>
                    <option value="nutra">Nutraceutical Formulations</option>
                    <option value="ayurvedic">Ayurvedic Sciences</option>
                    <option value="cosmetics">Clinical Cosmetics</option>
                    <option value="partnership">Business Partnership</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-message" className="font-body text-xs font-semibold text-ink-navy uppercase tracking-wider">
                    Inquiry Details
                  </label>
                  <textarea
                    id="modal-message"
                    required
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-sage-green/5 border border-grey-muted/20 focus:border-primary-teal/60 focus:ring-0 rounded-lg p-3 text-sm font-body text-ink-charcoal outline-none transition-all resize-none"
                    placeholder="Type your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-ink-navy hover:bg-primary-teal text-bone-white font-body font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.01] transition-all shadow-md active:scale-95 duration-200 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>SUBMITTING...</span>
                  ) : (
                    <>
                      <span>SUBMIT</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
