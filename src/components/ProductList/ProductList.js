import React from "react";
import Card from "../UI/Card/Card";
import ProductItem from "../UI/ProductItem/ProductItem";
const product=[{
    id:"1",
    name:"shoes",
    price:"1234",
    img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
    {
    id:"2",
    name:"watch",
    price:"123",
    img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{
    id:"3",
    name:"sunglasses",
    price:"599",
    img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
},
{
    id:"4",
    name:"plant",
    price:"499",
    img:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
]
const ProductList=(props)=>{
    const data=product.map((item)=><ProductItem
    id={item.id}
    key={item.id}
    price={item.price}
    name={item.name}
    productImage={<img src={item.img}/>}

    />)
 return(
    <>
        
            <Card>
                <ul>
                 {data}
                 </ul>
            </Card>
           
            </>
            
        )
     
    

}
export default ProductList