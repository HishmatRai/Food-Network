import React from "react";
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
  MDBAnimation,
  MDBInputGroup,
} from "mdbreact";

import "./UserSignUp.css";
import {connect} from 'react-redux'
import {signupUser} from './../../../Store/action'
class ResSignUp extends React.Component {
  constructor(){
    super();
    this.state={
      name:"",
      email:"",
      age:"",
      gender:"",
      city:"",
      password:"",
      conpassword:""


    }
  }
  
    getGender=(gender)=>{
   console.log(gender)
   this.setState({
     gender:gender
   })

    }
    signUp=()=>{
      if(this.state.password===this.state.conpassword){
      this.props.signupUser(this.state,this.props.history)
    }
    else{
      alert("password is different")
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
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
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

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Register:
                        </h3>
                        <hr className="hr-light" />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Full name"
                          icon="user"
                          onChange={(e)=>this.setState({name:e.target.value})}

                        />
                      
                       
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your email"
                          icon="envelope"
                          onChange={(e)=>this.setState({email:e.target.value})}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your password"
                          icon="lock"
                          type="password"
                          onChange={(e)=>this.setState({password:e.target.value})}
                        />

                              <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="re password"
                          icon="lock"
                          type="password"
                          onChange={(e)=>this.setState({conpassword:e.target.value})}
                        />
                        
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Age"
                          icon="user"
                          type="text"
                          onChange={(e)=>this.setState({age:e.target.value})}
                        />


<MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="City name"
                          icon="city"
                          type="text"
                          onChange={(e)=>this.setState({city:e.target.value})}    
                        />

<MDBContainer>
        <MDBInputGroup
    
          inputs={
            
            <select className="browser-default custom-select">
              <option value="0">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          }
        />
      </MDBContainer>
                     
<br />

      <MDBContainer>
        <MDBInputGroup
        
          inputs={
            
            <select className="browser-default custom-select">
              <option value="0">Select Country</option>
              <option value="pakistan">Pakistan</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="china">China</option>
              <option value="dubai">Dubai</option>
              <option value="afghanistan">Afghanistan</option>
              <option value="canada">Canada</option>
              <option value="germany">Germany</option>
              <option value="iraq">Iraq</option>
              <option value="indonesia">Indonesia</option>
              <option value="japan">Japan</option>
              <option value="malaysia">Malaysia</option>
              <option value="nepal">Nepal</option>
              <option value="new lealand">New Zealand</option>
              <option value="south africa">South Africa</option>
              <option value="turkey">Turkey</option>
            </select>
          }
        />
      </MDBContainer>



                        <div className="text-center mt-4 black-text">
                          <MDBBtn color="pink"   onClick={()=>this.signUp()}>Sign Up</MDBBtn>
                          <hr className="hr-light" />
                        
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
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
   signupUser:(data,path)=>dispatch(signupUser(data,path)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (ResSignUp);