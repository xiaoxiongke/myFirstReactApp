module.exports = {
  siteMetadata: {
    title: 'Design+Code3',
    description:'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords:'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: ['gatsby-plugin-react-helmet',
  {
    resolve:'gatsby-source-contentful',
    options:{
      spaceId:'h3onvcuitr5h',
      accessToken:'fd58612308c6b269dd3ba4addaebd2c60988d59a1be76cfd07826b09cdf59ad5'
    }
  }
  ],
}
