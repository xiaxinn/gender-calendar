'use client';

import { useMemo, useState } from 'react';
import { getFullCalendar, MIN_LUNAR_AGE } from '@/lib/genderCalendar';
import { Translations } from '@/lib/i18n';

interface CalendarTableProps {
  t: Translations;
  highlightAge?: number;
  highlightMonth?: number;
}

export default function CalendarTable({ t, highlightAge, highlightMonth }: CalendarTableProps) {
  const [hoveredAge, setHoveredAge] = useState<number | null>(null);
  const [hoveredMonth, setHoveredMonth] = useState<number | null>(null);

  const calendar = useMemo(() => getFullCalendar(), []);

  return (
    <section id="calendar-table" className="w-full max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">{t.tableTitle}</h2>
      <p className="text-center text-gray-500 text-sm mb-6">
        <span className="inline-flex items-center gap-1.5 mr-4">
          <span className="inline-block w-4 h-4 rounded bg-sky-400"></span>
          {t.boyLabel}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block w-4 h-4 rounded bg-pink-400"></span>
          {t.girlLabel}
        </span>
      </p>
      <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-100">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-red-600 to-rose-500">
              <th className="sticky left-0 z-10 bg-red-700 text-white font-semibold px-3 py-3 text-center whitespace-nowrap min-w-[70px]">
                {t.tableAgeLabel}
              </th>
              {t.monthShort.map((m, i) => (
                <th
                  key={i}
                  className={`text-white font-semibold px-2 py-3 text-center min-w-[52px] whitespace-nowrap transition-colors ${
                    hoveredMonth === i + 1 || highlightMonth === i + 1 ? 'bg-yellow-400/40' : ''
                  }`}
                >
                  {m}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendar.map((row, ageIndex) => {
              const age = ageIndex + MIN_LUNAR_AGE;
              const isHighlightedRow = highlightAge === age || hoveredAge === age;
              return (
                <tr
                  key={age}
                  onMouseEnter={() => setHoveredAge(age)}
                  onMouseLeave={() => setHoveredAge(null)}
                  className={`transition-colors ${isHighlightedRow ? 'bg-amber-50' : ageIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className={`sticky left-0 z-10 font-bold text-center px-3 py-2.5 border-r border-gray-200 whitespace-nowrap transition-colors ${
                    isHighlightedRow ? 'bg-amber-100 text-red-700' : ageIndex % 2 === 0 ? 'bg-white text-gray-700' : 'bg-gray-50 text-gray-700'
                  }`}>
                    {age}{t.ageUnit}
                  </td>
                  {row.map((gender, monthIndex) => {
                    const month = monthIndex + 1;
                    const isHighlight = highlightAge === age && highlightMonth === month;
                    const isHoverHighlight = (hoveredAge === age || hoveredMonth === month);
                    return (
                      <td
                        key={month}
                        onMouseEnter={() => setHoveredMonth(month)}
                        onMouseLeave={() => setHoveredMonth(null)}
                        className={`text-center px-2 py-2.5 font-semibold text-xs transition-all ${
                          isHighlight
                            ? 'ring-2 ring-yellow-400 ring-inset scale-105 z-20 relative'
                            : ''
                        } ${
                          gender === 'boy'
                            ? isHoverHighlight || isHighlight
                              ? 'bg-sky-300 text-sky-900'
                              : 'bg-sky-100 text-sky-700'
                            : isHoverHighlight || isHighlight
                            ? 'bg-pink-300 text-pink-900'
                            : 'bg-pink-100 text-pink-700'
                        }`}
                      >
                        {gender === 'boy' ? t.boyLabel : t.girlLabel}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
