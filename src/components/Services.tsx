'use client';

import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { services } from '@/lib/data';
import AnimatedSection from './AnimatedSection';

export default function Services() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="heading-secondary text-dark-900 dark:text-white mt-3 mb-4">
            Everything You Need to Succeed Online
          </h2>
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            From stunning websites to powerful web applications, we offer
            comprehensive solutions tailored to your needs.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <Link href={`/services#${service.id}`}>
                <div className="card p-8 h-full group hover:-translate-y-1 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <span className="text-primary-600 dark:text-primary-400 group-hover:text-white text-xl font-bold transition-colors duration-300">
                      {service.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-400 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-dark-500 dark:text-dark-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="text-primary-600 dark:text-primary-400 font-medium text-sm inline-flex items-center group-hover:gap-2 transition-all duration-300">
                    Learn more
                    <HiArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
            <HiArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
