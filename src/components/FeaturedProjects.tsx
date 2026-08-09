'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HiArrowRight, HiExternalLink, HiCode } from 'react-icons/hi';
import { projects } from '@/lib/data';
import AnimatedSection from './AnimatedSection';

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="section-padding bg-dark-50 dark:bg-dark-900">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="heading-secondary text-dark-900 dark:text-white mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            A selection of our recent work. Each project is crafted with
            attention to detail and a focus on results.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.15}>
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
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link href="/portfolio" className="btn-primary">
            View All Projects
            <HiArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
