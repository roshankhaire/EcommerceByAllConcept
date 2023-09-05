import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route } from "react-router-dom"
import home from "./assets/HomePage.png"
import Navbar from './components/Navbar/Navbar';
import { Suspense } from 'react';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Cart from './components/Cart/Cart';
import { Fragment, lazy, useState } from 'react';
import CartProvider from './store/CartProvider';
import HomePageLogin from './components/pages/HomePageLogin';
import CartContext from './store/cart-context';
import AuthContext from './store/auth-context';
import { useContext } from 'react';
import React from "react"
const HomePage=lazy(()=>import('./components/pages/HomePage'))
const ProductList=lazy(()=>import('./components/ProductList/ProductList'))
const ContactUs=lazy(()=>import('./components/pages/ContactUs'))
const AboutUs=lazy(()=>import('./components/pages/AboutUs'))
const AuthForm=lazy(()=>import('./Authentication/AuthForm'))
const ProfilePage=lazy(()=>import('./components/pages/ProfilePage'))
const PasswordChanged=lazy(()=>import('./components/pages/PasswordChanged'))

function App(props) {
  const auth=useContext(AuthContext)
  // const isLoggedIn=auth.isLoggedIn
   
   const cartCtx=useContext(CartContext)
  async function addUserDataHandler(userData){
  
    const response=await fetch('https://contactusdat-default-rtdb.firebaseio.com/userData.json',{
         method:'POST',
         body:JSON.stringify(userData),
         headers:{
          'Content-Type':'application/json'
         }
    })
      const data= await response.json();
      console.log(data)

   
    } 
  
 
 
      
    
  const [cartIsShown,setCartIsShown]=useState(false)
  const showCartHandler=()=>{

    setCartIsShown(true)
    
   // useEffect(()=>{
    
    
       
     
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }
  return<CartProvider>
    
    
  
   <BrowserRouter>
 
  
   <Navbar onShowCart={showCartHandler}/>
   <Suspense fallback={<p>Loading...</p>}>
   <Switch>
   <Route exact path="/">
     <HomePage/>
   </Route>
   <Route exact path="/product">
     <ProductList/>
   </Route>
   <Route exact path="/contactUs">
     <ContactUs onAddUserData={addUserDataHandler}/>
   </Route>
   <Route exact path="/aboutUs">
     <AboutUs/>
   </Route>
  
   <Route exact path="/auth">
     <AuthForm/>
   </Route>
   <Route exact path="/profile">
     <ProfilePage/>
   </Route>
   <Route exact path="/passwordchanged">
     <PasswordChanged/>
   </Route>
   
   </Switch>
   </Suspense>
   
   </BrowserRouter>
  
   { cartIsShown && <Cart onClose={hideCartHandler}/>}

  
 
   </CartProvider>;
     
}

export default App;
