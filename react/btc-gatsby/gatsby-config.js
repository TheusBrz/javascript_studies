/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const siteMetadata = require('./config/metadata');

module.exports = {
  /* Your site config here */
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat`,
        short_name: `Rocketseat`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#7259c1`,
        display: `standalone`,
        icon: `src/assets/icon.png`
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#7159c1`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-987654321", // Fictional ID
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production' ,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
