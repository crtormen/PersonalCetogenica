module.exports = {
  siteMetadata: {
    title: `Método Esbelta`,
    description: `Método Online de Emagrecimento`,
    owner: 'Charline Tormen',
    author: `@crtormen`,
    siteUrl: `https://metodoesbelta.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          // placeholder: `dominantColor`,
          quality: 70,
          // backgroundColor: `transparent`
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Método Esbelta`,
        short_name: `esbelta`,
        start_url: `/`,
        background_color: `#FF663c`,
        theme_color: `#FF663c`,
        display: `minimal-ui`,
        icon: 'src/images/favicon.ico'
      },
    },    
    // "gatsby-plugin-anchor-links",
    // `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: 'GTM-NJGNK3K',
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    },
    `gatsby-plugin-perf-budgets`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
        disable: true,
      },
    },
    // { 
    //   resolve: "gatsby-plugin-preconnect",
    //   options: {
    //     domains: [
    //       "https://www.google-analytics.com",
    //       "https://www.googletagmanager.com",
    //       "https://www.facebook.com"
    //     ],
    //   },
    // },
    // `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
