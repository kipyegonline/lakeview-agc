/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.lakeviewagc.net`,
    title: `Lakeview Africa Gospel Church website `,
    description: `Lakeview AGC-Section 58, website`,
    author: `@kipyegonline`,
  },
  plugins: ["gatsby-plugin-postcss",{
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#ccc`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/favecon.png`, // This path is relative to the root of the site.
    },
  },],
}
