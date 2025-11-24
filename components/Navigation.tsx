"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/config";
import { trackNavigation } from "@/utils/analytics";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Use Intersection Observer for better active section detection
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    navItems.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      const section = document.querySelector(`#${sectionId}`);
      if (section) {
        observer.observe(section);
      }
    });
    
    // Also observe home section
    const homeSection = document.querySelector("#home");
    if (homeSection) {
      observer.observe(homeSection);
    }
    
    // Initial check for scroll position
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    const wasOpen = isOpen;
    setIsOpen(false);
    const sectionId = href.replace("#", "");
    setActiveSection(sectionId);
    
    // Track navigation click
    if (sectionId !== "home") {
      trackNavigation(sectionId);
    }
    
    // Wait for menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = window.innerWidth >= 768 ? 80 : 64; // md:h-20 (80px) or h-16 (64px)
        const yOffset = -(headerHeight + 20); // Header height + padding
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      }
    }, wasOpen ? 300 : 0); // Wait for menu animation if it was open
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md shadow-orange-500/20"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="text-xl md:text-2xl font-bold leading-tight"
              tabIndex={0}
              aria-label="Home"
            >
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400 bg-clip-text text-transparent">
                {personalInfo.name.split(" ")[0]}
              </span>{" "}
              <span className="text-gray-900 dark:text-white">
                {personalInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`transition-colors font-medium ${
                    isActive
                      ? "text-orange-500 dark:text-orange-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
                  }`}
                  tabIndex={0}
                  aria-label={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              );
            })}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white rounded-lg font-semibold shadow-lg shadow-orange-500/50 transition-all"
              tabIndex={0}
              aria-label="Hire me"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              aria-label="Toggle theme"
              tabIndex={0}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {mounted && theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
              tabIndex={0}
            >
              {mounted && theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              tabIndex={0}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden pb-4 pt-2 bg-white/95 dark:bg-black/95 backdrop-blur-md mt-2 rounded-lg shadow-lg border border-orange-200/50 dark:border-orange-500/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-2 px-2">
                {navItems.map((item, index) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-orange-500/10 dark:bg-orange-500/20 text-orange-500 dark:text-orange-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-orange-500 dark:hover:text-orange-400"
                      }`}
                      tabIndex={0}
                      aria-label={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="px-4 py-3 mt-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white rounded-lg font-semibold text-center shadow-lg shadow-orange-500/50 transition-all"
                  tabIndex={0}
                  aria-label="Hire me"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

