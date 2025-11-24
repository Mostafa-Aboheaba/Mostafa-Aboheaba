"use client";

import { workExperience } from "@/data/config";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Work <span className="bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-orange-400 dark:to-yellow-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            My professional journey and achievements
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-yellow-500 to-orange-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {workExperience.map((experience, index) => (
              <TimelineItem key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  experience: typeof workExperience[0];
  index: number;
}

const TimelineItem = ({ experience, index }: TimelineItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Timeline marker */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 md:-translate-x-1/2 z-10">
        <motion.div
          className="w-16 h-16 rounded-full bg-white dark:bg-gray-900 border-4 border-orange-500 dark:border-orange-500 shadow-lg shadow-orange-500/50 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {experience.companyLogo ? (
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <img
                src={experience.companyLogo}
                alt={experience.company}
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-xl">${experience.icon || "💼"}</span>`;
                  }
                }}
              />
            </div>
          ) : (
            <span className="text-xl">{experience.icon || "💼"}</span>
          )}
        </motion.div>
      </div>

      {/* Content card */}
      <div
        className={`w-full md:w-5/12 ml-24 md:ml-0 ${
          isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <motion.div
          className="bg-white dark:bg-gray-900 border border-orange-200 dark:border-orange-500/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300"
          whileHover={{ y: -5, scale: 1.02 }}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
            <div className="flex items-start gap-4">
              {experience.companyLogo && (
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                  <img
                    src={experience.companyLogo}
                    alt={experience.company}
                    className="w-full h-full object-contain p-1"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {experience.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">{experience.company}</span>
                  <span className="text-gray-400">•</span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3 h-3 text-orange-500 dark:text-orange-400" />
                    {experience.type}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                {experience.startDate} - {experience.endDate}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                {experience.location}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Achievements */}
          {experience.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Key Achievements:
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                  >
                    <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, techIdx) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full text-xs font-medium"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: index * 0.1 + techIdx * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;

