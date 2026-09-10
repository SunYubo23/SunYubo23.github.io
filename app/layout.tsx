import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Yubo Sun | HomePage',
  description:
    'Yubo Sun is a Ph.D. student at Fudan University researching scalable graph algorithms, network science, and graph learning.',
  openGraph: {
    title: 'Yubo Sun | HomePage',
    description:
      'Scalable algorithms for understanding structure, influence, and opinion on large graphs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yubo Sun | HomePage',
    description:
      'Scalable algorithms for understanding structure, influence, and opinion on large graphs.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
