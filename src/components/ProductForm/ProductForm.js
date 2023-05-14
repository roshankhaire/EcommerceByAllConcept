import React from "react";
import ProductInput from "../ProductInput/ProductInput";
import { useRef } from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const ProductForm=(props)=>{
  const cartCtx=useContext(CartContext)
  const amountInputRef=useRef()
  const submithandler=(event)=>{
    event.preventDefault();
    const enteredAmount=amountInputRef.current.value;
    const enteredAmountNumber=+enteredAmount;
    if(enteredAmount.trim().length===0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      return
      
    }
    props.onAddToCart(enteredAmountNumber)
  }
 

   
 return(
   <form onSubmit={submithandler}>
    <ProductInput 
    ref={amountInputRef}
    label="Amount" input={{
        id:'amount_'+props.id,
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
    }}/>
    <button  >ADD TO CART</button>
   </form>
 )
}
export default ProductForm;