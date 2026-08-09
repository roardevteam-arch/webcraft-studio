import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | WebCraft Studio',
  description:
    'Get in touch with WebCraft Studio. Let\'s discuss your project and bring your ideas to life.',
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white dark:from-dark-950 dark:to-dark-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-primary text-dark-900 dark:text-white mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-dark-600 dark:text-dark-400">
              Have a project in mind? We&apos;d love to hear from you. Send us a
              message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
