'use client';

import { services, pricing } from '@/lib/data';
import AnimatedSection from '@/components/AnimatedSection';
import PricingCard from '@/components/PricingCard';
import CTA from '@/components/CTA';
import ShimmerText from '@/components/kokonutui/shimmer-text';

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white dark:from-dark-950 dark:to-dark-900">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <ShimmerText
              text="Our Services"
              className="text-4xl md:text-5xl lg:text-6xl"
            />
            <p className="text-lg text-dark-600 dark:text-dark-400 mt-6">
              We offer a comprehensive suite of web design and development
              services to help your business thrive online.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-14 h-14 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-5">
                      <span className="text-primary-600 dark:text-primary-400 text-2xl font-bold">
                        {service.title.charAt(0)}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-dark-600 dark:text-dark-400 text-lg mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-dark-700 dark:text-dark-300"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary-500 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`card h-80 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 flex items-center justify-center ${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  >
                    <span className="text-primary-200 dark:text-primary-800 text-[120px] font-bold opacity-50">
                      {service.title.charAt(0)}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section-padding bg-dark-50 dark:bg-dark-900 scroll-mt-24">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <ShimmerText
              text="Transparent Pricing"
              className="text-3xl md:text-4xl"
            />
            <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto mt-4">
              Simple, transparent pricing that works for your budget. No hidden
              fees, no surprises.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <AnimatedSection key={plan.name} delay={index * 0.1}>
                <PricingCard {...plan} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <p className="text-dark-500 dark:text-dark-400">
              Need something custom?{' '}
              <a
                href="/contact"
                className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                Let&apos;s discuss your project
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  );
}
