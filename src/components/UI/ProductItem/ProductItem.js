import React from "react";
import ProductForm from "../../ProductForm/ProductForm";
import { useContext ,useEffect} from "react";
import CartContext from "../../../store/cart-context";
const ProductItem=(props)=>{
   const cartCtx=useContext(CartContext);
  // console.log(cartCtx)
   const addToCartHandler=amount=>{
   // console.log(cartCtx.items)
   cartCtx.addItem({
    id:props.id,
    name:props.name,
    price:props.price,
    amount:amount,
    img:props.img
})
 
fetch("https://ecommerceappdata-default-rtdb.firebaseio.com/dataToFirebaseBackend.json",{
    method:"POST",
    body:JSON.stringify( {
        id:props.id,
        name:props.name,
        price:props.price,
        amount:amount,
        img:props.img
    }) ,
    headers:{
      "Content-Type":"application/json"
    }
}).then((res)=>{
  return res.json().then((data)=>{
      console.log( "dataToBackend from product item",data)
  })
}) 
   
  
  
   }






   

return(
    <>
     <li>
        <div>
             {props.img}
        </div>
        <div>
        <h3>{props.name}</h3>
         <h3>$ {props.price}</h3>
         
        </div>
        <div>
            <ProductForm onAddToCart={addToCartHandler}/>
        </div>
    </li>
    </>
   
)
}
export default ProductItem