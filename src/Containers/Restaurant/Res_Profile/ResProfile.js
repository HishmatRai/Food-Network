import React from 'react';
import AppBar from './../../../Components/Restaurant/AppBar/AppBar'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Footer from './../../../Components/Footer/Footer'
import Chat from './../../../Components/Chat'

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer } from "mdbreact"
export default class RestaurantProfile extends React.Component {
    render() {

        return (
            <div>
                <AppBar path={this.props.history} />

                <Paper style={{ width: "90%", margin: "0 auto" }}>
                    <p style={{ fontWeight: "bold", textAlign: "center", color: "#d70f64", fontSize: "30px" }}>Restaurant Profile</p>
                </Paper>



                <Paper style={{ width: "90%", margin: "0 auto", marginTop: "20px" }}>


                    <MDBRow className="mb-4">


                        <MDBCol sm="3">
                            <MDBCard style={{ marginBottom: "10px" }}>

                                <MDBCardTitle>
                                    <img src='https://media.timeout.com/images/105239239/image.jpg' width="100%" />
                                    <Paper>


                                    </Paper>
                                </MDBCardTitle>

                            </MDBCard>
                        </MDBCol>



                        <MDBCol sm="9">
                            <MDBCardBody>

                                <MDBCardText>


                                    <h6 style={{ color: "#d70f64", fontSize: '18px' }}>
                                        <p>R.Name : <strong>Food Network</strong></p>
                                        <p>Email : <strong>foodnetwork@gmail.com</strong></p>
                                        <p>City : <strong>Karachi</strong></p>
                                    </h6>
                                    <center>

                                        <Button style={{ backgroundColor: "#d70f64", color: "white" }}>Edit Profile</Button>
                                    </center>

                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>

                    </MDBRow>


                </Paper>
                <br />
                <br />
                <br />
                <Chat />
<Footer/>
            </div>
        )
    }
}



