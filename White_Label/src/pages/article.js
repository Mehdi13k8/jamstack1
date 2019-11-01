import React, { Component } from "react"
import { /*Link, */graphql } from "gatsby"
import Layout from "../components/layout"
import Search from "../components/search"


class Article extends Component {
    render() {
      const data = this.props.data
      //const postpage = data.allWordpressPage.edges
      return (
        <Layout>
         <Search/>
        </Layout>
      )
    }
  }
  
export default Article
