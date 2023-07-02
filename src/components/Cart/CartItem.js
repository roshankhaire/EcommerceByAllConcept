import classes from "./CartItem.module.css"

import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartData from "./CartData";

const CartItem = (props) => {
   const price=`$${props.price}`
   
      
      
  return (
   
 
 
    <li className={classes['cart-item']}>
       
    
      <div>
      
       <span className={classes.imagesize}> {  props.img } </span>
           <h2>{props.name} </h2>
       
     
    
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      
       </div>
     
    </li>
    
   
  );
};

export default CartItem;