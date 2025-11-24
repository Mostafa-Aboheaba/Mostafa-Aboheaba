"use client";

import { skills } from "@/data/config";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { trackSectionView } from "@/utils/analytics";
import { useEffect } from "react";

const getProficiencyLevel = (level: number): "expert" | "advanced" | "intermediate" => {
  if (level >= 85) return "expert";
  if (level >= 70) return "advanced";
  return "intermediate";
};

const getProficiencyColor = (level: "expert" | "advanced" | "intermediate") => {
  switch (level) {
    case "expert":
      return "from-orange-500 via-yellow-500 to-orange-500";
    case "advanced":
      return "from-orange-400 via-yellow-400 to-orange-400";
    case "intermediate":
      return "from-orange-300 via-yellow-300 to-orange-300";
  }
};

const getProficiencyDots = (level: number) => {
  const filledDots = Math.ceil(level / 20);
  return Array.from({ length: 5 }, (_, i) => i < filledDots);
};

export const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      trackSectionView("skills");
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Technologies I work with and love
          </p>
        </AnimatedSection>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => {
            const proficiency = getProficiencyLevel(skill.level);
            const dots = getProficiencyDots(skill.level);
            const colorClass = getProficiencyColor(proficiency);
            
            return (
              <SkillBadge
                key={skill.name}
                skill={skill}
                proficiency={proficiency}
                dots={dots}
                colorClass={colorClass}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface SkillBadgeProps {
  skill: { name: string; level: number };
  proficiency: "expert" | "advanced" | "intermediate";
  dots: boolean[];
  colorClass: string;
  index: number;
}

const SkillBadge = ({ skill, proficiency, dots, colorClass, index }: SkillBadgeProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getSize = () => {
    if (skill.level >= 90) return "text-xl px-6 py-4";
    if (skill.level >= 80) return "text-lg px-5 py-3";
    return "text-base px-4 py-2.5";
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="group relative"
    >
      <motion.div
        className={`
          relative bg-white dark:bg-gray-900 border border-orange-200 dark:border-orange-500/20 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/30
          transition-all duration-300 cursor-pointer overflow-hidden
          border-2 border-transparent hover:border-orange-400 dark:hover:border-orange-500/50
          ${getSize()}
        `}
        whileHover={{ rotate: [0, -2, 2, 0] }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient background overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${colorClass} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="font-bold text-gray-900 dark:text-white text-center">
            {skill.name}
          </span>
          
          {/* Proficiency dots */}
          <div className="flex gap-1 items-center">
            {dots.map((filled, dotIndex) => (
              <motion.div
                key={dotIndex}
                className={`w-2 h-2 rounded-full ${
                  filled
                    ? `bg-gradient-to-r ${colorClass}`
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.05 + dotIndex * 0.1 }}
                whileHover={{ scale: 1.3 }}
              />
            ))}
          </div>
          
          {/* Proficiency label */}
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400 capitalize">
            {proficiency}
          </span>
        </div>
        
        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent opacity-0 group-hover:opacity-100"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
};

