import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
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
import "./ResSignUp.css";
import firebaseApp from "./../../../Config/Firebase/Firebase";
import {signupRes} from './../../../Store/action'
import {connect} from 'react-redux'

class ResSignUp extends React.Component {
  constructor(){
    super();
    this.state={
        name:"",
        email:"",
        city:"",
        password:"",
        conpassword:"",
        file:""
    }
}
imageFunc = async (e) => {
    console.log(e.target.files[0])
    let imagename = e.target.files[0].name
    let ref = firebaseApp.storage().ref('/').child("image/" + imagename)
    await ref.put(e.target.files[0])
    ref.getDownloadURL().then(url =>{
        console.log(url)
      this.setState({
        file: url,

      })
    }
    )
    .catch((error)=>{
        console.log(error)
    })
  }
  signUp=()=>{
    if(this.state.password===this.state.conpassword){
    this.props.signupRes(this.state,this.props.history)
    
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
                          label="Restaurant name"
                          icon="user"
                          validate
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
                          label="City name"
                          icon="city"
                          type="text"
                          onChange={(e)=>this.setState({city:e.target.value})}
                        />

                             <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          icon="file"
                          type="file"
                          onChange={(e)=>this.imageFunc(e)}
                        />


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
                          <MDBBtn color="pink" onClick={()=>this.signUp()}>Sign Up</MDBBtn>
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
      signupRes:(data,frwd)=>dispatch(signupRes(data,frwd)),
  }
}


export default connect(mapStateToProps,mapDispatchToProps) (ResSignUp);
