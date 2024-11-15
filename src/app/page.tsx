"use client";

import { useThemeSync } from "@/hooks/useThemeSync";
import { motion, useScroll, useSpring } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "@/components/features/blocks/Services";
import { useTheme } from "next-themes";
import Team from "@/components/features/blocks/Team";
import Testimonials from "@/components/features/blocks/Statistics";
import Hero from "@/components/features/blocks/Hero";
import Features from "@/components/features/blocks/Features";
import Partners from "@/components/features/blocks/Partners";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};

const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function HomeContent() {
  useThemeSync();
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="min-h-screen bg-secondary dark:bg-black ">
      {/* Barre de progression du scroll */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <motion.div
          className="container mx-auto px-4 py-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
      >
        <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-100px"}}
        >
          <Hero/>
        </motion.div>

        <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-100px"}}
        >
          <Features/>
        </motion.div>

        <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-100px"}}
        >
          <Services/>
        </motion.div>

        <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-100px"}}
        >
          <Team/>
        </motion.div>

        <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-100px"}}
        >
          <Testimonials/>
        </motion.div>

        <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-100px"}}
        >
          <Partners/>
        </motion.div>
      </motion.div>
      {/* Indicateur de scroll */}
      <motion.div
          className="fixed bottom-8 cursor-pointer right-8 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
          onClick={scrollToTop}
          style={{
          scale: useSpring(scrollYProgress, {
            stiffness: 100,
            damping: 30,
            restDelta: 0.001
          })
        }}
      >
        <motion.div
          className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-medium"
          style={{ 
            rotate: useSpring(scrollYProgress.get() * 360, {
              stiffness: 100,
              damping: 30
            })
          }}
        >
          ↑
        </motion.div>
      </motion.div>
    </div>
  );
}