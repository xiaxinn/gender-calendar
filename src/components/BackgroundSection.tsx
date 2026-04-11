import { Translations } from '@/lib/i18n';

interface Props {
  t: Translations;
}

export default function BackgroundSection({ t }: Props) {
  return (
    <section
      id="background"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-rose-50 to-red-50 border border-red-100 shadow-sm p-8 md:p-12"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-8 -right-8 w-48 h-48 bg-red-200 rounded-full opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-amber-200 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="relative">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">📜</span>
          <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-rose-500">
            {t.backgroundTitle}
          </h2>
        </div>

        {/* Divider */}
        <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-amber-400 rounded-full mb-8" />

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
          <p>{t.backgroundP1}</p>
          <p>{t.backgroundP2}</p>
        </div>

        {/* Key terms pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {t.backgroundTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 border border-red-200 hover:bg-red-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
