'use client';

import { ZODIACS } from '@/lib/zodiacData';
import { Translations } from '@/lib/i18n';

interface ZodiacCardProps {
  conceptionYear: number;
  conceptionMonth: number;
  t: Translations;
}

export default function ZodiacCard({ conceptionYear, conceptionMonth, t }: ZodiacCardProps) {
  // A normal pregnancy implies birth is ~9-10 lunar months away. 
  // If conception is >= 4th lunar month, the baby will most likely be born in the next lunar year.
  let birthYear = conceptionYear;
  if (conceptionMonth >= 4) {
    birthYear += 1;
  }

  // Zodiac index calculation: Rat is 0, Ox is 1... Pig is 11
  // Formula based on Gregorian year alignment with lunar year (mostly correct for general use)
  // 1996 was Rat (index 0). So (year - 4) % 12 gives the correct index.
  const zodiacIndex = Math.abs((birthYear - 4) % 12);
  const zodiac = ZODIACS[zodiacIndex];

  const currentLocale = t.locale === 'zh' ? 'zh' : 'en';

  const preamble = {
    zh: '【故事背景】在远古时代，天地初定，万物尚未有序。玉皇大帝决定用十二种动物来代表年份，于是下令：凡是能在规定时间内到达天门的动物，便可入选生肖。',
    en: '【Background】In ancient times, the universe was just formed and lacked order. To represent the years, the Jade Emperor decreed that the first twelve animals to reach the Heavenly Gate within the time limit would be chosen as the Zodiac.'
  };

  return (
    <div className="mt-6 rounded-2xl shadow-2xl overflow-hidden animate-fadeIn bg-gradient-to-br from-indigo-50 to-purple-100 border-2 border-indigo-200">
      <div className="bg-indigo-600 px-6 py-4 flex justify-between items-center">
        <p className="text-white font-semibold text-sm tracking-wide uppercase opacity-90">
          {t.zodiacPredictionTitle}
        </p>
        <span className="text-indigo-200 text-xs">{birthYear}</span>
      </div>

      <div className="p-8">
        {/* Main Icon and Name */}
        <div className="flex flex-col items-center justify-center mb-8 transform transition-transform hover:scale-110 duration-500">
          <div className="text-8xl drop-shadow-md mb-4">{zodiac.icon}</div>
          <h3 className="text-3xl font-black text-indigo-900 tracking-tight">
            {zodiac.name[currentLocale]}
          </h3>
        </div>

        {/* Traits Section */}
        <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 mb-6 shadow-sm border border-white/50 hover:shadow-md transition-shadow">
          <h4 className="text-lg font-bold text-indigo-800 mb-4 flex items-center gap-2">
            <span>🧠</span> {t.zodiacTraitsTitle}
          </h4>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded shrink-0 w-24 md:w-28 text-center shadow-sm whitespace-nowrap overflow-hidden text-ellipsis">
                {t.zodiacPros}
              </span>
              <p className="text-gray-700 text-sm md:text-base py-0.5">{zodiac.traits.pos[currentLocale]}</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded shrink-0 w-24 md:w-28 text-center shadow-sm whitespace-nowrap overflow-hidden text-ellipsis">
                {t.zodiacCons}
              </span>
              <p className="text-gray-700 text-sm md:text-base py-0.5">{zodiac.traits.neg[currentLocale]}</p>
            </div>

            <div className="mt-4 pt-4 border-t border-indigo-100 flex flex-wrap gap-2">
              {zodiac.traits.keywords[currentLocale].split('、').map((keyword, idx) => (
                keyword.split(',').map((kw, i) => (
                  <span key={`${idx}-${i}`} className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1.5 rounded-full font-medium border border-indigo-200">
                    {kw.trim()}
                  </span>
                ))
              ))}
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-sm border border-white/50 hover:shadow-md transition-shadow">
          <h4 className="text-lg font-bold text-indigo-800 mb-3 flex items-center gap-2">
            <span>✨</span> {t.zodiacStoryTitle}
          </h4>
          <p className="text-gray-600 leading-relaxed text-sm italic mb-3 border-b border-indigo-100 pb-3">
            {preamble[currentLocale]}
          </p>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            {zodiac.story[currentLocale]}
          </p>
        </div>
      </div>
    </div>
  );
}
