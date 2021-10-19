module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "4-recipes",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "recipedata",
        fieldName: "recipedata",
        url: "https://api-us-east-1.graphcms.com/v2/ckux5nu6a0d3v01z00ya5hgk9/master"
      }
    }
  ],
};
