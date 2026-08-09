'use client';

import Link from 'next/link';
import { HiCheck } from 'react-icons/hi';
import ParticleButton from '@/components/kokonutui/particle-button';

interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular,
}: PricingCardProps) {
  return (
    <div
      className={`card relative h-full flex flex-col ${
        popular
          ? 'border-2 border-primary-500 dark:border-primary-400 shadow-xl'
          : ''
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-dark-500 dark:text-dark-400 text-sm mb-4">
          {description}
        </p>

        <div className="mb-6">
          <span className="text-4xl font-bold text-dark-900 dark:text-white">
            ${price}
          </span>
          <span className="text-dark-500 dark:text-dark-400 ml-2">
            /project
          </span>
        </div>

        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature) => (
            <li key={feature} className="flex items-start">
              <HiCheck className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-dark-600 dark:text-dark-300 text-sm">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {popular ? (
          <Link href="/contact">
            <ParticleButton
              className={`w-full py-3 px-6 font-semibold ${
                'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/25'
              }`}
            >
              Get Started
            </ParticleButton>
          </Link>
        ) : (
          <Link
            href="/contact"
            className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
              'bg-dark-100 dark:bg-dark-800 text-dark-900 dark:text-white hover:bg-dark-200 dark:hover:bg-dark-700'
            }`}
          >
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
}
