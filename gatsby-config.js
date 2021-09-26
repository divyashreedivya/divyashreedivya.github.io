module.exports = {
    plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-react-helmet`,
        {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'Portfolio',
          short_name: 'Portfolio',
          start_url: '/',
          background_color: '#f7f0eb',
          theme_color: '#a2466c',
          display: 'standalone',
          icon: 'src/images/logo.svg',
          theme_color_in_head: false
        },
      }
    ],
  }