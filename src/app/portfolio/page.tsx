'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { projects } from '@/lib/data';
import AnimatedSection from '@/components/AnimatedSection';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-design', label: 'Web Design' },
  { id: 'e-commerce', label: 'E-Commerce' },
  { id: 'landing-page', label: 'Landing Pages' },
  { id: 'web-apps', label: 'Web Apps' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white dark:from-dark-950 dark:to-dark-900">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="heading-primary text-dark-900 dark:text-white mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg text-dark-600 dark:text-dark-400">
              A showcase of our recent projects. Each one is crafted with
              precision and a focus on delivering results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                    : 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </AnimatedSection>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card group overflow-hidden h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                        <a
                          href={project.liveUrl}
                          className="p-2 rounded-lg bg-white/90 text-dark-900 hover:bg-white transition-colors"
                        >
                          <HiExternalLink className="w-5 h-5" />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="p-2 rounded-lg bg-white/90 text-dark-900 hover:bg-white transition-colors"
                        >
                          <HiCode className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium rounded-md bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-dark-600 dark:text-dark-400 text-sm flex-1">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
