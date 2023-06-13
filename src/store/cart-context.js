import React from "react";

const product=[{
    id:"1",
    name:"shoes",
    price:"1234",
    img:<img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
},
    {
    id:"2",
    name:"watch",
    price:"123",
    img:<img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
},
{
    id:"3",
    name:"sunglasses",
    price:"599",
    img:<img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
},
{
    id:"4",
    name:"plant",
    price:"499",
    img:<img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
},
]

//     let cartDataArray=[]  
//     fetch('https://cartdatatoserver-default-rtdb.firebaseio.com/cartDataToServer.json',{
       
      
       
//     }).then((res)=>{
//         return res.json().then((data)=>{
//             console.log(data)
//             for(let key in data){
//                 cartDataArray.push({
                  
//                     id:data[key].id,
//                     img:data[key].img,
//                     name:data[key].name,
//                     price:data[key].price,
//                     amount:data[key].amount,
                  
//                 })
//             }
            
//         })
       
//     })
    
//        console.log("inside cartArray",cartDataArray)
//        return cartDataArray
// }

const getDataFromLocalStorage=()=>{
   
    let localData=localStorage.getItem("cartDataToServer");
    //console.log(localData)
    if(localData===[]){
       return []
       console.log(localData)
    }
    else{
        console.log(localData)
       return JSON.parse(localData)
    }
}

     


 const CartContext=React.createContext
(
   
   {

   // items:[],
    dataFromServer:()=>{

    },
    items:[],
   
    totalAmount:0,
    addItem:(item)=>{

    },
    removeItem:(id)=>{

    }
})
export default CartContext;