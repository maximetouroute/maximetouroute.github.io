/**
 * Maxime
 * Config file to simplify site creation
 */

// type Social = 'twitter' | 'linkedin' | 'facebook' | 'github' | 'instagram' | 'youtube' | 'soundcloud' | 'vimeo' | 'tiktok';
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
  name: `Reveality`,
  title: `Reveality Website`,
  author: 'Reveality',
  authorMail: 'contact@reveality.io',
  // %s for pageName
  titleTemplate: '%s · Reveality',
  // Not too long for google snippet !
  description:
    'Reveality is a toolbox for artists and cultural institutions to create Augmented Reality experiences',
  // for robots plugin, No trailing slash allowed!
  url: 'https://reveality.io',
  siteUrl: 'https://reveality.io',
  // separated by comas
  keywords:
    'augmented reality, mixed reality, XR, immersive art, digital art, audiovisual, video, mobile application, app',

  socialLinks: {
    twitter: '//twitter.com/revealityAR/',
    facebook: '//facebook.com/revealityAR/',
    github: '',
    instagram: '//instagram.com/revealityAR/',
    vimeo: '',
    youtube: '',
    soundcloud: '',
    linkedin: '//linkedin.com/company/reveality/',
    tiktok: '//tiktok.com/@revealityar',
  },

  pwa: {
    name: `Reveality Website`,
    short_name: `Reveality Site`,
    background_color: `#FCF9E8`,
    theme_color: `#649DE5`,
  },

  spin: {
    color: `#649DE5`,
  },

  robots: {
    host: 'https://reveality.io',
    sitemap: 'https://reveality.io/sitemap-0.xml',
  },
}
