import React from 'react';
import NavBar from './../../../Components/Users/NavBar/Navbar'
import ResDetailForm from './../../../Components/Users/Res_Detail_Form/ResDetailForm'
import Paper from '@material-ui/core/Paper';
import BackImg from './../../../Components/Users/Background_Image/BackgroundImg'
import Footer from './../../../Components/Footer/Footer'
import Chat from './../../../Components/Chat'

export default class ResDetail extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:"#eae9e7"}}>
                    <NavBar path={this.props.history} />
                    <BackImg />
                    {/* <Paper style={{width:"90%",margin:"0 auto"}}> */}

<ResDetailForm />
                    {/* </Paper> */}
                    <Chat />
<Footer />
            </div>
        )
    }
}