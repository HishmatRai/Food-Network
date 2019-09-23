import React, { Component } from 'react';
// import './App.css';
import scrollToComponent from 'react-scroll-to-component';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer } from "mdbreact";
class App extends React.Component {
 
  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }
 
  render() {
    return (
      <div className='main' >
                    <div style={{width:"90%",margin:"0 auto",marginTop:"0px"}}>
      
        <div className='button_group' style={{margin:"0 auto",textAlign:"center"}}>
          <button style={{border:"none",color:"white",backgroundColor:"#d70f64",border:"3px solid white"}} onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500})}>BUBBLES</button>
          <button style={{border:"none",color:"white",backgroundColor:"#d70f64",border:"3px solid white"}} onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})}>BURGER</button>
          <button style={{border:"none",color:"white",backgroundColor:"#d70f64",border:"3px solid white"}} onClick={() => scrollToComponent(this.Violet, { offset: -200, align: 'middle', duration: 1500, ease:'inCirc'})}>CHINESE</button>
          <button style={{border:"none",color:"white",backgroundColor:"#d70f64",border:"3px solid white"}} onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'middle', duration: 500, ease:'inExpo'})}>PIZZA</button>
          <button style={{border:"none",color:"white",backgroundColor:"#d70f64",border:"3px solid white"}} onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500, ease:'inCirc'})}>SHAWARMA ROLL</button>
          <button style={{border:"none",color:"white",backgroundColor:"#d70f64",border:"3px solid white"}} onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 500, ease:'inCirc'})}>BIRYANI</button>
          <button style={{border:"none",color:"white",backgroundColor:"#d70f64",border:"3px solid white"}} onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'bottom', duration: 500})}>FISH FRY</button>
        </div>
        </div>
<br />
      
<Paper style={{width:"95%",margin:"0 auto",padding:"2%"}}>

        <section className='violet' ref={(section) => { this.Violet = section; }}>
        <MDBRow className="mb-4">
     <p style={{textAlign:"center",margin:"0 auto",color:"#d70f64",fontWeight:"bold"}}>--- BUBBLES ---</p>
   
    </MDBRow>
    <Paper style={{ width: "90%", margin: "0 auto", marginTop: "20px" }}>


<MDBRow className="mb-4">


    <MDBCol sm="3">
        <MDBCard style={{ marginBottom: "10px" }}>

            <MDBCardTitle>
                <img src='https://www.pizzahut.com.pk/p_h_logo.png' width="100%" />
                <Paper>


                </Paper>
            </MDBCardTitle>

        </MDBCard>
    </MDBCol>



    <MDBCol sm="9">
        <MDBCardBody>

            <MDBCardText>


                <h6 style={{ color: "#d70f64", fontSize: '18px' }}>
                    <p> <strong>*** BUBBLES ***</strong></p>
                    <p> <strong>Free </strong>delivery</p>
                    <p>PKR <strong> 150</strong></p>
                </h6>
                <center>

                    <Button style={{ backgroundColor: "#d70f64", color: "white" }}>Order Now</Button>
                </center>

            </MDBCardText>
        </MDBCardBody>
    </MDBCol>

</MDBRow>


</Paper>
        </section>
</Paper>
<br />

        {/* <============================================== ===========================================> */}
        <Paper style={{width:"95%",margin:"0 auto",padding:"2%"}}>
        <section className='Violet' ref={(section) => { this.Indigo = section; }}>
        <MDBRow className="mb-4">
     <p style={{textAlign:"center",margin:"0 auto",color:"#d70f64",fontWeight:"bold"}}>--- BURGER ---</p>
   
    </MDBRow>
    <Paper style={{ width: "90%", margin: "0 auto", marginTop: "20px" }}>


