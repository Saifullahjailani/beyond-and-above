import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `beyondandabove.org`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
              "gatsby-transformer-json",  
              'gatsby-plugin-image',
              `gatsby-transformer-sharp`, 
              `gatsby-plugin-sharp`,
              "gatsby-plugin-styled-components",
              'gatsby-transformer-remark',
              {
                resolve: `gatsby-source-filesystem`,
                options: {
                  name: `videos`,
                  // Path to the directory
                  path: `${__dirname}/src/assets/videos`,
                },
              },
              {
                resolve: 'gatsby-source-filesystem',
                options: {
                  name: 'curriculum-pages',
                  path: `${__dirname}/src/assets/markdown`,
                },
              },
              {
                resolve: `gatsby-source-filesystem`,
                options: {
                  name: `images`,
                  path: `${__dirname}/src/assets/images`,
                },
              }
            ]
};


export default config;
