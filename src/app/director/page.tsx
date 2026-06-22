"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Quote, Cpu, Microscope } from "lucide-react";

export default function Director() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      {/* Breadcrumb */}
      <nav className="flex text-xs font-body uppercase tracking-wider text-grey-muted mb-12">
        <Link href="/" className="hover:text-primary-teal transition-colors">
          Home
        </Link>
        <span className="mx-2 text-grey-muted/40">/</span>
        <Link href="/about" className="hover:text-primary-teal transition-colors">
          About Us
        </Link>
        <span className="mx-2 text-grey-muted/40">/</span>
        <span className="text-ink-navy font-semibold">Our Director</span>
      </nav>

      {/* Executive Profile Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Sticky Portrait (Spans 5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/5] bg-sage-green/10 rounded-2xl overflow-hidden shadow-2xl border border-grey-muted/10"
          >
            <Image
              src="/agraj-new.jpg"
              alt="Agraj Sharma, Managing Director of Innomedix Pharma"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 p-6 bg-sage-green/10 border border-grey-muted/10 rounded-xl"
          >
            <h3 className="font-display text-xl font-semibold text-ink-navy mb-1">
              Agraj Sharma
            </h3>
            <p className="font-body text-xs text-grey-muted mb-4 uppercase tracking-wider font-semibold">
              Managing Director
            </p>
            <div className="space-y-3 font-body text-xs md:text-sm">
              <div className="flex items-center justify-between border-b border-grey-muted/10 pb-2">
                <span className="text-grey-muted">Experience</span>
                <span className="text-ink-navy font-semibold">20+ Years in Pharma</span>
              </div>
              <div className="flex items-center justify-between border-b border-grey-muted/10 pb-2">
                <span className="text-grey-muted">Core Focus</span>
                <span className="text-ink-navy font-semibold">Nutraceutical Innovation</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-grey-muted">Vision Goal</span>
                <span className="text-ink-navy font-semibold">Global Health Equity</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Editorial Text (Spans 7 cols) */}
        <div className="lg:col-span-7 lg:pl-8 space-y-12 mt-8 lg:mt-0">
          
          {/* Quote Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Quote className="w-12 h-12 text-coral opacity-25 mb-4 shrink-0" />
            <p className="font-display text-xl md:text-2xl text-ink-navy leading-relaxed italic border-l-4 border-coral pl-6">
              "Our commitment at Innomedix is not just to manufacture medicine, but to engineer wellness. We bridge the gap between clinical precision and holistic human care."
            </p>
          </motion.div>

          {/* Section: Professional Journey */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl text-ink-navy mb-4 border-b border-grey-muted/10 pb-3 font-semibold">
              The Professional Journey
            </h2>
            <div className="font-body text-sm md:text-base text-grey-muted space-y-4 leading-relaxed">
              <p>
                At the helm of Innomedix Pharma is our esteemed Director, Agraj Sharma, whose visionary leadership has propelled our company to new heights. With a rich background in pharmaceutical sciences and over two decades of industry experience, Agraj Sharma brings a blend of expertise, innovation, and strategic thinking to our operations.
              </p>
              <p>
                Rising through the ranks of rigorous pharmaceutical operations and clinical research divisions, he built Innomedix Pharma in 2011 with a fundamental belief: quality, essential medications should be universally accessible to every citizen.
              </p>
            </div>
          </motion.section>

          {/* Section: Driving Innovation */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl text-ink-navy mb-4 border-b border-grey-muted/10 pb-3 font-semibold">
              Driving Innovation in Manufacturing
            </h2>
            <div className="font-body text-sm md:text-base text-grey-muted space-y-4 leading-relaxed">
              <p>
                Under Agraj Sharma's direction, Innomedix Pharma has achieved significant milestones in drug formulation development and expanded its market reach across India. His focus on sustainable practices and advanced research methodologies has not only set quality benchmarks but also ensured we remain at the forefront of modern healthcare.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-bone-white border border-grey-muted/15 rounded-xl hover:shadow-lg transition-all duration-300">
                  <Cpu className="w-8 h-8 text-primary-teal mb-4" />
                  <h4 className="font-display text-lg font-semibold text-ink-navy mb-2">
                    Tech-Forward Facilities
                  </h4>
                  <p className="font-body text-xs md:text-sm text-grey-muted leading-relaxed">
                    Championing automated, high-precision sterile environments to eliminate batch contaminants and maximize product reliability.
                  </p>
                </div>
                
                <div className="p-6 bg-bone-white border border-grey-muted/15 rounded-xl hover:shadow-lg transition-all duration-300">
                  <Microscope className="w-8 h-8 text-primary-teal mb-4" />
                  <h4 className="font-display text-lg font-semibold text-ink-navy mb-2">
                    R&amp;D Excellence
                  </h4>
                  <p className="font-body text-xs md:text-sm text-grey-muted leading-relaxed">
                    Directing steady resources into continuous chemical analysis and bio-equivalence research to produce optimal, active drugs.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section: Vision for the Future */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pb-6"
          >
            <h2 className="font-display text-2xl text-ink-navy mb-4 border-b border-grey-muted/10 pb-3 font-semibold">
              Vision for the Future
            </h2>
            <div className="font-body text-sm md:text-base text-grey-muted space-y-4 leading-relaxed">
              <p>
                Looking forward, Agraj Sharma is dedicated to furthering innovation in healthcare, with plans to expand our product lines across all categories: Drugs, Nutraceuticals, Ayurvedic medicine, and Clinical Cosmetics.
              </p>
              <p>
                His strategy involves building global partnerships to democratize access to essential medicines and standardized organic wellness products, ensuring "Precision in Healthcare" is felt by communities worldwide.
              </p>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
