"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Pill, Activity, Leaf, ShieldAlert } from "lucide-react";

const categories = [
  {
    id: "drugs",
    label: "Core Therapeutics",
    title: "Drug Formulations",
    description:
      "Rigorous clinical standards applied across a broad spectrum of essential medicines, ensuring efficacy and patient safety. Formulated in state of the art sterile labs.",
    icon: <Pill className="w-6 h-6 text-primary-teal" />,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0Bqe4WHZCt556vt0Chpf765-hZFQZIThPPJYG-0_QJtmDmgJkXrp4jUcau6y5RDofLcjxIYcqAxgHI_PUCbGk7MXTwPyZ9lVTC9_rOF5JPdZuTmFS2OoMbR2uji_mobJhuOOJijPjUPyTPtaXKz0OZwNRiH8IkQybqSiz67x3Pl_FOJsIdbGp_fngMa_uDSpMmTJNq6LsoJMFgfFjLQvGokMgAqHAs6LdYDIa8p602kYzhW-OXAFWaHudlmEtvzdARKJ7hyn1qh8",
    tags: [
      "Tablets",
      "Capsules",
      "Syrups",
      "Injections",
      "Dry Syrups",
      "Softgels",
      "Sachets",
      "Drops",
    ],
  },
  {
    id: "nutra",
    label: "Advanced Wellness",
    title: "Nutraceuticals",
    description:
      "Science-backed nutritional supplements crafted to support holistic health profiles through highly bioavailable organic and vitamin-rich ingredients.",
    icon: <Activity className="w-6 h-6 text-primary-teal" />,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCml8mXUGWb9XSwjuS1Qb9I5WXUTpem0g5AGPBAaJSsqB_lKICgVP-NmTgpwAflSVpjn0QNaSphVkxMDYhH1k1qvRKwO14SC-_CA_0ahBxZaj0YMTEWCG6k8qQpj_l8PrgMhGQCxUJ9FccwqDzEvLJVFYgskMC6P8i74yN2Ifs_lnbaEoIOo2ZNCFQgRLumW2WO5lcnm2Nk1Zgh6FNhd_IVfQefsbFs_W7mi6MAgsrjrNmkBP3YssnogBz4VXnh5LEhp3mcS9lpkak",
    tags: [
      "Tablets",
      "Capsules",
      "Syrups",
      "Softgels",
      "Powders",
      "Sachets",
      "Drops",
      "Effervescent Tablets",
    ],
  },
  {
    id: "ayurvedic",
    label: "Standardized Herbals",
    title: "Ayurvedic Sciences",
    description:
      "Bridging ancient botanical wisdom with modern analytical testing to create standardized, pure herbal formulations safe for everyday vitality.",
    icon: <Leaf className="w-6 h-6 text-primary-teal" />,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYK4mVh84Z56T1olgoPru4rtQ2KYonFDqMmz8RCdie_Jfm9VzgSRgSMZI4Nh5I09K37jJatvGLKhR05t1auKfQ6CwA5yo1bH9lVsf9SwOJ31GRy9tUnAH--qTr0LgQSf9ZV2ap2KoitwsTr3B84JfqoYniVIWM7Dfd-Bu1QcmF_FPo6TMjUBYHcMKfdm3m36GSvDi8CCsn5f-ljdgL72ItK-e75VkA-QxGQHWj3lKNtmG4skQsISLq6ZrQvvN22lqrtERFSbXzmEI",
    tags: [
      "Tablets",
      "Syrups",
      "Softgels",
      "Capsules",
      "Sachets",
      "Herbal Drops",
      "Powders",
      "Granules",
    ],
  },
  {
    id: "cosmetics",
    label: "Dermatological Care",
    title: "Clinical Cosmetics",
    description:
      "Dermatologist-tested skincare solutions engineered to restore, protect, and enhance skin barrier health using clean active ingredients.",
    icon: <ShieldAlert className="w-6 h-6 text-primary-teal" />,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAo0X0zy-jwSw6WQa1UGS6C2_T8vxlJH_CenAr41wh_yMno170DPiQuUQNSKcyzHJBwONmFRgU4pdDKGBKJ5eq9TJazcBE_7D8caNzGcuaudDHLRez3uPSFVZW9uHsD0Sz52KPsqfhu2nGJiARWBkOtPIyoEtupMNHaeOjIhYb5ryUx8igsKAODwS8ngsYEgX9jEFEZ5pNZkVhfi8dE8lZ4QVR8SIdoqK5CMljsY8rXh4dYSN-iUMPKy6pB5S-kPQ3QHLJ8DFT-t18",
    tags: [
      "Face Wash",
      "Shampoo",
      "Lotions",
      "Creams",
      "Sunscreens",
      "Serums",
      "Skincare Oils",
    ],
  },
];

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      {/* Breadcrumb */}
      <nav className="flex text-xs font-body uppercase tracking-wider text-grey-muted mb-12">
        <Link href="/" className="hover:text-primary-teal transition-colors">
          Home
        </Link>
        <span className="mx-2 text-grey-muted/40">/</span>
        <span className="text-ink-navy font-semibold">Our Products</span>
      </nav>

      {/* Header section (Asymmetric) */}
      <header className="mb-24 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="font-label-pill text-xs text-grey-muted uppercase tracking-widest mb-3 block">
              PORTFOLIO SHOWCASE
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-ink-navy font-semibold leading-tight">
              Our Pharmaceutical Excellence
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="font-body text-sm md:text-base text-grey-muted leading-relaxed">
              Precision-engineered formulations spanning essential therapeutics to advanced wellness solutions, designed for modern healthcare demands.
            </p>
          </div>
        </div>
      </header>

      {/* Product Divisions list */}
      <div className="space-y-32">
        {categories.map((cat, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <section
              key={cat.id}
              id={cat.id}
              className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Product Image Frame */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`lg:col-span-7 relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>

              {/* Product Text Description */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`lg:col-span-5 flex flex-col items-start ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex items-center gap-2 mb-4 bg-primary-teal/10 px-3 py-1 rounded-full text-primary-teal">
                  {cat.icon}
                  <span className="font-label-pill text-xs uppercase tracking-widest font-semibold">
                    {cat.label}
                  </span>
                </div>
                <h2 className="font-display text-3xl font-semibold text-ink-navy mb-4">
                  {cat.title}
                </h2>
                <p className="font-body text-sm md:text-base text-grey-muted mb-8 leading-relaxed">
                  {cat.description}
                </p>

                <div className="w-full">
                  <h4 className="font-label-pill text-xs uppercase tracking-wider text-ink-navy mb-4 font-semibold">
                    Available Dosage Forms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-xs font-medium text-primary-teal bg-primary-teal/5 px-4 py-2 rounded-full border border-primary-teal/10 hover:bg-primary-teal hover:text-bone-white transition-all cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href={`/contact?enquiry=${cat.id}`}
                    className="bg-coral text-bone-white font-body text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-ink-navy hover:scale-105 transition-all shadow-md duration-300"
                  >
                    Inquire About {cat.title}
                  </Link>
                </div>
              </motion.div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
