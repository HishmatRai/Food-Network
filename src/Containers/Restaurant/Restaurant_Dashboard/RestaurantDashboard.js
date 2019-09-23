import React from 'react';
import AppBar from './../../../Components/Restaurant/AppBar/AppBar'
import RestaurantOrder from './../../../Components/Restaurant/Restaurant_Order/RestaurantOrder'
import Footer from './../../../Components/Footer/Footer'
import Chat from './../../../Components/Chat'

export default class RestaurantDashboard extends React.Component{
    render(){
      
        return(
            <div>
 <AppBar path={this.props.history}/>
 <RestaurantOrder />
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
<Chat />
<Footer/>
            </div>
        )
    }
}