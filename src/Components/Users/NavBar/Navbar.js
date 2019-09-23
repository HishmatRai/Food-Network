import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { IoIosLogOut } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { IoMdHome } from "react-icons/io";

import { BrowserRouter as Router } from 'react-router-dom';

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
        <MDBNavbar style={{ backgroundColor: "#d70f64" }} dark expand="md">
          {/* <MDBNavbarBrand> */}

          <img src="https://images-eu.ssl-images-amazon.com/images/I/712H4HqY7EL.png" width="60px" height="50px" />
          {/* </MDBNavbarBrand> */}
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>





            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" onClick={() => this.props.path.push('/userdashboard')}>

                  <IoMdHome />

                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" onClick={() => this.props.path.push('/userprofile')}>
                  <IoMdPersonAdd />
                </MDBNavLink>
              </MDBNavItem>


              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <IoIosLogOut />
                </MDBNavLink>
              </MDBNavItem>

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;