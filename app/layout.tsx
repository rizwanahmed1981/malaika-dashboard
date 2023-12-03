import { Metadata } from 'next';

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title:  {
    template: '%s | Malaika Dashboard',
    default: 'Malaika Dashboard',
  },
  description: 'The official Malaika Dashboard, built with Next.js.',
  metadataBase: new URL('https://malaika-dashboard.vercel.app/'),
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
