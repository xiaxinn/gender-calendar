import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://chinese-gender-calendar.net'),
  title: {
    default: 'Chinese Gender Calendar - Baby Gender Predictor',
    template: '%s | Chinese Gender Calendar',
  },
  description: 'Predict your baby\'s gender with the ancient Chinese Gender Calendar!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