<MDBRow className="mb-4">


    <MDBCol sm="3">
        <MDBCard style={{ marginBottom: "10px" }}>

            <MDBCardTitle>
                <img src='https://www.pizzahut.com.pk/p_h_logo.png' width="100%" />
                <Paper>


                </Paper>
            </MDBCardTitle>

        </MDBCard>
    </MDBCol>



    <MDBCol sm="9">
        <MDBCardBody>

            <MDBCardText>


                <h6 style={{ color: "#d70f64", fontSize: '18px' }}>
                    <p> <strong>*** BURGER ***</strong></p>
                    <p> <strong>Free </strong>delivery</p>
                    <p>PKR <strong> 200</strong></p>
                </h6>
                <center>

                    <Button style={{ backgroundColor: "#d70f64", color: "white" }}>Order Now</Button>
                </center>

            </MDBCardText>
        </MDBCardBody>
    </MDBCol>

</MDBRow>


</Paper>
    
        </section>
        </Paper>
        {/* <============================================== ===========================================> */}
        <br />

        <Paper style={{width:"95%",margin:"0 auto",padding:"2%"}}>

        <section className='Violet' ref={(section) => { this.Blue = section; }}>
        <MDBRow className="mb-4">
     <p style={{textAlign:"center",margin:"0 auto",color:"#d70f64",fontWeight:"bold"}}>--- CHINESE ---</p>
   
    </MDBRow>
    
    <Paper style={{ width: "90%", margin: "0 auto", marginTop: "20px" }}>


<MDBRow className="mb-4">


    <MDBCol sm="3">
        <MDBCard style={{ marginBottom: "10px" }}>

            <MDBCardTitle>
                <img src='https://www.pizzahut.com.pk/p_h_logo.png' width="100%" />
                <Paper>


                </Paper>
            </MDBCardTitle>

        </MDBCard>
    </MDBCol>



    <MDBCol sm="9">
        <MDBCardBody>

            <MDBCardText>


                <h6 style={{ color: "#d70f64", fontSize: '18px' }}>
                    <p> <strong>*** CHINESE *** </strong></p>
                    <p> <strong>Free </strong>delivery</p>
                    <p>PKR <strong> 2000</strong></p>
                </h6>
                <center>

                    <Button style={{ backgroundColor: "#d70f64", color: "white" }}>Order Now</Button>
                </center>

            </MDBCardText>
        </MDBCardBody>
    </MDBCol>

</MDBRow>


</Paper>
        </section>
        </Paper>
        {/* <============================================== ===========================================> */}
<br />
<Paper style={{width:"95%",margin:"0 auto",padding:"2%"}}>
        <section className='Violet' ref={(section) => { this.Green = section; }}>
        <MDBRow className="mb-4">
     <p style={{textAlign:"center",margin:"0 auto",color:"#d70f64",fontWeight:"bold"}}>--- PIZZA ---</p>
   
    </MDBRow>
    <Paper style={{ width: "90%", margin: "0 auto", marginTop: "20px" }}>


<MDBRow className="mb-4">


    <MDBCol sm="3">
        <MDBCard style={{ marginBottom: "10px" }}>

            <MDBCardTitle>
                <img src='https://www.pizzahut.com.pk/p_h_logo.png' width="100%" />
                <Paper>


                </Paper>
            </MDBCardTitle>

        </MDBCard>
    </MDBCol>



    <MDBCol sm="9">
        <MDBCardBody>

            <MDBCardText>


                <h6 style={{ color: "#d70f64", fontSize: '18px' }}>
                    <p> <strong>*** PIZZA *** </strong></p>
                    <p> <strong>Free </strong>delivery</p>
                    <p>PKR <strong> 800</strong></p>
                </h6>
                <center>

                    <Button style={{ backgroundColor: "#d70f64", color: "white" }}>Order Now</Button>
                </center>

            </MDBCardText>
        </MDBCardBody>
    </MDBCol>

</MDBRow>


</Paper>
        </section>
        </Paper>
        {/* <============================================== ===========================================> */}
        <br />
<Paper style={{width:"95%",margin:"0 auto",padding:"2%"}}>
        <section className='Violet' ref={(section) => { this.Yellow = section; }}>
        <MDBRow className="mb-4">
     <p style={{textAlign:"center",margin:"0 auto",color:"#d70f64",fontWeight:"bold"}}>--- SHAWARMA ROLL ---</p>
   
    </MDBRow>
    <Paper style={{ width: "90%", margin: "0 auto", marginTop: "20px" }}>


