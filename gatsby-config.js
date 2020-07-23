module.exports = {
  siteMetadata: {
    title: `RHIANNAN.ONLINE`,
    description: `My personal site where I do personal things.`,
    author: `Rhiannan Berry`,
  },
  plugins: [
    'gatsby-plugin-catch-links',
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal:false,
              maxWidth: 960,
              quality: 100
            },
          },
          `gatsby-remark-numbered-footnotes`,
          {
            resolve: `gatsby-remark-footnotes`,
            options: {
              footnoteBackRefPreviousElementDisplay: "inline",
              footnoteBackRefDisplay: "inline",
              footnoteBackRefInnerText: "^", // Defaults to: "↩"
              //use if you want the Wikipedia style ^ link without an underline beneath it
              footnoteBackRefAnchorStyle: `text-decoration: none;`,
              //use "front" for Wikipedia style ^ links
              footnoteBackRefInnerTextStartPosition: "front",
              useFootnoteMarkerText: false // Defaults to false
            }
          },
          
          {
            resolve: "gatsby-remark-component",
            options: { components: ["collapsible-box"] }
          },
          'gatsby-remark-containers'
          
          
        ], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RHIANNAN.ONLINE`,
        short_name: `RHIANNAN`,
        start_url: `/`,
        background_color: `#aebcfe`,
        theme_color: `#6a65ff`,
        display: `minimal-ui`,
        icon: `src/images/website-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
