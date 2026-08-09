import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'WebCraft Studio | Professional Web Design & Development',
  description:
    'Transform your online presence with WebCraft Studio. We create stunning, fast, and responsive websites that drive results. Professional web design and development services.',
  keywords: [
    'web design',
    'web development',
    'website creation',
    'freelance web designer',
    'responsive website',
    'next.js developer',
    'tailwind css',
    'landing page',
    'e-commerce website',
  ],
  authors: [{ name: 'WebCraft Studio' }],
  creator: 'WebCraft Studio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webcraftstudio.dev',
    siteName: 'WebCraft Studio',
    title: 'WebCraft Studio | Professional Web Design & Development',
    description:
      'Transform your online presence with WebCraft Studio. We create stunning, fast, and responsive websites that drive results.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebCraft Studio | Professional Web Design & Development',
    description:
      'Transform your online presence with WebCraft Studio. We create stunning, fast, and responsive websites that drive results.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
