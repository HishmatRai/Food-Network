import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import ButtonA from '@material-ui/core/Button'

export default class DialogDemo extends Component {
        
    constructor() {
        super();
        this.state = {visible: false};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }

    render() {
        const footer = (
            <div>
                {/* <Button label="Yes" icon="pi pi-check" onClick={this.onHide} /> */}
                <Button label="No" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary" />
            </div>
        );
console.log(this.props)
        return (
            <div>
           

                <div className="content-section implementation">
                    <Dialog header="Select Category" visible={this.state.visible} style={{width: '50vw'}} footer={footer} onHide={this.onHide} maximizable>
                     <ButtonA style={{backgroundColor:"#d70f64",color:"white",width:"100%"}} onClick={()=>this.props.path.push('/usersignup')}>
    User
</ButtonA>
 <br />
 <br />

<ButtonA style={{backgroundColor:"#d70f64",color:"white",width:"100%"}} onClick={()=>this.props.path.push('/ressignup')}>
 restaurant
 </ButtonA></Dialog>

                    <Button style={{backgroundColor:"#d70f64",width:"100%"}} label="Sign Up" icon="pi pi-external-link" onClick={this.onClick} />
                </div>
            </div>
        )
    }
}