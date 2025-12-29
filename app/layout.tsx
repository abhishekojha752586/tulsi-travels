// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Tulsi Tours and Travels',
    default: 'Tulsi Tours and Travels | Best Travel Agency in [Your City]',
  },
  description: 'Book affordable tour packages for Varanasi, Ayodhya, 4 Dham, and Himachal. Premium car rental services available. Contact Tulsi Tours today.',
  keywords: ['Varanasi Tours', 'Ayodhya Tour Package', 'Car Rental', 'Chardham Yatra', 'Taxi Service'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tulsitours.com', // Replace with actual domain
    siteName: 'Tulsi Tours and Travels',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Tulsi Tours and Travels',
    image: 'https://tulsitours.com/logo.png',
    description: 'Premier travel agency offering tour packages and car rentals.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Shop Address', // Update this
      addressLocality: 'Your City',
      addressRegion: 'State',
      postalCode: 'Code',
      addressCountry: 'IN',
    },
    telephone: '+91-9876543210', // Update this
    priceRange: '$$',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}