import React from 'react';
import NavBar from './../../../Components/Users/NavBar/Navbar'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Footer from './../../../Components/Footer/Footer'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer } from "mdbreact"
import Chat from './../../../Components/Chat'
export default class UserProfile extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: "#eaeae" }}>
                <NavBar path={this.props.history} />
                <Paper style={{ width: "90%", margin: "0 auto" }}>
                    <p style={{ fontWeight: "bold", textAlign: "center", color: "#d70f64", fontSize: "30px" }}>
                        User Profile
        </p>
                </Paper>

                <Paper style={{ width: "90%", margin: "0 auto", marginTop: "20px" }}>


                    <MDBRow className="mb-4">


                        <MDBCol sm="3">
                            <MDBCard style={{ marginBottom: "10px" }}>

                                <MDBCardTitle>
                                    <img src='https://www.pizzahut.com.pk/p_h_logo.png' width="100%"  />
                                    <Paper>


                                    </Paper>
                                </MDBCardTitle>

                            </MDBCard>
                        </MDBCol>



                        <MDBCol sm="9">
                            <MDBCardBody>

                                <MDBCardText>


                                    <h6 style={{ color: "#d70f64", fontSize: '18px' }}>
                                        <p>Name : <strong>Hishmat Rai</strong></p>
                                        <p>Email : <strong>hihshmat@gmail.com</strong></p>
                                        <p>City : <strong>Mithi</strong></p>
                                    </h6>
                                    <center>

                                        <Button style={{ backgroundColor: "#d70f64", color: "white" }}>Edit Profile</Button>
                                    </center>

                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>

                    </MDBRow>


                </Paper>
                <Chat />
<Footer />
            </div>
        )
    }
}


