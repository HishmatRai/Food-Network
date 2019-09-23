import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import Chips from './../Chips/Chips'
const EcommercePage = (props) => {
  return (
    <section className="text-center my-5">

     
      <MDBRow style={{margin:"0 auto"}}>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://www.pizzahut.com.pk/p_h_logo.png"
                className="img-fluid"
                alt=""
                onClick={() => props.path.push('/resdetail')}
              />
              <div className="stripe dark">
              <span style={{color:"#d70f64",fontWeight:"bold"}}>*** Food Network ***</span>

              <Chips />
            
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://www.pizzahut.com.pk/p_h_logo.png"
                className="img-fluid"
                alt=""
                onClick={() => props.path.push('/resdetail')}
         
              />
              <div className="stripe dark">
              <span style={{color:"#d70f64",fontWeight:"bold"}}>*** Food Network ***</span>
        
                <Chips />
                 
            
              </div>
            </div>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://www.pizzahut.com.pk/p_h_logo.png"
                className="img-fluid"
                alt=""
                onClick={() => props.path.push('/resdetail')}
              
              />
              <div className="stripe dark">
              <span style={{color:"#d70f64",fontWeight:"bold"}}>*** Food Network ***</span>

              <Chips />
                
              </div>
            </div>
          </MDBCard>
        </MDBCol>


        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://www.pizzahut.com.pk/p_h_logo.png"
                className="img-fluid"
                alt=""
                onClick={() => props.path.push('/resdetail')}
           
              />
              <div className="stripe dark">
              <span style={{color:"#d70f64",fontWeight:"bold"}}>*** Food Network ***</span>
              <Chips />
              
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default EcommercePage;