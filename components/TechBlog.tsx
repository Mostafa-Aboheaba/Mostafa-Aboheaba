"use client";

import { blogPosts } from "@/data/config";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { AnimatedCard } from "./AnimatedCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { trackSectionView } from "@/utils/analytics";
import { useEffect } from "react";

export const TechBlog = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      trackSectionView("blog");
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="blog"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Tech Blog
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Sharing knowledge and insights about mobile development
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedCard key={post.id} delay={index * 0.1}>
              <motion.article
                className="bg-gray-50 dark:bg-gray-900 border border-orange-200 dark:border-orange-500/20 rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 h-full flex flex-col"
                whileHover={{ y: -8 }}
              >
                <div className="mb-4">
                  <motion.span
                    className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-300 dark:border-orange-500/30 rounded-full text-sm font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {post.category}
                  </motion.span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <motion.a
                  href={post.url}
                  className="inline-flex items-center gap-2 text-orange-500 dark:text-orange-400 hover:text-yellow-500 dark:hover:text-yellow-400 font-semibold transition-colors"
                  tabIndex={0}
                  aria-label={`Read more about ${post.title}`}
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.article>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

