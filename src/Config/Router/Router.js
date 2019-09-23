import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import {
    Login,
    ResSignUp,
    UserDashboard,
    RestaurantDashboard,
    AddProduct,
    UserSignUp,
    RestaurantProfile,
    AddCategory,
    UserProfile,
    ResDetail,
    EmailVerification
} from './../../Containers/index'


export default  class BasicRouter extends React.Component{
    render(){
  return(
      <Router>
          <Route exact path="/" component={Login} />
          <Route  path="/ressignup" component={ResSignUp} />
          <Route  path="/userdashboard" component={UserDashboard} />
          <Route  path="/restaurantdashboard" component={RestaurantDashboard} />
          <Route  path="/addproduct" component={AddProduct} />
          <Route  path="/usersignup" component={UserSignUp} />
          <Route  path="/restaurantprofile" component={RestaurantProfile} />
          <Route  path="/addcategory" component={AddCategory} />
          <Route  path="/userprofile" component={UserProfile} />
          <Route  path="/resdetail" component={ResDetail} />
          <Route  path="/emailverification" component={EmailVerification} />
      </Router>
  )
    }
}