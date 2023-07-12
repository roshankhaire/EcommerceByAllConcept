import React from "react";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css"
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import AuthContext from "../../store/auth-context";


const Cart=(props)=>{
  console.log("inside cart")
    const auth=useContext(AuthContext)
    const isLoggedIn=auth.isLoggedIn
    
    const cartCtx=useContext(CartContext)
   const totalAmount=cartCtx.totalAmount
   
    const hasItems=cartCtx.items.length > 0
    const cartItemRemoveHandler=(id)=>{
          cartCtx.removeItem(id)
    }
    const cartAddHandler=(item)=>{
        
        
          cartCtx.addItem({...item,amount:1})
          
    }

     console.log("hi",cartCtx)   
 
   
   
  
    
     const cartItems = cartCtx.items.map((item) => {
      return (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          img={item.img.props.src}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartAddHandler.bind(null, item)}
        />
      );
       } );
    
return(
    <Modal onClose={props.onClose}>
            <div className={classes["cart-items"]}>
         {cartItems}
    
      
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>${totalAmount}</span>
        
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            { hasItems && <button className={classes.buttons} >Order</button>}
        </div>
        
    </div>
    </Modal>

)
}
export default Cart