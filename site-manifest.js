/**
 * Maxime
 * Config file to simplify site creation
 */

// type Social = 'twitter' | 'linkedin' | 'facebook' | 'github' | 'instagram' | 'youtube' | 'soundcloud' | 'vimeo';
// interface SiteManifest {
//     name: string;
//     title: string;
//     author: string;
//     authorMail: string;
//     titleTemplate: string;
//     description: string;
//     url: string;
//     siteUrl: string;
//     keywords: string;
//     socialLinks: Record<Social, string>
//     pwa: {
//         name: string;
//         short_name: string;
//         background_color: string;
//         theme_color: string;
//     };
//     spin: {
//         color: string;
//     };
//     robots: {
//         host: string;
//         sitemap: string;
//       };
// };

// export const siteManifest: SiteManifest = {
  module.exports = {
  name: `Maxime Touroute Portfolio`,
  title: `Maxime's Portfolio`,
  author: 'Maxime Touroute',
  authorMail: 'maxime.touroute@gmail.com',
  // %s for pageName
  titleTemplate: '%s · Maxime Touroute',
  // Not too long for google snippet !
  description:
    'Maxime Touroute · Audiovisual Arts Engineer · Portfolio · Cinematography, Photography, Digital Arts, Software Engineering.',
  // for robots plugin, No trailing slash allowed!
  url: 'https://maximetouroute.github.io',
  siteUrl: 'https://maximetouroute.github.io',
  // separated by comas
  keywords:
    'cinematography, photography, digital arts, maxime touroute, portfolio, visual arts, paris, lyon, french artist',

  socialLinks: {
    twitter: '//twitter.com/MaximeTouroute',
    facebook: '//facebook.com/maxime.touroute',
    github: '//github.com/maximetouroute',
    instagram: '//instagram.com/maximetouroute',
    vimeo: '//vimeo.com/maximetouroute',
    youtube: '',
    soundcloud: '',
    linkedin: '',
  },

  pwa: {
    name: `Maxime Touroute Portfolio`,
    short_name: `Maxime's Portfolio`,
    background_color: `#d6d0cd`,
    theme_color: '#ffffff',
  },

  spin: {
    color: '#ffffff',
  },

  robots: {
    host: 'https://maximetouroute.github.io',
    sitemap: 'https://maximetouroute.github.io/sitemap-0.xml',
  },
};
