'use client';

import { motion } from 'framer-motion';
import { skills, processSteps } from '@/lib/data';
import AnimatedSection from '@/components/AnimatedSection';
import CTA from '@/components/CTA';
import ScrollText from '@/components/kokonutui/scroll-text';
import ShimmerText from '@/components/kokonutui/shimmer-text';

export default function AboutPage() {
  const techStack = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
    'Node.js', 'Python', 'PostgreSQL', 'Framer Motion',
    'Vercel', 'Git', 'REST APIs', 'GraphQL',
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white dark:from-dark-950 dark:to-dark-900">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="heading-primary text-dark-900 dark:text-white mb-6">
              About <span className="text-gradient">WebCraft Studio</span>
            </h1>
            <p className="text-lg text-dark-600 dark:text-dark-400">
              The story behind the craft.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="heading-secondary text-dark-900 dark:text-white">
                  Hi, I&apos;m the founder of WebCraft Studio
                </h2>
                <div className="space-y-4 text-dark-600 dark:text-dark-400 leading-relaxed">
                  <p>
                    I&apos;m a passionate web developer and designer with over 3
                    years of experience creating beautiful, functional websites
                    for businesses of all sizes. What started as a curiosity for
                    code has evolved into a deep love for crafting digital
                    experiences that make a real difference.
                  </p>
                  <p>
                    As a computer science student, I bring a unique blend of
                    technical expertise and creative vision to every project. I
                    believe that great websites aren&apos;t just about looking
                    good — they&apos;re about solving problems, telling stories,
                    and creating meaningful connections between businesses and
                    their customers.
                  </p>
                  <p>
                    When I&apos;m not coding, you can find me exploring new
                    design trends, contributing to open-source projects, or
                    enjoying a good cup of coffee while sketching wireframes for
                    my next project.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="card p-8 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-dark-800">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: '50+', label: 'Projects Completed' },
                      { number: '30+', label: 'Happy Clients' },
                      { number: '3+', label: 'Years Experience' },
                      { number: '100%', label: 'Client Satisfaction' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-4">
                        <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                          {stat.number}
                        </div>
                        <div className="text-sm text-dark-500 dark:text-dark-400 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-primary-200/30 dark:bg-primary-800/20 rounded-2xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-50 dark:bg-dark-900">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <ShimmerText
              text="Tech Stack"
              className="text-3xl md:text-4xl"
            />
            <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto mt-4">
              I stay up-to-date with the latest technologies to deliver the
              best results for every project.
            </p>
          </AnimatedSection>

          <div className="flex justify-center mb-16">
            <ScrollText
              texts={techStack}
              className="h-[400px]"
            />
          </div>

          <AnimatedSection className="text-center mb-16">
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
              Proficiency
            </span>
            <h2 className="heading-secondary text-dark-900 dark:text-white mt-3 mb-4">
              Technical Expertise
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} delay={index * 0.1}>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-dark-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-primary-600 dark:text-primary-400 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-dark-200 dark:bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
              Process
            </span>
            <h2 className="heading-secondary text-dark-900 dark:text-white mt-3 mb-4">
              How I Work
            </h2>
            <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
              A proven process that ensures every project is delivered on time,
              on budget, and beyond expectations.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <div className="card p-8 h-full relative">
                  <div className="absolute top-6 right-6 text-6xl font-bold text-dark-100 dark:text-dark-800">
                    {step.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-5">
                      <span className="text-primary-600 dark:text-primary-400 font-bold text-xl">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-dark-600 dark:text-dark-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
