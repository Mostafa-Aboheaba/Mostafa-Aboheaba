"use client";

import { personalInfo } from "@/data/config";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { trackSocialClick, trackEmailClick, trackSectionView } from "@/utils/analytics";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    url: `mailto:${personalInfo.email}`,
    label: "Send an email",
  },
  {
    name: "GitHub",
    icon: Github,
    url: `https://github.com/${personalInfo.github}`,
    label: "Visit GitHub profile",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: `https://linkedin.com/in/${personalInfo.linkedin}`,
    label: "Visit LinkedIn profile",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: `https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`,
    label: "Chat on WhatsApp",
  },
];

export const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      trackSectionView("contact");
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <motion.div
            className="bg-gray-50 dark:bg-gray-900 border border-orange-200 dark:border-orange-500/20 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transition-shadow"
            whileHover={{ y: -5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                const handleClick = () => {
                  if (social.name === "Email") {
                    trackEmailClick();
                  } else {
                    const platformName = social.name.toLowerCase().replace(/\s+/g, "_");
                    trackSocialClick(platformName, social.url);
                  }
                };
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClick}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-500/10 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-orange-300 dark:hover:border-orange-500/30 transition-colors shadow-md hover:shadow-lg"
                    tabIndex={0}
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="p-3 bg-orange-100 dark:bg-orange-500/20 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                    </motion.div>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {social.name}
                    </span>
                  </motion.a>
                );
              })}
            </div>
            <motion.div
              className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-center text-gray-600 dark:text-gray-400">
                Feel free to reach out through any of these channels. I typically
                respond within 24 hours.
              </p>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

