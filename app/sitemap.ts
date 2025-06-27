import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.mode-ai.co/',
      lastModified: new Date('2025-06-26'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://www.mode-ai.co/about',
      lastModified: new Date('2025-06-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.mode-ai.co/services',
      lastModified: new Date('2025-06-20'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.mode-ai.co/contact',
      lastModified: new Date('2025-06-22'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.mode-ai.co/blog',
      lastModified: new Date('2025-06-24'),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]
} 