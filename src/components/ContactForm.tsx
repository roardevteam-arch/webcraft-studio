'use client';

import { useState, FormEvent } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import AnimatedSection from './AnimatedSection';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual form service)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', budget: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'hello@webcraftstudio.dev',
      href: 'mailto:hello@webcraftstudio.dev',
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Available Worldwide',
      href: null,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <AnimatedSection>
        <h2 className="heading-secondary text-dark-900 dark:text-white mb-6">
          Let&apos;s Work Together
        </h2>
        <p className="text-dark-600 dark:text-dark-400 mb-8">
          Have a project in mind? I&apos;d love to hear about it. Send me a
          message and let&apos;s create something amazing together.
        </p>

        <div className="space-y-6 mb-8">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex items-center">
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mr-4">
                <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-dark-500 dark:text-dark-400">
                  {info.label}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-dark-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-dark-900 dark:text-white font-medium">
                    {info.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="card p-6">
          <h3 className="font-semibold text-dark-900 dark:text-white mb-2">
            Prefer email?
          </h3>
          <p className="text-dark-600 dark:text-dark-400 text-sm mb-4">
            You can also reach me directly at:
          </p>
          <a
            href="mailto:hello@webcraftstudio.dev"
            className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
          >
            hello@webcraftstudio.dev
          </a>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <form onSubmit={handleSubmit} className="card p-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
                >
                  Project Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                >
                  <option value="">Select a service</option>
                  <option value="web-design">Website Design</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="web-app">Web Application</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select budget range</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="2000-5000">$2,000 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="input-field resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Send Message
                  <HiPaperAirplane className="w-5 h-5 ml-2" />
                </span>
              )}
            </button>

            {submitStatus === 'success' && (
              <p className="text-center text-green-600 dark:text-green-400">
                Thank you! Your message has been sent successfully.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-center text-red-600 dark:text-red-400">
                Something went wrong. Please try again later.
              </p>
            )}
          </div>
        </form>
      </AnimatedSection>
    </div>
  );
}
