import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const footerLinks = {
  services: [
    { label: 'Web Design', href: '/services#web-design' },
    { label: 'Landing Pages', href: '/services#landing-pages' },
    { label: 'E-Commerce', href: '/services#ecommerce' },
    { label: 'Web Apps', href: '/services#web-apps' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 dark:bg-dark-950 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold">WebCraft Studio</span>
            </Link>
            <p className="text-dark-400 max-w-md mb-6">
              We craft beautiful, fast, and responsive websites that help businesses
              grow and succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-500 text-sm">
            © {new Date().getFullYear()} WebCraft Studio. All rights reserved.
          </p>
          <p className="text-dark-500 text-sm mt-2 md:mt-0">
            Crafted with passion for the web.
          </p>
        </div>
      </div>
    </footer>
  );
}
