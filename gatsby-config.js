module.exports = {
  siteMetadata: {
    title: "JIA Technolgy",
    author: "Sherin Joy",
    description: "A technology company that exceeds it's expectation"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/jiatechlogo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'jiatechdemo'
      },
  },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
