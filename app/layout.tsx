import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - The Future of Marketing Intelligence',
  description: 'Revolutionary AI-powered marketing platform with kinetic interfaces, morphing analytics, and neural content generation. Experience the future of brand intelligence.',
  keywords: 'AI marketing, brand strategy, content creation, marketing automation, AI suite',
  authors: [{ name: 'ADmyBRAND' }],
  openGraph: {
    title: 'ADmyBRAND AI Suite - The Future of Marketing Intelligence',
    description: 'Revolutionary AI-powered marketing platform with kinetic interfaces, morphing analytics, and neural content generation.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} antialiased bg-black min-h-screen overflow-x-hidden`}>
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-90" />
        <div className="fixed inset-0 noise-texture" />
        {children}
      </body>
    </html>
  );
}