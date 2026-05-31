import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './Providers';

export const metadata: Metadata = {
  title: 'IDFIS | Authentic Indian Handcrafts',
  description: 'Shop high-end handcrafted textiles, Kashmir coats, and heritage sarees made by skilled Indian artisans.',
  openGraph: {
    title: 'IDFIS',
    description: 'Authentic Indian handcrafted pieces for homes around the world.',
    url: 'https://idfis.com',
    siteName: 'IDFIS',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
