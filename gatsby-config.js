/* eslint-disable no-undef */
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Delicious Wines`,
    description: `Pick up the largest variety of wines from all over the world.`,
    author: `Piotr Grzymowicz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        injectPageProps: false,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-xml`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat :300,400,700 `],
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        components: path.join(__dirname, `src/components`),
        styles: path.join(__dirname, `src/styles`),
        userContext: path.join(__dirname, `src/context/UserContext`),
        cartContext: path.join(__dirname, `src/context/CartContext`),
        utils: path.join(__dirname, `src/utils`),
        consts: path.join(__dirname, `src/consts`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
