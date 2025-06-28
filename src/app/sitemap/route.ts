import { type MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.com'; // عدّله لاحقًا
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/dune-part-two-box-office`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/making-of-furiosa`,
      lastModified: new Date().toISOString(),
    }
  ];
}
