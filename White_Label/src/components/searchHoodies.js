import React, { Component } from "react"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import PostPreview from "./post_preview";
import { Link } from "gatsby"
import { connectHits } from 'react-instantsearch-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn, MDBMedia, MDBCardGroup } from "mdbreact";
import Pay from './post-icons';
import { StaticQuery, graphql } from "gatsby";
import Theme from '../data/theme.json';

const client = {
  sandbox:    'ATftPyYXzJIMmE5_djLhb3D2sY2neMhwG0ISH9hy1hnPMEo7QKjrb0vNHesbYrTGKYX7U-3fXAMyfcRL', 
  production: 'YOUR-PRODUCTION-APP-ID',
}

function stripHtml(html){
  // Create a new div element
  var temporalDivElement = document.createElement("div");
  // Set the HTML content with the providen
  temporalDivElement.innerHTML = html;
  // Retrieve the text property of the element (cross-browser support)
  return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

const maHits = ({ hits }) => (
    <div className="marow">        
    {hits.map(hit => (
    <div className="macolumn">
      <div className="macard">
        <MDBCard>
        <MDBContainer>    
        <MDBMedia className="p-4 bg-white">    
          <MDBMedia>
          <MDBCardImage className="img" src={hit.images[0].localFile.url} waves width="240" height="240"/>
          </MDBMedia>
  
          <MDBMedia body>
          <MDBCardBody>
            <MDBCardTitle key={hit.objectID}><Link style={{ boxShadow: `none`, textDecoration: "none", color: "#424242", fontSize: "30px", fontWeight: "bold"}} to={hit.slug}>{hit.name}</Link></MDBCardTitle>
            <MDBCardText className="text-truncate" key={hit.objectID}>
            <h3>{stripHtml(hit.description)}</h3>
            <hr/>
            {stripHtml(hit.short_description).substring(0,100) + " ..."}
            </MDBCardText>
            <MDBCardFooter>
              <span className="float-left black-text">{hit.sale_price}$ <span className="discount grey-text"><strike>{hit.regular_price}$</strike></span></span>
              <span className="float-right">
              <MDBTooltip placement="top">
                  <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 z-depth-0" >
                    <MDBIcon icon="heart"/>
                  </MDBBtn>
                  <div>Added to Wishlist</div>
                </MDBTooltip>
                <Pay post={hit}/>
              </span>
            </MDBCardFooter>
          </MDBCardBody>
          </MDBMedia>
          </MDBMedia>
          </MDBContainer>
        </MDBCard>
        </div>
      </div>
      ))}
  </div>
  );
  
  const maHits_2 = ({ hits }) => (
    <div className="marow2">
    {hits.map(hit => (
    <div className="macolumn2">
     <div className="macard2_hoodies">
      <MDBCard className="" cascade ecommerce>
            <MDBCardImage className="img-fluid"  src={hit.images[0].localFile.url} style={{marginLeft: "60px", height: "200px", width: "200px"}} waves />
            <MDBCardBody cascade className="text-center">
              <MDBCardTitle tag="h5" className="text-truncate">
                <Link style={{ boxShadow: `none`, textDecoration: "none", color: "#424242", fontSize: "30px", fontWeight: "bold"}} to={hit.slug}>{hit.name}</Link>
              </MDBCardTitle>
              <MDBCardText className="text-truncate" key={hit.objectID}>
              <h3>{stripHtml(hit.description) ? stripHtml(hit.description) : "No Description"}</h3>
              <hr/>
              {stripHtml(hit.short_description).substring(0,100) + " ..."}
            </MDBCardText>
            <MDBCardFooter>
                <span className="float-left black-text">{hit.sale_price}$ <span className="discount grey-text"><strike>{hit.regular_price}$</strike></span></span>
                <span className="float-right">
                <MDBTooltip placement="top">
                    <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 z-depth-0" >
                      <MDBIcon icon="heart"/>
                    </MDBBtn>
                    <div>Added to Wishlist</div>
                  </MDBTooltip>
                </span>
                <div style={{height: '55px'}}>
                <Pay post={hit}/>
                </div>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
      ))}
  </div>
  );

const CustomHits = connectHits(maHits);
const CustomHits_2 = connectHits(maHits_2);
const searchClient = algoliasearch('J83QHRQA0F', 'ab0c25c9542eaed2f2f3f4135811ead4');

const NoopComponent = () => {
    return <div />;
  };

  let searchHoodies = NoopComponent;

  if (typeof window !== "undefined") {
    searchHoodies = () => {
       return (
       <MDBContainer classname="d-md-flex">
                   <div className="overflow-auto position-absolute" style={{ marginLeft: "-550px", maxWidth: "100%", maxHeight: "51%", marginTop: '-250px' }}>
           <InstantSearch searchClient={searchClient} indexName="Jamstack_Gatsby_Hoodies">
       <SearchBox />
{(function() {
  if (Theme.theme == 1) {
    return (<CustomHits />);
  }
  else if (Theme.theme == 2) {
    return (<CustomHits_2 />);
  }
  else 
  {
    alert("out of it");
    return (<div/>);
  }
  })()}        
           </InstantSearch>
         </div>
         </MDBContainer>
         );
    };
  }
  
  export default searchHoodies;