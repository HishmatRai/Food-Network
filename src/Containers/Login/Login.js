import React from "react";
import './login.css'
import { BrowserRouter as Router } from "react-router-dom";
import Category from './../../Components/Category/Category'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import {connect} from 'react-redux';
import {LoginAll} from './../../Store/action'
class Login extends React.Component {
  constructor(){
    super();
    this.state={
      email:"",
      password:""
    }
    }
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
  
    return (
      <div id="classicformpage">
     

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
      
                          <hr className="hr-light" />
              <center>

                  <span className="h1-responsive font-weight-bold" style={{textAlign:"center"}}>
                    
                   <span>
          <img src="https://images-eu.ssl-images-amazon.com/images/I/712H4HqY7EL.png" width="50px" height="50px" />

                   </span>
                   Food Network
                  </span>
              </center>
                  <hr className="hr-light" />
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4" >
                  <MDBAnimation type="fadeInRight" delay=".3s" >
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> LOG IN
                          
                        </h3>
                        <hr className="hr-light" />
                     
                    
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your email"
                          icon="envelope"
                          onChange={(e)=>this.setState({email:e.target.value})}

                        />
                     
                        <MDBInput
                          className="red-text"
                          iconClass="white-text"
                          label="Your password"
                          icon="lock"
                          type="password"
                          onChange={(e)=>this.setState({password:e.target.value})}

                        />
                 
                        <div className="text-center mt-4 black-text" >
                          <MDBBtn  color="pink"
                                            onClick={()=>this.props.LoginAll(this.state,this.props.history)}

                          >lOG in</MDBBtn>
                          <hr className="hr-light" />
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>


                 
                   <Category path={this.props.history}/>
               



                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>


      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    state:state
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    LoginAll:(data,pathlog)=>dispatch(LoginAll(data,pathlog))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);