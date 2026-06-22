"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Award,
  TrendingUp,
  ShieldAlert,
  Sparkles,
  Users,
  CheckCircle,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const testimonials = [
  {
    quote: "Knowing that their products meet strict regulatory guidelines gives me confidence in their safety and effectiveness. I trust their commitment to quality.",
    author: "Ram Kumar",
    role: "Healthcare Distributor, Delhi"
  },
  {
    quote: "I'm impressed with their focus on research and development. It's evident that they invest in innovation, bringing new and effective solutions to the market.",
    author: "Pooja Sharma",
    role: "Pharmacist, Jaipur"
  },
  {
    quote: "The services provided to our startup were prompt, professional, and well done. It's evident that they invest in innovation, bringing new and effective solutions to the market.",
    author: "Ashok Yadav",
    role: "Founder, BioFit Health"
  },
  {
    quote: "Innomedix's dedication to purity and precision has fundamentally shifted how we approach patient care in our clinics. Their formulations are consistently reliable.",
    author: "Dr. Elena Rostova",
    role: "Chief of Medicine, Horizon Health"
  }
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center min-h-[85vh]">
        <div className="md:col-span-6 z-10 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-2 mb-4 bg-primary-teal/10 px-3 py-1 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-primary-teal" />
            <span className="font-label-pill text-xs text-primary-teal uppercase tracking-widest font-semibold">
              PIONEERING PHARMA
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="font-display text-4xl md:text-6xl text-ink-navy mb-6 leading-[1.1] font-semibold tracking-tight"
          >
            13 Years of Delivering Quality Healthcare Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-body text-base md:text-lg text-grey-muted mb-8 max-w-md leading-relaxed"
          >
            Precision-engineered pharmaceuticals and nutraceuticals designed to elevate global health standards. Established in 2011.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Link
              href="/products"
              className="bg-ink-navy text-bone-white font-body font-medium px-8 py-3.5 rounded-full hover:bg-primary-teal hover:scale-105 transition-all shadow-lg inline-block"
            >
              Explore Innovations
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          className="md:col-span-6 relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR-359i49bhVl9SmMrcCkMblz7bJNpgw9_ppuCeBYTt73xRGunRLtio01whd8W6GfnNNBbzoWfzgBguYpbXXaQ52YkAiGs7VG0LRL199MfL4b4bLRdOgkFhLobtzC2sLGAq8ozydc2TLzSQ9cGKdghHgzBJVy6HTHABWdJBnZ3xOKEMOmFnUHqog_ONegsmK3QcGnyLedxQbKiz4xQGMPg5KTPjhyMOHCpOfhvAlIqoWlgI6sbr1_N2L9N0K6RnzAKCfqoGHxzZ54"
            alt="Advanced scientific laboratory equipment focusing on a precise glass pipette dispensing liquid"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>
      </section>

      {/* 2. ABOUT US INTRO SECTION */}
      <section className="bg-sage-green/5 py-24 border-y border-grey-muted/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 flex flex-col items-start"
          >
            <span className="font-label-pill text-xs text-grey-muted uppercase tracking-widest mb-3 block">
              OUR FOUNDATION
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-ink-navy mb-6 font-semibold leading-tight">
              Welcome To Innomedix Pharma Private Limited
            </h2>
            <p className="font-body text-sm md:text-base text-grey-muted mb-6 leading-relaxed">
              Innomedix Pharma is a leading pharmaceutical manufacturer with a proud 13-year legacy of serving communities across India. Established in 2011, we are committed to providing high-quality, affordable medications that address diverse healthcare needs.
            </p>
            <p className="font-body text-sm md:text-base text-grey-muted mb-8 leading-relaxed font-semibold text-primary-teal">
              Our Commitment: Empowering individuals and communities to lead healthier lives through accessible healthcare solutions.
            </p>
            <Link
              href="/about"
              className="text-ink-navy font-body text-sm font-semibold border-b-2 border-ink-navy pb-1 hover:text-coral hover:border-coral transition-colors uppercase tracking-wider"
            >
              Read More About Company
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl7uvsWEOeEGG2NiImr9rKC4Y9S5_-qm89WQtL_dnFLLvIiXWOiBkiZea2QwzmzRooSbyoxQmPp4Peb74-bmhsXZdu-MQiAf4uUwPevyYbkRd2O5CPe4X2egJtCcv6YQhrwlyzyTev6JV8YYmuPpfoJziibZNo7R3gMHwlGWKEAmMTvIgPwQzEPQ9G8Ox0l--gTXY3hxR2X0MwX_48-RNB2OZ3f4uIhSKFHQFe5xi47o7PMicRjroK54x17mmG5a3HfwpOwn87TGE"
              alt="High-tech pharmaceutical manufacturing cleanroom"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="font-label-pill text-xs text-grey-muted uppercase tracking-widest mb-3 block">
            HOW WE OPERATE
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-ink-navy font-semibold">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quality */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-bone-white p-8 rounded-xl border border-grey-muted/10 hover:border-primary-teal hover:shadow-[0_20px_40px_rgba(12,92,84,0.05)] transition-all group flex flex-col"
          >
            <div className="w-12 h-12 rounded-lg bg-primary-teal/10 flex items-center justify-center mb-6 text-primary-teal group-hover:bg-primary-teal group-hover:text-bone-white transition-colors duration-300">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-semibold text-ink-navy mb-3">
              Quality
            </h3>
            <p className="font-body text-sm text-grey-muted leading-relaxed">
              We are unwavering in our commitment to producing medicines that meet the highest standards of quality and safety. Rigorous QC guarantees efficacy.
            </p>
          </motion.div>

          {/* Affordability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-bone-white p-8 rounded-xl border border-grey-muted/10 hover:border-primary-teal hover:shadow-[0_20px_40px_rgba(12,92,84,0.05)] transition-all group flex flex-col lg:translate-y-4"
          >
            <div className="w-12 h-12 rounded-lg bg-primary-teal/10 flex items-center justify-center mb-6 text-primary-teal group-hover:bg-primary-teal group-hover:text-bone-white transition-colors duration-300">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-semibold text-ink-navy mb-3">
              Affordability
            </h3>
            <p className="font-body text-sm text-grey-muted leading-relaxed">
              We believe everyone deserves access to essential healthcare. We strive to make medicines accessible by offering competitive, fair pricing models.
            </p>
          </motion.div>

          {/* Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-bone-white p-8 rounded-xl border border-grey-muted/10 hover:border-primary-teal hover:shadow-[0_20px_40px_rgba(12,92,84,0.05)] transition-all group flex flex-col"
          >
            <div className="w-12 h-12 rounded-lg bg-primary-teal/10 flex items-center justify-center mb-6 text-primary-teal group-hover:bg-primary-teal group-hover:text-bone-white transition-colors duration-300">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-semibold text-ink-navy mb-3">
              Innovation
            </h3>
            <p className="font-body text-sm text-grey-muted leading-relaxed">
              Continuous research and development. Our scientists work constantly to formulate advanced and improved medicines addressing unmet medical needs.
            </p>
          </motion.div>

          {/* Community */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-bone-white p-8 rounded-xl border border-grey-muted/10 hover:border-primary-teal hover:shadow-[0_20px_40px_rgba(12,92,84,0.05)] transition-all group flex flex-col lg:translate-y-4"
          >
            <div className="w-12 h-12 rounded-lg bg-primary-teal/10 flex items-center justify-center mb-6 text-primary-teal group-hover:bg-primary-teal group-hover:text-bone-white transition-colors duration-300">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-semibold text-ink-navy mb-3">
              Community
            </h3>
            <p className="font-body text-sm text-grey-muted leading-relaxed">
              Committed to giving back. We actively participate in healthcare initiatives and support programs promoting better health outcomes across society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. PRODUCT BANNER */}
      <section className="relative w-full h-[550px] flex items-center justify-center overflow-hidden my-16 shadow-inner">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7cB4Et3dH1tJF0FNxmvGVUjUoZvBqysK4dolB__J97YTI1VUVH4fQAOyN-X-KTM3PQo56ysH8qea-roY50Q_iWcr2IlhmfJvcyHPU-99mjkmVuIZCV6hcVGFZbKGNaFWkT-v-dZInP1lSBar4gjNsRmvesPBwtU6dOX1gRsbh1Psb7wtpXHutodhvSwgVpIvaItVtqG2t4J9ccmEvLvOQyWGs5Pkr4PKK4fYfbI7Ws1Yj4T8mv8sM1wc--HoGZRO9QN4eVt0TRv8"
          alt="State-of-the-art sterile cleanroom for drug manufacturing"
          fill
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink-navy/40 backdrop-blur-[2px]" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 bg-bone-white/95 p-8 md:p-12 max-w-3xl mx-4 text-center border border-grey-muted/20 rounded-xl shadow-2xl"
        >
          <span className="font-label-pill text-xs text-primary-teal uppercase tracking-widest mb-3 block font-semibold">
            BETTER HEALTHCARE
          </span>
          <h2 className="font-display text-2xl md:text-4xl text-ink-navy mb-6 font-semibold leading-tight">
            Continuous Improvement and Innovation
          </h2>
          <p className="font-body text-sm md:text-base text-grey-muted mb-8 max-w-xl mx-auto">
            Given the rapidly evolving nature of the pharmaceutical industry, companies strive to stay at the forefront of scientific advancements and technological innovations.
          </p>
          <Link
            href="/products"
            className="bg-coral text-bone-white font-body font-semibold px-8 py-3.5 rounded-full hover:bg-ink-navy hover:scale-105 transition-all shadow-md duration-300 inline-block"
          >
            Discover Our Products
          </Link>
        </motion.div>
      </section>

      {/* 5. TESTIMONIALS & TRUST SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Testimonials Slider */}
        <div className="lg:col-span-7 flex flex-col justify-center bg-sage-green/5 p-8 md:p-12 rounded-2xl border border-grey-muted/15 relative overflow-hidden">
          <Quote className="w-12 h-12 text-primary-teal opacity-20 mb-6" />
          
          <div className="min-h-[160px] md:min-h-[120px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-display text-lg md:text-xl text-ink-navy italic mb-8 leading-relaxed">
                  "{testimonials[activeSlide].quote}"
                </p>
                <div>
                  <h4 className="font-display text-base font-semibold text-ink-navy">
                    {testimonials[activeSlide].author}
                  </h4>
                  <span className="font-body text-xs text-grey-muted">
                    {testimonials[activeSlide].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-3 mt-8 justify-end">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-grey-muted/30 flex items-center justify-center text-ink-navy hover:bg-primary-teal hover:text-bone-white transition-all active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-grey-muted/30 flex items-center justify-center text-ink-navy hover:bg-primary-teal hover:text-bone-white transition-all active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certifications Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 bg-bone-white p-10 rounded-2xl flex flex-col justify-center items-center text-center border border-grey-muted/15 shadow-xl relative group overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[4px] bg-primary-teal" />
          <Award className="w-16 h-16 text-primary-teal mb-6 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="font-display text-2xl font-semibold text-ink-navy mb-3">
            ISO 9001:2015 Certified
          </h3>
          <p className="font-body text-sm text-grey-muted max-w-sm mb-8 leading-relaxed">
            Our state-of-the-art manufacturing facilities adhere to strict international quality management standards, ensuring safety, efficacy, and purity in every single batch.
          </p>
          <Link
            href="/about#compliance"
            className="bg-primary-teal text-bone-white font-body text-xs font-semibold uppercase tracking-wider px-8 py-3 rounded-full hover:bg-ink-navy transition-all duration-300"
          >
            View Our Credentials
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