<MDBRow className="mb-4">


    <MDBCol sm="3">
        <MDBCard style={{ marginBottom: "10px" }}>

            <MDBCardTitle>
                <img src='https://www.pizzahut.com.pk/p_h_logo.png' width="100%" />
                <Paper>


                </Paper>
            </MDBCardTitle>

        </MDBCard>
    </MDBCol>



    <MDBCol sm="9">
        <MDBCardBody>

            <MDBCardText>


                <h6 style={{ color: "#d70f64", fontSize: '18px' }}>
                    <p> <strong>*** SHAWARMA ROLL *** </strong></p>
                    <p> <strong>Free </strong>delivery</p>
                    <p>PKR <strong> 600</strong></p>
                </h6>
                <center>

                    <Button style={{ backgroundColor: "#d70f64", color: "white" }}>Order Now</Button>
                </center>

            </MDBCardText>
        </MDBCardBody>
    </MDBCol>

</MDBRow>


</Paper>
        </section>
        </Paper>
        {/* <============================================== ===========================================> */}
        <br />
<Paper style={{width:"95%",margin:"0 auto",padding:"2%"}}>
        <section className='Violet' ref={(section) => { this.Orange = section; }}>
        <MDBRow className="mb-4">
     <p style={{textAlign:"center",margin:"0 auto",color:"#d70f64",fontWeight:"bold"}}>--- BIRYANI ---</p>
   
    </MDBRow>
    <Paper style={{ width: "90%", margin: "0 auto", marginTop: "20px" }}>


<MDBRow className="mb-4">


    <MDBCol sm="3">
        <MDBCard style={{ marginBottom: "10px" }}>

            <MDBCardTitle>
                <img src='https://www.pizzahut.com.pk/p_h_logo.png' width="100%" />
                <Paper>


                </Paper>
            </MDBCardTitle>

        </MDBCard>
    </MDBCol>



    <MDBCol sm="9">
        <MDBCardBody>

            <MDBCardText>


                <h6 style={{ color: "#d70f64", fontSize: '18px' }}>
                    <p> <strong>*** BIRYANI *** </strong></p>
                    <p> <strong>Free </strong>delivery</p>
                    <p>PKR <strong> 200</strong></p>
                </h6>
                <center>

                    <Button style={{ backgroundColor: "#d70f64", color: "white" }}>Order Now</Button>
                </center>

            </MDBCardText>
        </MDBCardBody>
    </MDBCol>

</MDBRow>


</Paper>
        </section>
        </Paper>
        {/* <============================================== ===========================================> */}
        <br />
<Paper style={{width:"95%",margin:"0 auto",padding:"2%"}}>
        <section className='Violet' ref={(section) => { this.Red = section; }}>
        <MDBRow className="mb-4">
     <p style={{textAlign:"center",margin:"0 auto",color:"#d70f64",fontWeight:"bold"}}>--- FISH FRY ---</p>
   
    </MDBRow>
    <Paper style={{ width: "90%", margin: "0 auto", marginTop: "20px" }}>


<MDBRow className="mb-4">


    <MDBCol sm="3">
        <MDBCard style={{ marginBottom: "10px" }}>

            <MDBCardTitle>
                <img src='https://www.pizzahut.com.pk/p_h_logo.png' width="100%" />
                <Paper>


                </Paper>
            </MDBCardTitle>

        </MDBCard>
    </MDBCol>



    <MDBCol sm="9">
        <MDBCardBody>

            <MDBCardText>


                <h6 style={{ color: "#d70f64", fontSize: '18px' }}>
                    <p> <strong>*** Zinger Burger*** </strong></p>
                    <p> <strong>Free </strong>delivery</p>
                    <p>PKR <strong> 200</strong></p>
                </h6>
                <center>

                    <Button style={{ backgroundColor: "#d70f64", color: "white" }}>Order Now</Button>
                </center>

            </MDBCardText>
        </MDBCardBody>
    </MDBCol>

</MDBRow>


</Paper>
        </section>
        </Paper>

      </div>
    )
  }
}
 
export default App;