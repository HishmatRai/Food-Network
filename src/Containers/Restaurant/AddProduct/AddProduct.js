import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import AppBar from './../../../Components/Restaurant/AppBar/AppBar'
import Paper from '@material-ui/core/Paper';
import firebaseApp from './../../../Config/Firebase/Firebase';
import Footer from './../../../Components/Footer/Footer'
import Chat from './../../../Components/Chat'

class AddProduct extends React.Component {
  
  state = {
    pname: "",
    price: "",
    proImg : ""
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  imageFunc = async (e) => {
    console.log(e.target.files[0])
    let imagename = e.target.files[0].name
    let ref = firebaseApp.storage().ref('/').child("ProductImg/" + imagename)
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


  render() {
    return (
      <div>
          <AppBar path={this.props.history} />
           <Paper style={{width:"90%",margin:"0 auto",padding:"2%",marginTop:"5%"}}>
 <p style={{fontWeight:"bold",textAlign:"center",fontSize:"30px",color:"#d70f64"}}>

     Add Product
 </p>


        <form>
          <MDBRow>
            <MDBCol md="6" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
              
                style={{color:"#d70f64"}}
              >
                Product Name :
              </label>
              <input
                value={this.state.pname}
                name="pname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Product Name"
                required
              />
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                style={{color:"#d70f64"}}
              >
               Product Price :
              </label>
              <input
                value={this.state.price}
                name="price"
                onChange={this.changeHandler}
                type="number"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Product Price"
                required
              />
            </MDBCol>
            <MDBCol md="12" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                style={{color:"#d70f64"}}
              >
                Product Image :
              </label>
              <input
                value={this.state.email}
                onChange={this.changeHandler}
                type="file"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="file"
                onChange={(e)=>this.imageFunc(e)}
            
              />
            </MDBCol>
          </MDBRow>
       
          <center>

          <MDBBtn color="pink" type="submit" >
            Submit data
          </MDBBtn>
          </center>


        </form>
        </Paper><br />
        <Chat />
        <Footer />
      </div>
    );
  }
}

export default AddProduct;