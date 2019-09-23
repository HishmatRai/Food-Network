import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBCardBody, MDBCard } from 'mdbreact';
import Button from '@material-ui/core/Button';

class EmailVerification extends Component {
    state = {
        modal14: true
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render() {
        return (
            <MDBContainer>
                <MDBCard style={{ margin: "auto", width: '90%', marginTop: '100px' }}>
                    <MDBCardBody className="mx-4">
                        <center>
                            <img src="http://kudoscasino.com/wp-content/uploads/2017/07/verify-your-email.png"  />
                            <p><b> Please Verify Your Email Address</b></p>
                            <p>We noticed your email address has not been verified.
                              By doing so, you will receive important form notifications and information about your account.
                             <br /><br />
                             The email for your account is 
                             <strong style={{color:"#d70f64"}}>

                             :  * hishmatrai@gmail.com *
                             </strong>
                            </p>
                       
                       <Button style={{backgroundColor:"#d70f64",color:"white"}}>

                            Resend your email 
                       </Button>
                       </center>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        );
    }
}

export default EmailVerification;