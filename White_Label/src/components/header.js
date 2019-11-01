import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component, useState, Fragment } from "react";
import {Helmet} from "react-helmet";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBFormInline, MDBNav } from 'mdbreact';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBIcon } from "mdbreact";
import { MDBDropdown, MDBDropdownToggle, MDBBtn, MDBBtnGroup, MDBDropdownMenu, MDBDropdownItem, MDBMedia } from "mdbreact";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { MDBCol, MDBRow, MDBFooter } from "mdbreact";

import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Pay from './post-icons';
import logo from '../images/logo.png';
import Search from './search';
import SearchBaskets from './searchBaskets';
import SearchJeans from './searchJeans';
import SearchHoodies from './searchHoodies'; 
import PostLink from './post-icons';
import { MDBAnimation } from "mdbreact";
import Theme from '../data/theme.json';


// Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

const client = {
  sandbox:    'ATftPyYXzJIMmE5_djLhb3D2sY2neMhwG0ISH9hy1hnPMEo7QKjrb0vNHesbYrTGKYX7U-3fXAMyfcRL', 
  production: 'YOUR-PRODUCTION-APP-ID',
}


/*InstantSearch searchClient={searchClient} indexName="Jamstack_Gatsby">
  <SearchBox />
    <Hits hitComponent={PostPreview} />
    </InstantSearch>);
    <PaypalExpressBtn client={client} currency={'EUR'} total={1.00} />;
*/


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }


  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
  
    const mystyle = {
      marginTop: "10px",
      marginLeft: "36px",
    };

    const mystyle2 = {
      marginLeft: "-100px",
    };

    const url = false;
    let appenddata;
    if (url == false) {
      if (window.location.pathname.substring(window.location.pathname.indexOf("#")+1) == "/") {
        if (Theme.theme == 1) {  
          appenddata =                                    
                      <div style={{marginTop: "-250px"}}>
                      <MDBAnimation type="tada" count={2} duration="1s"> <img className="img-fluid" src={logo}  width="350px" alt="Logo" /> </MDBAnimation>
                      <h1 style={{color: "white", fontSize: "30px", fontWeight: "bold"}}>Beauty Native</h1>
                      <p style={{color: "white", fontSize: "30px"}}>We are the new style</p>
                      </div>;

        } else if (Theme.theme == 2){
          appenddata= 
                         <MDBContainer>
                         <MDBCol style={{marginBottom: "200px"}}>
                         <MDBCard style={{visibility: "hidden"}} >
                           <MDBContainer>
                           <MDBMedia >
                             <MDBMedia style={{marginBottom: "100px"}}>
                             <MDBAnimation type="tada" count={2} duration="1s" > <img className="img-fluid" src={logo}  width="350px" alt="Logo" /> </MDBAnimation>
                             </MDBMedia>
                     
                             <MDBMedia body style={{marginTop: "115px"}}>
                             <MDBCardBody>
                               <MDBCardTitle style={{visibility: "visible"}}> <h1 style={{ boxShadow: `none`, color: "#ffab40", fontSize: "30px", fontWeight: "bold"}}> Beauty Native </h1> </MDBCardTitle>
                               <MDBCardText className="text-truncate" style={{visibility: "visible", color: "#ffab40", fontSize: "30px"}}>
                               <p>We are the new style</p>
                               </MDBCardText>
                             </MDBCardBody>
                             </MDBMedia>
                             </MDBMedia>
                             </MDBContainer>
                           </MDBCard>
                           </MDBCol>
                           </MDBContainer>
        } else {
          alert("theme is not found");
        }
        ;

      }
      else if (window.location.pathname == "/about/") {
        appenddata = <div>
                          <h1 style={{marginBottom: '250px', fontSize: "50px", fontWeight: "bold"}}> About us </h1>
                          <div style={{marginTop: "-100px"}}>
                          <h4> We create looks designed by in-house talent that's made to equip millenial women with the fashion they need for all elements of their life.</h4>
                          <h4> And since our aim is all about empowerment, we make it easy for everyone by making our product affordable. Its not just fast fashion - its rapid fashion.</h4>
                          <h4> We drop up to 1000 brand new styles every week, working constantly to bring our babes the freshest pieces, put together in wearable ready-to-go outfits.</h4>
                          </div>
                    </div>;
      }
      else {

        if (window.location.pathname == "/article/" && window.location.hash.substr(1) == "") {
          appenddata =   <MDBContainer>      <MDBRow center> <Search /> </MDBRow> </MDBContainer>;
        } 
        else if(window.location.pathname == "/article/" && (window.location.hash.substr(1) == "j/" || window.location.hash.substr(1) == "/j")) {
          appenddata = <div><SearchJeans/></div>;
        }
        else if(window.location.pathname == "/article/" && (window.location.hash.substr(1) == "h/" || window.location.hash.substr(1) == "/h")) {
          appenddata = <div><SearchHoodies/></div>;
        }
        else if(window.location.pathname == "/article/" && (window.location.hash.substr(1) == "b/" || window.location.hash.substr(1) == "/b")) {
          appenddata = <div><SearchBaskets/></div>;
        }
        else {
          console.log(this.props.greeting);
          // je suis dans article templates
          appenddata = (<div className="">
          <MDBCard className="m-2" style={{ width: "auto" }} cascade ecommerce>
          <MDBCardImage style={{height: "480px", width: '460px'}} src={this.props.greeting.data.images[0].localFile.url} waves />
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle tag="h5">
              Shoes
            </MDBCardTitle>
            <MDBCardTitle>
              <a href="#!"><strong>{this.props.greeting.data.title}</strong></a>
            </MDBCardTitle>
            <MDBCardText>
              {this.props.greeting.data.content}
            </MDBCardText>
            <MDBCardFooter>
              <span className="float-left black-text">{this.props.greeting.data.sale_price}$ <span className="discount grey-text"><strike>{this.props.greeting.data.regular_price}$</strike></span></span>
              <span className="float-right">
              <MDBTooltip placement="top">
                  <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 z-depth-0" >
                    <MDBIcon icon="heart"/>
                  </MDBBtn>
                  <div>Added to Wishlist</div>
                </MDBTooltip>
                <Pay post={this.props.greeting}/>
              </span>
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
          </div>);
        }
      }
    }

    return (
      <div>
        <header>
          <Router>
          <MDBNavbar color="morpheus-den-gradient" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/"><Link to="/"><img src={logo} width="40%" alt="Logo" /></Link>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
             

    <MDBDropdown>
      <MDBBtn  href="/" to="/" gradient="juicy-peach"> Home </MDBBtn>
    </MDBDropdown>


<MDBNavItem>
<MDBDropdown>
<MDBBtnGroup>
      <MDBBtn  href="/article/" gradient="warm-flame">
        Shop
      </MDBBtn>
        <MDBDropdownToggle caret gradient="lady-lips" />
        <MDBDropdownMenu className="dropdown-default">
        <MDBDropdownItem href="#"><Link to="/article/">All</Link></MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem href="#"><Link to="/article/#j/">Jeans</Link></MDBDropdownItem>
                <MDBDropdownItem href="#"><Link to="/article/#h/">Hoddies for hoodys</Link></MDBDropdownItem>
                <MDBDropdownItem href="#"><Link to="/article/#b/">Baskets</Link></MDBDropdownItem>
        </MDBDropdownMenu>
    </MDBBtnGroup>
    </MDBDropdown>
    </MDBNavItem>
            <MDBNavItem>  
          <MDBBtnGroup>
        <MDBBtn href="/about/" to="/about/" gradient="mean-fruit">
                      About us
                 </MDBBtn>
                  </MDBBtnGroup>
                  </MDBNavItem>

                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
          </header>
<body>
            <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center" ref>
                  {appenddata}
            </MDBMask>
          </MDBView>

  </body>


         <MDBFooter color="mdb-color darken-2" className="font-small lighten-3 pt-4 mt-n4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="my-4">
          <MDBCol md="4" lg="4">
            <h5  style={mystyle2} className="text-uppercase mb-4 font-weight-bold"> Beauty Native </h5>
            <iframe style={mystyle2} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.69392836004!2d5.397054889258335!3d43.29973099714969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf608db01c5d%3A0x30f14148a4ff274b!2s61%20Rue%20Marx%20Dormoy%2C%2013004%20Marseille!5e0!3m2!1sfr!2sfr!4v1571225056737!5m2!1sfr!2sfr" width="400" height="300" frameborder="0" allowfullscreen=""></iframe>
          </MDBCol>

          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" lg="2" className="ml-auto">
            <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
            <ul className="list-unstyled">
              <p> <a href="/article/">SHOP</a> </p>
              <p> <a href="/article/#j/">JEANS</a> </p>
              <p> <a href="/article/#h/">HODDIES FOR HOODYS</a> </p>
              <p> <a href="/article/#b/">BASKETS</a> </p>
              <p> <a href="/about/">ABOUT US</a> </p>
            </ul>
          </MDBCol>

          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="5" lg="3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
            <p> <i className="fa fa-home mr-3" /> 61 Rue Marx Dormoy, Marseille </p>
            <p> <i className="fa fa-envelope mr-3" /> beauty_native@company.com  </p>
            <p> <a href="tel:04 91 76 80 43"> <i className="fa fa-phone mr-3" /> + 33 4 91 76 80 43 </a></p>
            <p> <i className="fa fa-print mr-3" /> + 33 4 91 76 80 44  </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" lg="2" className="text-center">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Follow us
            </h5>
            <MDBRow className="pb-3">
          <MDBCol style={mystyle} md="12">
            <div className="mb-5 flex-center">
              <a className="fb-ic" href="https://www.facebook.com"> <i className="fab fa-facebook-f fa-lg white-text mr-md-4"> </i> </a>
              <a className="tw-ic" href="https://twitter.com/?lang=fr"> <i className="fab fa-twitter fa-lg white-text mr-md-4"> </i> </a>
              <a className="li-ic" href="http://www.linkedin.com/"> <i className="fab fa-linkedin-in fa-lg white-text mr-md-4"> </i> </a>
              <a className="ins-ic" href="https://www.instagram.com/?hl=fr"> <i className="fab fa-instagram fa-lg white-text mr-md-4"> </i> </a>
              <a className="pin-ic" href="https://www.pinterest.fr/"> <i className="fab fa-pinterest fa-lg white-text"> </i> </a>
            </div>
          </MDBCol>
        </MDBRow>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a> Mehdi & Bryan </a>
        </MDBContainer>
      </div>
    </MDBFooter>
      </div>
      )
    }
}

export default Header;
