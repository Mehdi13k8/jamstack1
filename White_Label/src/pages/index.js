import React, { Component, useState } from "react"
import { /*Link, */graphql } from "gatsby"
//import { FaRegClock } from "react-icons/fa"
import PostPreview from "../components/post_preview"
import Layout from "../components/layout"
import { node } from "prop-types"


class Home extends Component {
  
  render() {
    const data = this.props.data
    //const postpage = data.allWordpressPage.edges
    return (
      <Layout>
        {/*{postpage.map(({ node }) => {
          return (
            <PostPreview key={node.slug} post={node} />
          )
        })}*/}
      </Layout>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allSitePage {
      edges {
        node {
          component
          path
          componentChunkName
          internal {
            type
            contentDigest
            owner
          }
        }
      }
    }
  }
`