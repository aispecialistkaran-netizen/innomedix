"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Disable body scroll when loading
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            document.body.style.overflow = "";
          }, 600);
          return 100;
        }
        // Organic counter progression speed
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-ink-navy text-bone-white flex flex-col justify-between p-10 md:p-16"
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            <span className="font-label-pill uppercase tracking-widest text-sage-green text-xs">
              Innomedix Pharma
            </span>
            <span className="font-label-pill uppercase tracking-widest text-sage-green text-xs">
              Precision in Healthcare
            </span>
          </div>

          {/* Core Info */}
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-6xl text-bone-white mb-4 overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="block"
              >
                13 Years of Clinical Reliability.
              </motion.span>
            </h1>
            <p className="font-body text-sm md:text-base text-sage-green max-w-md">
              Pioneering advanced pharmaceutical manufacturing, biotech R&amp;D, and holistic wellness solutions.
            </p>
          </div>

          {/* Footer & Progress */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="w-full md:w-96 flex flex-col gap-2">
              <div className="flex justify-between text-xs font-label-pill text-sage-green">
                <span>INITIALIZING DATABASE</span>
                <span>{progress}%</span>
              </div>
              <div className="h-[2px] bg-sage-green/20 relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-accent-lime"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>
            
            <div className="text-right">
              <div className="font-display text-7xl md:text-9xl font-bold text-accent-lime opacity-20">
                {progress}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
