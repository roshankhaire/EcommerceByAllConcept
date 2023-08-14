import CartContext from "./cart-context";
import {  useReducer} from "react";



const defaultState={
    items:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{
  //console.log("stateItems",state.items)
  // console.log("insiadeaction",action)
     
    if(action.type==="ADD"){
        const updatedTotalAmount=state.totalAmount +
         action.item.price *action.item.amount
    // console.log("stateItems",state.items)
        const existingCartItemIndex=state.items.findIndex((item)=>
        item.id===action.item.id)
      // console.log("insideExistingCartItemIndex",existingCartItemIndex)
        const existingCartItem=state.items[existingCartItemIndex]
      //console.log("insideExistingCartItem",existingCartItem)
       let updatedItems
       if(existingCartItem){
        const  updatedItem={
            ...existingCartItem,
            amount:existingCartItem.amount+action.item.amount
        }
            updatedItems=[...state.items]
            updatedItems[existingCartItemIndex]=updatedItem
        
       }
       else{
        updatedItems=state.items.concat(action.item);
       }
        
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
           
        }
       
    }
    if(action.type==='REMOVE'){
       
        const existingCartItemIndex=state.items.findIndex((item)=>
        item.id===action.id
        )
        
        //console.log("inside existingCartItemIndex",existingCartItemIndex)
        const existingItem=state.items[existingCartItemIndex];
        //console.log("insideExistingItem",existingItem)
        const updatedTotalAmount=state.totalAmount-existingItem.price
        let updatedItems
        if(existingItem.amount===1){
            updatedItems=state.items.filter((item)=>
            item.id!==action.id)
          // console.log(updatedItems)

        }
        else{
            const updatedItem={
                ...existingItem,
                amount:existingItem.amount-1
            }
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem
        }
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }

    }
return defaultState;


}

const CartProvider=(props)=>{
   
    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultState)
    
    
    const addItemToCartHandler=(item)=>{
        
        dispatchCartAction({type:"ADD",item:item})
    }
    const removeItemFromCartHandler=(id)=>{
        dispatchCartAction({type:"REMOVE",id:id})
    }
   
    
      
       
   
   
         
    
   
        
   


    
       
        
          
    
  
     
       
    const cartContext={
      
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
    }
    //console.log(cartState.items)
  
  
return<CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
}
export default CartProvider