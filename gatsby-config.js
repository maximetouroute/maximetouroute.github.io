module.exports = {
  siteMetadata: {
    siteName: `Maxime Touroute Portfolio`,
    title: `Maxime's Portfolio`,
    author: 'Maxime Touroute',
    authorMail: 'maxime.touroute@gmail.com',
    titleTemplate: '%s · Maxime Touroute',
    description:
      'Maxime Touroute · Audiovisual Arts Engineer · Portfolio · Cinematography, Photography, Digital Arts, Software Engineering. ',
    url: 'https://maximetouroute.github.io', // No trailing slash allowed!
    siteUrl: 'https://maximetouroute.github.io', // for robots plugin
    // Those must be in the res folder
    favicon: '/res/favicon.png', // Little icon on your browser tab, expected PNG
    thumbImage: '/res/thumbImage.jpg', // Image shown on embed link previews, expected JPG
    keywords:
      'cinematography, photography, digital arts, maxime touroute, portfolio, visual arts', // separated by comas

    /* to hide the icon, put an empty string instead of a link */
    socialLinks: {
      twitter: '//twitter.com/MaximeTouroute',
      facebook: '//facebook.com/maxime.touroute',
      github: '//github.com/maximetouroute',
      instagram: '//instagram.com/maximetouroute',
      vimeo: '//vimeo.com/maximetouroute',
      youtube: '',
      soundcloud: '',
    },
  },

  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',

      options: {
        icon: true,
      },
    },

    {
      resolve: `gatsby-source-ical`,
      options: {
        name: `events`,
        url: `https://calendar.google.com/calendar/ical/rod4537o03duvj8s8sdrfd221o%40group.calendar.google.com/public/basic.ics`,
      },
    },

    'gatsby-plugin-offline',
    `gatsby-plugin-catch-links`,

    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1920,
              quality: 85,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin: 0`,
            },
          },

          {
            resolve: 'gatsby-remark-copy-linked-files',
          },
        ], // just in case those previously mentioned remark plugins sound cool :)
      },
    },

    `gatsby-plugin-sharp`, // For res processing
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maxime Touroute Portfolio`,
        short_name: `Maxime Portfolio`,
        start_url: `/`,
        background_color: `#d6d0cd`,
        theme_color: `#363636`,
        display: `minimal-ui`,
        icon: `src/res/favicon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://maximetouroute.github.io',
        sitemap: 'https://maximetouroute.github.io/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-sitemap`,

    // Amazing loading progress bar on top of website
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#3568cf`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
}
