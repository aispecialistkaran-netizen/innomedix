"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Eye, Compass, BadgeCheck, Lightbulb, Scale, Users } from "lucide-react";

export default function About() {
  const advantageList = [
    {
      icon: <BadgeCheck className="w-8 h-8 text-coral" />,
      title: "Quality Assurance",
      description: "Rigorous testing protocols and raw material vetting ensuring flawless product purity, potency, and safety.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-coral" />,
      title: "Scientific Innovation",
      description: "Continuous R&amp;D investments to pioneer new formulations and bring therapeutic progress to the market.",
    },
    {
      icon: <Scale className="w-8 h-8 text-coral" />,
      title: "Regulatory Compliance",
      description: "Strict alignment with ISO 9001:2015 and regional regulatory guidelines for complete ethical transparency.",
    },
    {
      icon: <Users className="w-8 h-8 text-coral" />,
      title: "Customer Support",
      description: "Responsive customer support available to assist with inquiries, custom formulation requests, and ordering.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      {/* Breadcrumb */}
      <nav className="flex text-xs font-body uppercase tracking-wider text-grey-muted mb-8">
        <Link href="/" className="hover:text-primary-teal transition-colors">
          Home
        </Link>
        <span className="mx-2 text-grey-muted/40">/</span>
        <span className="text-ink-navy font-semibold">About Us</span>
      </nav>

      {/* Intro Block: Editorial Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 relative">
        <div className="lg:col-span-5 z-10 flex flex-col items-start order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-4 bg-primary-teal/10 px-3 py-1 rounded-full"
          >
            <ShieldCheck className="w-4 h-4 text-primary-teal" />
            <span className="font-label-pill text-xs text-primary-teal uppercase tracking-widest font-semibold">
              OUR HISTORY
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl text-ink-navy mb-6 font-semibold leading-tight"
          >
            Precision in Healthcare.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-sage-green/10 p-8 rounded-xl border border-grey-muted/10 relative shadow-md leading-relaxed"
          >
            <p className="font-body text-base text-grey-muted mb-6">
              Innomedix Pharma is dedicated to pioneering advancements in pharmaceutical manufacturing and clinical research. With a legacy built on stringent quality control and relentless research, we strive to bridge the gap between complex medical science and human-centric care.
            </p>
            <p className="font-body text-sm text-grey-muted">
              Our state-of-the-art facilities and experienced team ensure that every tablet, capsule, and syrup we deliver meets the highest global standards of efficacy and safety, fostering trust among healthcare professionals and patients across the country.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="lg:col-span-7 relative w-full h-[350px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl7uvsWEOeEGG2NiImr9rKC4Y9S5_-qm89WQtL_dnFLLvIiXWOiBkiZea2QwzmzRooSbyoxQmPp4Peb74-bmhsXZdu-MQiAf4uUwPevyYbkRd2O5CPe4X2egJtCcv6YQhrwlyzyTev6JV8YYmuPpfoJziibZNo7R3gMHwlGWKEAmMTvIgPwQzEPQ9G8Ox0l--gTXY3hxR2X0MwX_48-RNB2OZ3f4uIhSKFHQFe5xi47o7PMicRjroK54x17mmG5a3HfwpOwn87TGE"
            alt="State of the art pharmaceutical lab with stainless steel equipment and glass vials"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-sage-green/5 -mx-6 md:-mx-12 px-6 md:px-12 py-24 mb-24 border-y border-grey-muted/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-bone-white p-10 rounded-2xl border border-grey-muted/10 hover:shadow-xl transition-all relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-coral transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <Eye className="w-10 h-10 text-coral mb-6" />
            <h2 className="font-display text-2xl font-semibold text-ink-navy mb-4">
              Our Vision
            </h2>
            <p className="font-body text-grey-muted text-sm md:text-base leading-relaxed">
              To become one of the leading pharmaceutical and healthcare management companies of India, both in terms of the range of products, services, and segments addressed, as well as in the number of patients benefited. We aim to set the global benchmark for safety and quality.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-bone-white p-10 rounded-2xl border border-grey-muted/10 hover:shadow-xl transition-all relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-teal transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <Compass className="w-10 h-10 text-primary-teal mb-6" />
            <h2 className="font-display text-2xl font-semibold text-ink-navy mb-4">
              Our Mission
            </h2>
            <p className="font-body text-grey-muted text-sm md:text-base leading-relaxed">
              Become a market leading manufacturing company dedicated to serving all sections of society by introducing an ever-widening portfolio of medicines and services that meet the healthcare needs and requirements of all citizens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance / Credentials Anchor */}
      <span id="compliance" className="block scroll-mt-24" />

      {/* Why Choose Us */}
      <section className="mb-12">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-teal/10 text-primary-teal font-label-pill text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 font-semibold">
            THE INNOMEDIX ADVANTAGE
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-ink-navy font-semibold">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantageList.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-grey-muted/15 rounded-xl bg-bone-white hover:border-primary-teal/40 hover:shadow-lg transition-all flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-sage-green/10 rounded-full flex items-center justify-center mb-6 shrink-0">
                {advantage.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-ink-navy mb-3">
                {advantage.title}
              </h3>
              <p className="font-body text-xs md:text-sm text-grey-muted leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
