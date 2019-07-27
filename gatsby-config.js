module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'revive - fast & configurable linter for Go'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'markdown-pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Revive Docs',
        short_name: 'Revive',
        start_url: '/',
        background_color: '#1A4E72',
        theme_color: '#1A4E72',
        display: 'minimal-ui'
      }
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-128392643-1'
      }
    },
    {
      resolve: 'gatsby-plugin-guess-js',
      options: {
        GAViewID: '184230484',
        jwt: {
          client_email: process.env.GA_SERVICE_ACCOUNT,
          private_key: process.env.GA_SERVICE_ACCOUNT_KEY
        },
        minimumThreshold: 0.03,
        // The "period" for fetching analytic data.
        period: {
          startDate: new Date(new Date().getTime() - 604800000),
          endDate: new Date()
        }
      }
    }
  ]
};
