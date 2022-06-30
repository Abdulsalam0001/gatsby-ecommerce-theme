module.exports = {
  siteMetadata: {
    title: `Masters Of Arts`,
    siteUrl: `https://mastersofarts.com.ng`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Masters Of Arts`,
        short_name: `MOA`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
