import React from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from './../../../Components/Restaurant/AppBar/AppBar'
import ResCategory from './../../../Components/Restaurant/Res_Category/ResCategory'
import Button from '@material-ui/core/Button';
import Footer from './../../../Components/Footer/Footer'
import Chat from './../../../Components/Chat'

// import Chat from './../../../Components/Chat'
export default class AddCategory extends React.Component{
    render(){
        return(
            <div>
<AppBar path={this.props.history}/>

<Paper style={{width:"90%",margin:"0 auto",marginTop:"5%"}}>
<p style={{fontWeight:"bold",textAlign:"center",fontSize:"30px",color:"#d70f64"}}>

    Add Category
    {/* <Chat /> */}
</p>

<ResCategory /> 
<br />
<center>

<Button style={{backgroundColor:"#d70f64",color:"white",padding:"5px",width:"20%"}}>Submit</Button>
</center>
<br />
</Paper>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<Chat />
<Footer />

            </div>
        )
    }
}