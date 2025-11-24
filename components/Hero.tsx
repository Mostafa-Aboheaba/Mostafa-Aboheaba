"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/config";
import { ArrowDown, ArrowUp, Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getAssetPath } from "@/utils/paths";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: `https://github.com/${personalInfo.github}`,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: `https://linkedin.com/in/${personalInfo.linkedin}`,
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: `https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`,
  },
  {
    name: "Email",
    icon: Mail,
    url: `mailto:${personalInfo.email}`,
  },
];

export const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showFab, setShowFab] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      // Show FAB when at top (scroll down) or scrolled significantly (scroll to top)
      // Hide in middle sections for cleaner UI
      setShowFab(currentScrollY < 100 || currentScrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollAction = () => {
    if (scrollY > 300) {
      // Scroll to top if scrolled down
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to about section if at top
      const element = document.querySelector("#about");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getInitials = () => {
    return personalInfo.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white dark:bg-black px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 dark:opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 dark:opacity-15"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <motion.p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400"
              variants={itemVariants}
            >
              Hi I am
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400 bg-clip-text text-transparent">
                {personalInfo.name.split(" ")[0]}
              </span>{" "}
              <span className="text-gray-900 dark:text-white">
                {personalInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              {personalInfo.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              {personalInfo.bio}
            </motion.p>

            {/* Social Media Icons */}
            <motion.div
              className="flex gap-4"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                    tabIndex={0}
                    aria-label={social.name}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white rounded-lg font-semibold text-lg shadow-lg shadow-orange-500/50 text-center flex items-center justify-center gap-2"
                tabIndex={0}
                aria-label="Download CV"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 text-white rounded-lg font-semibold text-lg text-center border border-gray-700 dark:border-gray-700"
                tabIndex={0}
                aria-label="View Projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Statistics Section */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-8"
              variants={itemVariants}
            >
              <motion.div
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 text-center"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-orange-500 dark:text-orange-400 mb-1">
                  {personalInfo.stats.experience}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Experiences
                </div>
              </motion.div>
              <motion.div
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 text-center"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-orange-500 dark:text-orange-400 mb-1">
                  {personalInfo.stats.projects}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Project done
                </div>
              </motion.div>
              {/* <motion.div
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 text-center"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-orange-500 dark:text-orange-400 mb-1">
                  {personalInfo.stats.clients}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Happy Clients
                </div>
              </motion.div> */}
            </motion.div>
          </div>

          {/* Right Side - Circular Avatar with Gradient Ring */}
          <motion.div
            className="flex items-center justify-center lg:justify-end relative py-8 lg:py-0"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated Gradient Ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #f97316, #eab308, #f97316)",
                  padding: "4px",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-black" />
              </motion.div>

              {/* Circular Photo */}
              <div className="absolute inset-0 rounded-full overflow-hidden" style={{ padding: "4px" }}>
                {imageError ? (
                  <motion.div
                    className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 dark:from-orange-500 dark:to-yellow-500 flex items-center justify-center shadow-2xl"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white text-4xl lg:text-5xl font-bold">
                      {getInitials()}
                    </span>
                  </motion.div>
                ) : (
                  <motion.img
                    src={getAssetPath(personalInfo.photo || "/profile-photo.png")}
                    alt={personalInfo.name}
                    className="w-full h-full rounded-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Action Button (FAB) */}
        <AnimatePresence>
          {showFab && (
            <motion.button
              onClick={handleScrollAction}
              className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg shadow-orange-500/50 flex items-center justify-center transition-all duration-300"
              aria-label={scrollY > 300 ? "Scroll to top" : "Scroll to about section"}
              tabIndex={0}
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              {scrollY > 300 ? (
                <ArrowUp className="w-6 h-6" />
              ) : (
                <ArrowDown className="w-6 h-6" />
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
