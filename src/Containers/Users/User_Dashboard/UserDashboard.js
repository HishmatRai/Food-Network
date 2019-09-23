import React from 'react';
import Tabs from './../../../Components/Users/Tabs/Tabs';
import NavBar from './../../../Components/Users/NavBar/Navbar'
import Footer from './../../../Components/Footer/Footer'
import Chat from './../../../Components/Chat'
export default class UserDashboard extends React.Component{
    render(){
        return(
            <div>
                    <NavBar path={this.props.history} />
<Tabs path={this.props.history}  />
<Chat />
<Footer />

            </div>
        )
    }
}