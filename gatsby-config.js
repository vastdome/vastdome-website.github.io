module.exports = {
  siteMetadata: {
    title: 'Vastdome',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#226dc2',
        showSpinner: false,
      },
    },
  ],
};
