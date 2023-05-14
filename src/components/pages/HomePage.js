import React from "react";
import homepage from "../../assets/homepageImage.jpg"
import classes from "./HomePage.module.css"
import ProductList from "../ProductList/ProductList";

const HomePage=()=>{
 

      return(
        <>
        <div className={classes.image}>
        <img src={homepage}/>
        
        </div>
        
        </>

      )
}
export default HomePage