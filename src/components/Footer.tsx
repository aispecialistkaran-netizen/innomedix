import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const companyLinks = [
    { name: "About Company", path: "/about" },
    { name: "About Director", path: "/director" },
    { name: "Our Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const divisionsLinks = [
    { name: "Drug Manufacturing", path: "/products#drugs" },
    { name: "Nutraceuticals", path: "/products#nutra" },
    { name: "Ayurvedic Sciences", path: "/products#ayurvedic" },
    { name: "Clinical Cosmetics", path: "/products#cosmetics" },
  ];

  const extraLinks = [
    { name: "Careers", path: "#" },
    { name: "Press & Media", path: "#" },
    { name: "Our Blog", path: "#" },
    { name: "Privacy Policy", path: "#" },
    { name: "Terms of Service", path: "#" },
  ];

  return (
    <footer className="bg-sage-green/10 border-t border-grey-muted/10 w-full pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Branding Column */}
        <div className="flex flex-col gap-4">
          <Image
            src="/logo.png"
            alt="Innomedix Logo"
            width={160}
            height={48}
            className="h-10 w-auto object-contain self-start"
          />
          <p className="font-body text-sm text-grey-muted max-w-xs mt-2 leading-relaxed">
            Leading pharmaceutical and nutraceutical manufacturer with a proud 13-year legacy of delivering high-quality, affordable medications across India.
          </p>
          <div className="flex flex-col gap-2 mt-4 text-xs font-body text-grey-muted">
            <a
              href="tel:+917827878176"
              className="flex items-center gap-2 hover:text-primary-teal transition-colors"
            >
              <Phone className="w-4 h-4 text-primary-teal" /> +91 78278 78176
            </a>
            <a
              href="mailto:agraj@innomedixpharma.com"
              className="flex items-center gap-2 hover:text-primary-teal transition-colors"
            >
              <Mail className="w-4 h-4 text-primary-teal" /> agraj@innomedixpharma.com
            </a>
          </div>
        </div>

        {/* Navigation Links Column */}
        <div>
          <h4 className="font-label-pill text-xs text-ink-navy uppercase tracking-widest mb-6 font-semibold">
            Company
          </h4>
          <ul className="flex flex-col gap-3 font-body text-sm text-grey-muted">
            {companyLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="hover:text-primary-teal hover:translate-x-1 transition-all duration-200 inline-block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Divisions Column */}
        <div>
          <h4 className="font-label-pill text-xs text-ink-navy uppercase tracking-widest mb-6 font-semibold">
            Divisions
          </h4>
          <ul className="flex flex-col gap-3 font-body text-sm text-grey-muted">
            {divisionsLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="hover:text-primary-teal hover:translate-x-1 transition-all duration-200 inline-block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Location & Extra Column */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="font-label-pill text-xs text-ink-navy uppercase tracking-widest mb-4 font-semibold">
              Corporate Office
            </h4>
            <div className="flex gap-2 text-sm text-grey-muted font-body leading-relaxed">
              <MapPin className="w-5 h-5 text-primary-teal shrink-0 mt-0.5" />
              <span>
                R/O 263/972, Sec 26 Pratap Nagar, Jaipur, Rajasthan - 302033, India.
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-label-pill text-xs text-ink-navy uppercase tracking-widest mb-4 font-semibold">
              Additional Info
            </h4>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-grey-muted font-body">
              {extraLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="hover:text-primary-teal">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-grey-muted/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-body text-grey-muted">
        <p>© 2026 Innomedix Pharma Private Limited. All Rights Reserved. ISO 9001:2015 Certified.</p>
        <p className="flex items-center gap-1">
          Precision in Healthcare.
        </p>
      </div>
    </footer>
  );
}
