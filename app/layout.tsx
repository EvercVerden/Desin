import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-garamond',
});

export const metadata: Metadata = {
  title: 'LuxeGems - Exquisite Jewelry',
  description: 'Discover our collection of fine jewelry for life\'s precious moments.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable} font-serif`}>{children}</body>
    </html>
  );
}