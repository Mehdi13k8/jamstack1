/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.production`,
})

const myQueryfilterbaskets = `
{
  allWcProducts(filter: {categories: {elemMatch: {name: {eq: "Baskets"}}}}) {
    edges {
      node {
        id
        name
        wordpress_id
        stock_status
        slug
        sale_price
        regular_price
        images {
          localFile {
            url
          }
        }
        description
        categories {
          name
        }
        short_description
      }
    }
  }
}
`;
const myQueryfilterhoodies = `
{
  allWcProducts(filter: {categories: {elemMatch: {name: {eq: "Veste"}}}}) {
    edges {
      node {
        id
        name
        wordpress_id
        stock_status
        slug
        sale_price
        regular_price
        images {
          localFile {
            url
          }
        }
        description
        categories {
          name
        }
        short_description
      }
    }
  }
}
`;
const myQueryfilterjeans = `
{
  allWcProducts(filter: {categories: {elemMatch: {name: {eq: "Jeans"}}}}) {
    edges {
      node {
        id
        name
        wordpress_id
        stock_status
        slug
        sale_price
        regular_price
        images {
          localFile {
            url
          }
        }
        description
        categories {
          name
        }
        short_description
      }
    }
  }
}
`;
const myQuery = `
{
  allWcProducts {
    edges {
      node {
        id
        name
        wordpress_id
        stock_status
        slug
        sale_price
        regular_price
        images {
          localFile {
            url
          }
        }
        description
        categories {
          name
        }
        short_description
      }
    }
  }
}
`;

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.allWcProducts.edges.map(({ node }) => node), // optional
    indexName: 'Jamstack_Gatsby', // overrides main index name, optional
  },
  {
    query: myQueryfilterbaskets,
    transformer: ({ data }) => data.allWcProducts.edges.map(({ node }) => node), // optional
    indexName: 'Jamstack_Gatsby_Baskets', // overrides main index name, optional
  },
  {
    query: myQueryfilterhoodies,
    transformer: ({ data }) => data.allWcProducts.edges.map(({ node }) => node), // optional
    indexName: 'Jamstack_Gatsby_Hoodies', // overrides main index name, optional
  },
  {
    query: myQueryfilterjeans,
    transformer: ({ data }) => data.allWcProducts.edges.map(({ node }) => node), // optional
    indexName: 'Jamstack_Gatsby_Jeans', // overrides main index name, optional
  },
];

module.exports = {
  siteMetadata: {
    title: `gatsby-example-using-markdown-pages`,
    description: `Start your new blog using markdown files`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'www.mehdi-rhoulam.me/Jamstack/wordpress',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: true,
        auth: {
          htaccess_user: "admin",
          htaccess_pass: "root",
          htaccess_sendImmediately: false
        }
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: '@pasdo501/gatsby-source-woocommerce',
      options: {
       // Base URL of Wordpress site
        api: 'www.mehdi-rhoulam.me/Jamstack/wordpress',
        // true if using https. otherwise false.
        https: false,
        api_keys: {
          consumer_key: 'ck_42981d186853e18e4d5c762ef5540cc83da40ede',
          consumer_secret: 'cs_453d9678a3a7d421918d733f0de8888b18773b2e',
        },
        fields: ['products', 'products/categories'],
        api_version: 'wc/v3',
        per_page: 10
      }
    },
  ],
}
