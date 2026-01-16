import { profile, socials } from './profile';

export const siteConfig = {
  name: profile.name,
  title: `${profile.name} | Portfolio`,
  description: profile.tagline,
  url: 'https://devsiva003.github.io',
  ogImage: '/og-image.png',
  locale: 'en_US',
  author: {
    name: profile.name,
    email: profile.email,
    jobTitle: 'Full Stack Engineer',
  },
  // Social links for sameAs in Person schema
  sameAs: socials.map((s) => s.url),
} as const;
