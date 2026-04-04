'use client';

import { useState } from 'react';
import { predictGender, MIN_LUNAR_AGE, MAX_LUNAR_AGE, Gender } from '@/lib/genderCalendar';
import { Translations } from '@/lib/i18n';

interface PredictorFormProps {
  t: Translations;
}

export default function PredictorForm({ t }: PredictorFormProps) {
  const [lunarAge, setLunarAge] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [result, setResult] = useState<Gender | null>(null);
  const handlePredict = () => {
    if (!lunarAge || !month) return;
    try {
      const gender = predictGender(Number(lunarAge), Number(month));
      setResult(gender);
      setTimeout(() => {
        document.getElementById('result-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } catch {
      setResult(null);
    }
  };

  const isReady = lunarAge !== '' && month !== '';

  return (
    <section id="predictor" className="w-full max-w-2xl mx-auto">
      {/* Form Card */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-red-100 overflow-hidden">
        <div className="bg-gradient-to-r from-red-600 to-rose-500 px-6 py-5">
          <h2 className="text-2xl font-bold text-white text-center">{t.formTitle}</h2>
        </div>

        <div className="p-6 space-y-5">
          {/* Lunar Age */}
          <div>
            <label htmlFor="lunar-age" className="block text-sm font-semibold text-gray-700 mb-1.5">
              {t.labelLunarAge} <span className="text-xs text-gray-400 font-normal ml-1">{t.labelLunarAgeHint}</span>
            </label>
            <select
              id="lunar-age"
              value={lunarAge}
              onChange={(e) => { setLunarAge(e.target.value); setResult(null); }}
              className="w-full rounded-xl border-2 border-gray-200 py-3 px-4 text-gray-800 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-100 transition-all bg-white"
            >
              <option value="">{t.placeholderLunarAge}</option>
              {Array.from({ length: MAX_LUNAR_AGE - MIN_LUNAR_AGE + 1 }, (_, i) => {
                const age = MIN_LUNAR_AGE + i;
                return (
                  <option key={age} value={age}>
                    {age} {t.ageUnit}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Month */}
          <div>
            <label htmlFor="conception-month" className="block text-sm font-semibold text-gray-700 mb-1.5">
              {t.labelMonth}
            </label>
            <select
              id="conception-month"
              value={month}
              onChange={(e) => { setMonth(e.target.value); setResult(null); }}
              className="w-full rounded-xl border-2 border-gray-200 py-3 px-4 text-gray-800 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-100 transition-all bg-white"
            >
              <option value="">{t.placeholderMonth}</option>
              {t.monthFull.map((name, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}. {name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <button
            type="button"
            onClick={handlePredict}
            disabled={!isReady}
            id="predict-btn"
            className={`w-full py-4 rounded-xl text-lg font-bold transition-all duration-200 shadow-lg ${isReady
              ? 'bg-gradient-to-r from-red-600 to-rose-500 text-white hover:from-red-700 hover:to-rose-600 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
          >
            {t.btnPredict}
          </button>
        </div>
      </div>

      {/* Result Card */}
      {result && (
        <div
          id="result-card"
          className={`mt-6 rounded-2xl shadow-2xl overflow-hidden animate-fadeIn ${result === 'boy'
            ? 'bg-gradient-to-br from-blue-50 to-sky-100 border-2 border-blue-200'
            : 'bg-gradient-to-br from-pink-50 to-rose-100 border-2 border-pink-200'
            }`}
        >
          <div className={`px-6 py-4 ${result === 'boy' ? 'bg-blue-500' : 'bg-pink-500'}`}>
            <p className="text-center text-white font-semibold text-sm tracking-wide uppercase opacity-90">
              {t.resultPredictionLabel}
            </p>
          </div>
          <div className="p-8 text-center">
            <div className="text-7xl mb-4 animate-bounce-slow">
              {result === 'boy' ? '👦' : '👧'}
            </div>
            <div
              className={`text-4xl font-black mb-2 ${result === 'boy' ? 'text-blue-600' : 'text-pink-600'
                }`}
            >
              {result === 'boy' ? t.resultBoy : t.resultGirl}
            </div>
            <p className="text-sm text-gray-500 mt-3">{t.resultConfidence}</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="line-through text-gray-300">─────</span>
              <span className={`text-xs font-medium ${result === 'boy' ? 'text-blue-400' : 'text-pink-400'}`}>
                {lunarAge}{t.ageUnit} × {t.monthShort[Number(month) - 1]}
              </span>
              <span className="line-through text-gray-300">─────</span>
            </div>
          </div>
          <div className="px-6 pb-5">
            <p className="text-xs text-gray-500 text-center leading-relaxed">{t.disclaimer}</p>
          </div>
        </div>
      )}
    </section>
  );
}
