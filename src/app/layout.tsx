import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './Providers';
import AnnouncementBar from '@/components/AnnouncementBar';

export const metadata: Metadata = {
  title: 'IDFIS | Luxury Indian Handcrafted Apparel & Artisan Pieces',
  description: 'Discover IDFIS, a premium Indian handcrafted brand offering craft-led sarees, Kashmir coats, silk kurtas, artisan accessories, transparent global shipping, and elite protective packaging.',
  openGraph: {
    title: 'IDFIS | Luxury Indian Handcrafted Apparel & Artisan Pieces',
    description: 'Discover IDFIS, a premium Indian handcrafted brand offering craft-led sarees, Kashmir coats, silk kurtas, artisan accessories, transparent global shipping, and elite protective packaging.',
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
          <AnnouncementBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
