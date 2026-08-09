'use client';

import Link from 'next/link';
import {
  HiOutlinePaintBrush,
  HiOutlineDevicePhoneMobile,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineCog,
  HiOutlineHeart,
} from 'react-icons/hi2';
import AnimatedSection from './AnimatedSection';

const features = [
  {
    icon: HiOutlinePaintBrush,
    title: 'Modern Design',
    description: 'Clean, contemporary designs that make your brand stand out.',
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: 'Fully Responsive',
    description: 'Pixel-perfect on every device, from mobile to desktop.',
  },
  {
    icon: HiOutlineClock,
    title: 'Fast Delivery',
    description: 'Quick turnaround without compromising on quality.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Reliable & Secure',
    description: 'Best practices for security and performance built in.',
  },
  {
    icon: HiOutlineCog,
    title: 'Easy to Manage',
    description: 'User-friendly CMS so you can update content yourself.',
  },
  {
    icon: HiOutlineHeart,
    title: 'Passion-Driven',
    description: 'Genuine care for your project and its success.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-dark-50 dark:bg-dark-900">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="heading-secondary text-dark-900 dark:text-white mt-3 mb-4">
            Built with Care, Delivered with Excellence
          </h2>
          <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Every project is treated with the same level of dedication and
            attention to detail, regardless of its size.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <div className="card p-8 h-full hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-400">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            href="/about"
            className="text-primary-600 dark:text-primary-400 font-medium hover:underline inline-flex items-center"
          >
            Learn more about our process
            <span className="ml-1">→</span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
