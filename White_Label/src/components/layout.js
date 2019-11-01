import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
//import "./layout.css"

const NoopComponent = () => {
  return <div />;
};
let Layout = NoopComponent;
if (typeof window !== "undefined") { 
  Layout = ({data}) => {
    if (window.location.pathname.split("/").pop()[0] == "/about/") {
      const myproptemp = {data};
      const greeting = 'Welcome to React';
      return <Header/>; 
    } else {
    const myproptemp = {data};
    const greeting = 'Welcome to React';
    return <Header greeting={myproptemp} />;
    }
  };
}

export default Layout;