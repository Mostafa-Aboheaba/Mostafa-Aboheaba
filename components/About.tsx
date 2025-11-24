"use client";

import { personalInfo } from "@/data/config";
import { MapPin, Calendar } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <motion.div
            className="bg-gray-50 dark:bg-gray-900 border border-orange-200 dark:border-orange-500/20 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transition-shadow duration-300"
            whileHover={{ y: -5 }}
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {personalInfo.about}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 text-gray-600 dark:text-gray-400">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                <span>{personalInfo.location}</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Calendar className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                <span>{personalInfo.yearsOfExperience} Years Experience</span>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

