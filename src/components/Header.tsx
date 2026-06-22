"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import EnquiryModal from "@/components/EnquiryModal";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Menu, X, ChevronDown, Home, Package, HelpCircle, MessageCircle } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      path: "/about",
      dropdown: [
        { name: "About Company", path: "/about" },
        { name: "About Director", path: "/director" },
      ],
    },
    { name: "Our Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 glass-nav border-b border-grey-muted/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Innomedix Logo"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center h-full">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setAboutDropdown(true)}
                    onMouseLeave={() => setAboutDropdown(false)}
                  >
                    <button
                      onClick={() => setAboutDropdown(!aboutDropdown)}
                      className="flex items-center gap-1 font-body text-sm font-medium text-ink-charcoal hover:text-primary-teal transition-colors py-2"
                    >
                      {link.name} <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {aboutDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-16 left-0 w-48 bg-bone-white border border-grey-muted/20 rounded-lg shadow-lg p-2 flex flex-col gap-1"
                        >
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.path}
                              onClick={() => setAboutDropdown(false)}
                              className={`px-4 py-2 text-xs font-body font-medium rounded-md hover:bg-primary-teal hover:text-bone-white transition-all ${
                                pathname === sub.path
                                  ? "bg-primary-teal/10 text-primary-teal"
                                  : "text-ink-charcoal"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = pathname === link.path;

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`font-body text-sm font-medium hover:text-primary-teal transition-all relative py-2 ${
                    isActive ? "text-primary-teal font-semibold" : "text-ink-charcoal"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-coral"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Header Controls */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-3 text-grey-muted">
              <a
                href="tel:+917827878176"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-grey-muted/20 hover:border-primary-teal hover:text-primary-teal transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:agraj@innomedixpharma.com"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-grey-muted/20 hover:border-primary-teal hover:text-primary-teal transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="bg-coral text-bone-white font-label-pill text-xs uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-ink-navy hover:scale-[1.03] transition-all shadow-md duration-300 cursor-pointer"
            >
              Enquiry
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ink-navy p-2 hover:bg-grey-muted/10 rounded-full transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-bone-white z-30 pt-24 px-8 pb-10 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, idx) => {
                if (link.dropdown) {
                  return (
                    <div key={link.name} className="flex flex-col gap-2">
                      <span className="font-display text-2xl text-grey-muted font-bold">
                        {link.name}
                      </span>
                      <div className="pl-4 flex flex-col gap-3 border-l border-grey-muted/20">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            onClick={() => setIsOpen(false)}
                            className={`font-display text-xl ${
                              pathname === sub.path ? "text-primary-teal font-semibold" : "text-ink-charcoal"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                const isActive = pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-3xl font-bold transition-all ${
                      isActive ? "text-primary-teal" : "text-ink-charcoal"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 border-t border-grey-muted/25 pt-6">
              <a
                href="tel:+917827878176"
                className="flex items-center gap-3 text-ink-charcoal text-sm font-body hover:text-primary-teal"
              >
                <Phone className="w-5 h-5 text-primary-teal" /> +91 78278 78176
              </a>
              <a
                href="mailto:agraj@innomedixpharma.com"
                className="flex items-center gap-3 text-ink-charcoal text-sm font-body hover:text-primary-teal"
              >
                <Mail className="w-5 h-5 text-primary-teal" /> agraj@innomedixpharma.com
              </a>
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsEnquiryOpen(true);
                }}
                className="bg-coral text-bone-white font-label-pill text-xs text-center uppercase tracking-wider py-4 rounded-full hover:bg-ink-navy transition-colors mt-2 cursor-pointer"
              >
                Send Enquiry
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-bone-white/95 backdrop-blur-md border-t border-grey-muted/15 flex justify-around items-center h-16 px-4 shadow-lg pb-safe">
        <Link href="/" className={`flex flex-col items-center justify-center gap-1 text-grey-muted hover:text-primary-teal transition-all ${pathname === "/" ? "text-primary-teal font-semibold" : ""}`}>
          <Home className="w-5 h-5" />
          <span className="text-[9px] font-body font-semibold uppercase tracking-wider">Home</span>
        </Link>
        <Link href="/products" className={`flex flex-col items-center justify-center gap-1 text-grey-muted hover:text-primary-teal transition-all ${pathname === "/products" ? "text-primary-teal font-semibold" : ""}`}>
          <Package className="w-5 h-5" />
          <span className="text-[9px] font-body font-semibold uppercase tracking-wider">Products</span>
        </Link>
        <button
          onClick={() => setIsEnquiryOpen(true)}
          className={`flex flex-col items-center justify-center gap-1 text-grey-muted hover:text-primary-teal transition-all cursor-pointer ${isEnquiryOpen ? "text-primary-teal font-semibold" : ""}`}
        >
          <HelpCircle className="w-5 h-5" />
          <span className="text-[9px] font-body font-semibold uppercase tracking-wider">Enquiry</span>
        </button>
        <a
          href="https://wa.me/917827878176?text=Innomedix%20Pharma%20Private%20Limited,%20Hi%20How%20can%20I%20Help%20You?"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-grey-muted hover:text-[#25D366] transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[9px] font-body font-semibold uppercase tracking-wider">WhatsApp</span>
        </a>
        <a
          href="tel:+917827878176"
          className="flex flex-col items-center justify-center gap-1 text-grey-muted hover:text-primary-teal transition-all"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[9px] font-body font-semibold uppercase tracking-wider">Call</span>
        </a>
      </div>

      {/* Global Enquiry Modal */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}
