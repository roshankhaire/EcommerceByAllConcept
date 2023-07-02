import React from "react";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css"
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import AuthContext from "../../store/auth-context";


const Cart=(props)=>{
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

        
  if(isLoggedIn){
   
   // const isLoggedIn=auth.isLoggedIn
    
  
   
  // useEffect(()=>{
   
    let cartDataArray=[];
    fetch('https://datatofirebasebackend-default-rtdb.firebaseio.com/dataToFirebaseBackend.json',{
        method:'GET',
        
        headers:{
          'Content-Type':'application/json'
        }

       }).then(res=>{
           return res.json().then((data)=>{
                 console.log("dataFromBackend",data)
                
              for(let key in data){
                cartDataArray.push({
                    key:key,
                    amount:data[key].amount,
                    price:data[key].price,
                    img:data[key].img,
                    name:data[key].name,
                    id:data[key].id
                })
              }
                return cartDataArray
         
        
           })
       })
       console.log( 'insie in cartData fromProductList',cartDataArray)
       cartDataArray.forEach(element => {
       return   cartCtx.addItem( element)
    });
  }
    
   const cartItems=cartCtx.items.map((item)=>

  <CartItem key={item.id}
  name={item.name}
  amount={item.amount}
  price={item.price}
  img={item.img}
  onRemove={cartItemRemoveHandler.bind(null,item.id)}
  onAdd={cartAddHandler.bind(null,item)}/>
    )
    
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