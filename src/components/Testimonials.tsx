'use client';

import Image from 'next/image';
import { HiStar } from 'react-icons/hi';
import { testimonials } from '@/lib/data';
import AnimatedSection from './AnimatedSection';

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="heading-secondary text-dark-900 dark:text-white mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with us.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 0.1}>
              <div className="card p-8 h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-dark-700 dark:text-dark-300 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-dark-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-dark-500 dark:text-dark-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
