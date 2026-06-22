"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, Eye } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Advanced Manufacturing Plant",
    category: "Facility",
    description: "Our core production cleanrooms engineered for sterility and efficiency.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVtndZOgLZCf-3vK4wXKFJC5BIwywSQkqacpYU2nVZj2kS6mGCnrkig2eWIsOHDWmIBrMWyFgm35Wq4YFyZGB7gVp50fft6gF-ParpcrImGtrJwfmuRj0NOMMX_WYmfVyE935sLxaz_LcEM-KGJS-N1OyrLq0FMsNcEyKwZgJVKMjkEisCG-uSBNUigjrpCuXHCYMXgcbnEIccWeJhsWcbKjqjfG8SXDpGRfM-tL6cxy2c355NqWq8VrwcYymBYJYn27RwXQeQcSs",
    gridClass: "md:col-span-8 md:row-span-2 h-[350px] md:h-[624px]",
  },
  {
    id: 2,
    title: "Analytical Lab & QC",
    category: "Quality Control",
    description: "Where chemical formulations are audited for safety, potency, and purity.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxDSzJ8fRxuihxdSvtFbyDwgoRMt4IX7hODRIUKcckhTx6rUxoGb19k3tU_aOedIW-dB69cZpLJ_AC_vNPAvXedpQKeOnFdbGXMdEzd7WWGwKnA8lmNDTh1lsxNA02dd00-pUNCC3Z3C7tLGznSsAiIcReCV5_q2J8rZnoGU6_TWRxX1iposejKj7JjgfIQ0yhHyv8pNQhCeHHrtAFEBJhIcAwxsI-IyUGa-1u5EaH2nD6XnrDUyBCT7VkorvglfyBtJb8lGLaFt4",
    gridClass: "md:col-span-4 md:row-span-2 h-[350px] md:h-[624px]",
  },
  {
    id: 3,
    title: "Automated Packaging Line",
    category: "Operations",
    description: "High-speed packaging units that maintain sterile environments until sealing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrpY-az5A94TnpYZoYybyS8XZ54d6KI4bczdWZfQiyjz10RamvAwmcvg6MZp2m68S9MtQlabBuAh8qyowJ1wyG6QqAJ9BrFrEcPWC-3vEBKwTKiAnFszAxPVvcWtlasx_5TExvbkYLO_IwjErzqM164PmBo5NIRKdfkYeZ_QmWLMFRZLFGr2jFuwMy6_7jTY7sLRfuriWs_NE4phWU9K3ise7u6dl6iCso1T5XvCEH8CNmbwCs7-0Gz-nmg3lrSEiOtvZiUYaTWvA",
    gridClass: "md:col-span-6 h-[300px]",
  },
  {
    id: 4,
    title: "Global Compliance Seals",
    category: "Compliance",
    description: "Embossed seals representing ISO certifications and regulatory compliance.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_T1Jig5XdYOVwNlb9wuvgX8xLBqaW8V_neyID3cEsGoPOfOxnx6WnlqLTGJUjRuBXBT31UAjFo0RHeqfUBNPBmJN-1Mu3luIFBgz3PqCp-vbj0jY-eVDR09XHyuimO89NFeSENbDuM0EX2sjk9OONrPpjzxoR5b6BrPJ0ExoVqTZfViRDoL_cc53lVAgBhLTnAm7gFuqh4Ob9xrP81kNz2OdSUxKCMssYdnxcuYrGY7Xs8kJuX0PNGBu-ORl9n7PXHWvh4IW7bsg",
    gridClass: "md:col-span-6 h-[300px]",
  },
  {
    id: 5,
    title: "Finished Formulation Range",
    category: "Portfolio",
    description: "A showcase of complete tablet, capsule, and syrup bottles ready for dispatch.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA06hx1tuZgH1s-PQQpT7QNrI07Zshjvi7eEd-fSy0G3KC9zoBPeFZ88JXvlE2f4ww-rgJsiR06y6ywIzG-L60UTyb91YPwFd7j4Iryb4G6zZLnVKu8OWSEO4y_kZc65FjmUuCxMprwb55SbCf4XpOnN4UwcyIlRWdmnEXzBrkh9QCrR3IUjiV4lWvJMvrdGcfZQEBA6sdsEVRyT8gxvMCFlJ61vwLc_SL2lvn7iIWQy1X0ElMlsvCmdG6sBoG0wfaHqFDx6E892MM",
    gridClass: "md:col-span-8 h-[350px]",
  },
  {
    id: 6,
    title: "Scientific R&amp;D Team",
    category: "Expertise",
    description: "Our dedicated pharmaceutical scientists discussing formulation properties.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCql9vPzxVs1sQNQak8OXBoI4ArmU4Qna2rnVpGhnKENn15KXnoj2hgRnKmpUnXthML8SfhnLUNNAbLUXvrt_-d1zK90uLG2x_8QL94aIoy7_dSx7-U0PNxegaz6NOsol8ynh46z9fmc_fOk63y2xvaMHYwje-TUmWVoqdg8PqmBXV9PwGjSiOdHh6juum-HwEAiI8wXTlohGrTcPC0l3yQ8m8ypUUGGTbScs4Rx96TtYANigGmccHWPHW4VdpebWOmAUXJZjPKK1A",
    gridClass: "md:col-span-4 h-[350px]",
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      {/* Breadcrumb */}
      <nav className="flex text-xs font-body uppercase tracking-wider text-grey-muted mb-12">
        <Link href="/" className="hover:text-primary-teal transition-colors">
          Home
        </Link>
        <span className="mx-2 text-grey-muted/40">/</span>
        <span className="text-ink-navy font-semibold">Gallery</span>
      </nav>

      {/* Header section */}
      <header className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <span className="font-label-pill text-xs text-grey-muted uppercase tracking-widest mb-3 block">
              VISUAL JOURNAL
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-ink-navy font-semibold leading-tight">
              Visualizing Precision
            </h1>
          </div>
          <div className="md:col-span-4 flex items-end">
            <p className="font-body text-sm md:text-base text-grey-muted leading-relaxed">
              A curated look inside our state-of-the-art facilities, reflecting our commitment to editorial minimalism and uncompromising quality in healthcare manufacturing.
            </p>
          </div>
        </div>
      </header>

      {/* Asymmetric Masonry Gallery Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-auto">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            onClick={() => setSelectedItem(item)}
            className={`group relative overflow-hidden rounded-2xl border border-grey-muted/15 bg-sage-green/10 cursor-pointer ${item.gridClass}`}
            data-cursor="view"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Hover details overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/90 via-ink-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="font-label-pill text-xs text-accent-lime uppercase tracking-widest font-semibold block mb-2">
                  {item.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-bone-white flex items-center gap-2">
                  {item.title} <Eye className="w-5 h-5 text-accent-lime shrink-0" />
                </h3>
                <p className="font-body text-xs text-sage-green mt-2 max-w-md">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-ink-navy/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 text-bone-white/80 hover:text-bone-white bg-bone-white/10 hover:bg-bone-white/20 p-3 rounded-full transition-all"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div
            className="relative w-full max-w-4xl max-h-[80vh] flex flex-col items-center bg-bone-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[16/10] md:max-h-[60vh] overflow-hidden">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />
            </div>
            
            <div className="w-full p-6 md:p-8 bg-bone-white border-t border-grey-muted/10">
              <span className="font-label-pill text-xs text-primary-teal uppercase tracking-widest font-semibold block mb-2">
                {selectedItem.category}
              </span>
              <h3 className="font-display text-2xl font-bold text-ink-navy mb-2">
                {selectedItem.title}
              </h3>
              <p className="font-body text-sm text-grey-muted">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
