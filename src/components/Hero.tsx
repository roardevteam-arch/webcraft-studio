'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import TypewriterTitle from '@/components/kokonutui/type-writer';
import ShimmerText from '@/components/kokonutui/shimmer-text';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-dark-950 dark:to-dark-900" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200/30 dark:bg-primary-800/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-100/40 dark:bg-primary-900/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse" />
            Available for new projects
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <ShimmerText
              text="WebCraft Studio"
              className="text-4xl md:text-5xl lg:text-6xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-6"
          >
            <h1 className="heading-primary text-dark-900 dark:text-white">
              We Build{' '}
              <span className="text-gradient">Digital Experiences</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <TypewriterTitle
              sequences={[
                { text: "Stunning Websites", deleteAfter: true },
                { text: "Mobile Apps", deleteAfter: true },
                { text: "E-Commerce Stores", deleteAfter: true },
                { text: "Web Applications", deleteAfter: false },
              ]}
              typingSpeed={80}
              deleteSpeed={40}
              pauseBeforeDelete={2000}
              autoLoop={true}
              loopDelay={500}
              className="text-2xl md:text-3xl lg:text-4xl"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-dark-600 dark:text-dark-400 mb-10 max-w-2xl mx-auto"
          >
            Transform your ideas into stunning, high-performance websites that
            captivate your audience and drive real results for your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className="btn-primary text-base px-8 py-4 group">
              Start Your Project
              <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="btn-secondary text-base px-8 py-4"
            >
              View Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { number: '50+', label: 'Projects' },
              { number: '30+', label: 'Happy Clients' },
              { number: '3+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
                  {stat.number}
                </div>
                <div className="text-sm text-dark-500 dark:text-dark-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-dark-300 dark:border-dark-600 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-dark-400 dark:bg-dark-500"
          />
        </div>
      </div>
    </section>
  );
}
