import { OGImageRoute } from 'astro-og-canvas';

import { getCollection } from 'astro:content';

const posts = await getCollection('posts', ({ data }) => !data.draft);

const pages = Object.fromEntries(
  posts.map(({ id, data }) => [
    id,
    { title: data.title, description: data.description, tags: data.tags },
  ])
);

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: async (_, { title, description, tags }) => {
    const tagsString = tags && tags.length > 0 ? `\n\n${tags.join(' • ').toUpperCase()}` : '';
    return {
      title,
      description: `devsiva003.github.io${tagsString}\n\n${description || ''}`,
      bgGradient: [
        [15, 15, 15], // --color-bg (dark)
        [15, 15, 15], // --color-bg-alt (dark)
      ],
      bgImage: {
        path: './public/og-grid.svg',
        fit: 'none',
      },
      padding: 80,
      border: { color: [255, 107, 53], width: 20, side: 'inline-start' }, // --color-primary
      logo: {
        path: './public/favicon.svg',
        size: [80],
      },
      font: {
        title: {
          families: ['Space Mono', 'sans-serif'],
          weight: 'Bold',
          size: 72,
          color: [250, 250, 250],
        },
        description: {
          families: ['Inter', 'sans-serif'],
          weight: 'Normal',
          size: 30,
          color: [163, 163, 163],
          lineHeight: 1.6,
        },
      },
    };
  },
});
