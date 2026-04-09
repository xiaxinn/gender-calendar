import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';


export const metadata: Metadata = {
  metadataBase: new URL('https://chinese-gender-calendar.net'),
  title: {
    default: 'Chinese Gender Calendar - Baby Gender Predictor',
    template: '%s | Chinese Gender Calendar',
  },
  description: 'Try this traditional Chinese gender calendar tool based on your age and conception date. It\'s fun, free, and easy to use!',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
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
      <body className="antialiased">
        {children}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-FXCRSTX6L5"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FXCRSTX6L5');
            `,
          }}
        />
      </body>
    </html>
  );
}
