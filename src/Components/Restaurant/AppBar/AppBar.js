import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar style={{backgroundColor:"#d70f64"}} dark expand="md">
        {/* <MDBNavbarBrand> */}
        <img src="https://images-eu.ssl-images-amazon.com/images/I/712H4HqY7EL.png" width="60px" height="50px" />
         
       
        {/* </MDBNavbarBrand> */}
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
          <MDBNavItem>
              <MDBNavLink onClick={() => this.props.path.push('/restaurantdashboard')} >Dashboard</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink onClick={() => this.props.path.push('/restaurantprofile')} >Profile</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink onClick={() => this.props.path.push('/addcategory')} >Add Category</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink onClick={() => this.props.path.push('/addproduct')} >Add Product</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink onClick={() => this.props.path.push('/login')} ><IoIosLogOut/>Logout </MDBNavLink>
            </MDBNavItem>
        
          </MDBNavbarNav>
      
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;