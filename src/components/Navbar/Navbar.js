import React, { Fragment } from "react";
import classes from './Navbar.module.css'

import {NavLink } from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

const Navbar=(props)=>{
   const history=useHistory()
  const cartCtx=useContext(CartContext)
  const authCtx=useContext(AuthContext)
  const isLoggedIn=authCtx.isLoggedIn
 
  let noOfCartitems=cartCtx.items.reduce((curNum,item)=>{
    return curNum + item.amount
  },0)

  const logoutHandler=()=>{
    authCtx.logout()
    history.replace("auth")
  }
  
  
  
    return(
        <Fragment>
           
        <div className={classes.navbar}>
            <span className={classes.ecommerce}>Ecommerce Website</span>
            <div>
                <ul className={classes.navmenu} >
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/product">Product</NavLink></li>
                    <li><NavLink to="/aboutUs">About Us</NavLink></li>
                    <li><NavLink to="contactus">Contact Us</NavLink></li>
                </ul>
            </div>
          
            <div className={classes.cart}>
              <FaShoppingCart onClick={props.onShowCart}/>
               <label className={classes.label}>{noOfCartitems}</label>
              
            </div>
            <div>
              <nav>
                <ul>
                 
                {!isLoggedIn && ( <li><NavLink to="/auth">login</NavLink></li>)}
                {isLoggedIn && (<li><NavLink to="/profile">Profile</NavLink></li> )}
                {isLoggedIn && ( <li><button onClick={logoutHandler}  >Logout</button></li>)}
                </ul>
              </nav>
            </div>
        </div>
        </Fragment>
    )
}
export default Navbar;