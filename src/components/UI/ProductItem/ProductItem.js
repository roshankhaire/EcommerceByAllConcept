import React from "react";
import ProductForm from "../../ProductForm/ProductForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
const ProductItem=(props)=>{
   const cartCtx=useContext(CartContext);
  // console.log(cartCtx)
   const addToCartHandler=amount=>{
    cartCtx.addItem({
        id:props.id,
        name:props.name,
        price:props.price,
        amount:amount,
        productImage:<img src={props.img}/>
    })
   }

return(
    <>
     <li>
        <div>
             {props.productImage}
        </div>
        <div>
        <h3>{props.name}</h3>
         <h3>Rs {props.price}</h3>
         
        </div>
        <div>
            <ProductForm onAddToCart={addToCartHandler}/>
        </div>
    </li>
    </>
   
)
}
export default ProductItem