'use client';

import { useState } from 'react';
import { Translations } from '@/lib/i18n';

export default function FAQ({ t }: { t: Translations }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq" className="w-full max-w-2xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">{t.faqTitle}</h2>
      <div className="space-y-3">
        {t.faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <span>{faq.q}</span>
              <span className={`ml-4 text-red-500 transition-transform duration-200 ${openIndex === i ? 'rotate-45' : ''}`}>＋</span>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
