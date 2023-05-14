
import classes from "./ProductInput.module.css";
import React from "react";
const ProductInput=React.forwardRef((props,ref)=>{
    return (
         <div >
           <label htmlFor={props.input.id}>{props.label}</label>
           <input ref={ref} {...props.input}/>
         </div>
    )
})
export default ProductInput