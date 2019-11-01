import React, { Component } from "react"
import { graphql } from "gatsby"
import PostIcons from "../components/post-icons"
import Layout from "../components/layout"

class pageTemplatearticle extends Component {
  render() {
    const data = this.props.data.wcProducts

    return (
      <Layout data={data}/>
    )
  }
}

export default pageTemplatearticle

export const pageQuery = graphql`
query($id: String!) {
  wcProducts(id: { eq: $id }) {
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
  }
  }
`