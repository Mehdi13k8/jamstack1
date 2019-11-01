const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
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
`)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWcProducts } = result.data


   const pageTemplatearticle = path.resolve(`./src/templates/article.js`)
   allWcProducts.edges.forEach(edge => {
     createPage({
       path: `/${edge.node.slug}/`,
       component: slash(pageTemplatearticle),
       context: {
         id: edge.node.id,
       },
     })
   })
}
