'use client';

import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import AnimatedSection from './AnimatedSection';
import ParticleButton from '@/components/kokonutui/particle-button';
import ShimmerText from '@/components/kokonutui/shimmer-text';

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
        <div className="absolute top-20 right-20 w-48 h-48 border border-white rounded-full" />
        <div className="absolute bottom-10 left-1/3 w-24 h-24 border border-white rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <ShimmerText
            text="Let's Create Together"
            className="text-3xl md:text-4xl text-white mb-4"
          />
          <h2 className="heading-secondary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s work together to create something amazing. Get in touch
            to discuss your project and get a free quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <ParticleButton
                className="bg-white text-primary-600 font-semibold hover:bg-primary-50 px-8 py-4 h-auto"
              >
                Start Your Project
              </ParticleButton>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 active:scale-95"
            >
              View Our Work
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
