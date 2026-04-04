import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chinese-gender-calendar.net';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          'en': baseUrl,
          'zh-CN': `${baseUrl}/zh`,
        },
      },
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'en': baseUrl,
          'zh-CN': `${baseUrl}/zh`,
        },
      },
    },
  ];
}
