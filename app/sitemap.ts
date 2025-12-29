import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://tulsitours.com', lastModified: new Date() },
    { url: 'https://tulsitours.com/about', lastModified: new Date() },
    { url: 'https://tulsitours.com/packages', lastModified: new Date() },
    { url: 'https://tulsitours.com/rent-car', lastModified: new Date() },
    { url: 'https://tulsitours.com/contact', lastModified: new Date() },
  ]
}