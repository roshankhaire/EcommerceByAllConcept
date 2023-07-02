import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route } from "react-router-dom"
import home from "./assets/HomePage.png"
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/pages/HomePage';
import ProductList from './components/ProductList/ProductList';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Cart from './components/Cart/Cart';
import { Fragment, useState } from 'react';
import CartProvider from './store/CartProvider';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import AuthForm from './Authentication/AuthForm';
import HomePageLogin from './components/pages/HomePageLogin';
import ProfilePage from './components/pages/ProfilePage';
import PasswordChanged from './components/pages/PasswordChanged';
import CartContext from './store/cart-context';
import AuthContext from './store/auth-context';
import { useContext } from 'react';



function App(props) {
  const auth=useContext(AuthContext)
  // const isLoggedIn=auth.isLoggedIn
   
   const cartCtx=useContext(CartContext)
  async function addUserDataHandler(userData){
  
    const response=await fetch('https://adduserinput-default-rtdb.firebaseio.com/userData.json',{
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
 
   
   </BrowserRouter>
  
   { cartIsShown && <Cart onClose={hideCartHandler}/>}

  
 
   </CartProvider>;
     
}

export default App;
