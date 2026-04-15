import type { Metadata } from 'next';
import { getTranslations } from '@/lib/i18n';
import PredictorForm from '@/components/PredictorForm';
import CalendarTable from '@/components/CalendarTable';
import FAQ from '@/components/FAQ';
import BackgroundSection from '@/components/BackgroundSection';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  const t = getTranslations('en');
  return {
    title: t.title,
    description: t.metaDescription,
    keywords: t.metaKeywords,
    alternates: {
      canonical: 'https://chinese-gender-calendar.net',
      languages: {
        'en': 'https://chinese-gender-calendar.net',
        'zh-CN': 'https://chinese-gender-calendar.net/zh',
        'x-default': 'https://chinese-gender-calendar.net',
      },
    },
    openGraph: {
      title: t.title,
      description: t.metaDescription,
      url: '/',
      siteName: t.siteName,
      locale: 'en_US',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: t.siteName }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.metaDescription,
      images: ['/og-image.png'],
    },
    robots: { index: true, follow: true },
  };
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Chinese Gender Calendar',
  description: 'Predict your baby\'s gender using the traditional Chinese Gender Calendar based on mother\'s lunar age and conception month',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'All',
  url: 'https://chinese-gender-calendar.net',
  inLanguage: 'en',
};

export default function HomePage() {
  const t = getTranslations('en');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-amber-50">
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-red-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏮</span>
              <span className="font-bold text-red-700 text-lg hidden sm:block">{t.siteName}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <a href="#predictor" className="text-gray-600 hover:text-red-600 transition-colors font-medium">{t.formTitle}</a>
              <a href="#calendar-table" className="text-gray-600 hover:text-red-600 transition-colors font-medium hidden sm:block">Chart</a>
              <Link
                href="/zh"
                className="bg-red-50 hover:bg-red-100 text-red-700 font-semibold px-3 py-1.5 rounded-lg transition-colors text-sm border border-red-200"
              >
                中文
              </Link>
            </div>
          </div>
        </nav>

        <header className="relative overflow-hidden pt-10 pb-4 px-4">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-3 mb-5 text-4xl">
              <span className="animate-float">🧧</span>
              <span className="animate-float-delay">🌸</span>
              <span className="animate-float">🧧</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-rose-500 mb-4 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">{t.heroSubtitle}</p>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 pb-20 space-y-16">
          <PredictorForm t={t} />
          <CalendarTable t={t} />
          <BackgroundSection t={t} />
          <FAQ t={t} />
        </div>

        <footer className="bg-gradient-to-r from-red-900 to-rose-800 text-white py-10 px-4 mt-10">
          <div className="max-w-4xl mx-auto text-center space-y-2">
            <div className="text-2xl mb-2">🏮</div>
            <p className="font-semibold text-lg">{t.siteName}</p>
            <p className="text-red-200 text-sm">{t.disclaimer}</p>
            <div className="pt-3 flex justify-center gap-4 text-sm text-red-300">
              <Link href="/" className="hover:text-white transition-colors">English</Link>
              <span>·</span>
              <Link href="/zh" className="hover:text-white transition-colors">中文</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
