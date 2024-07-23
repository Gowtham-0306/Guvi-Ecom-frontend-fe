import { useState } from 'react'
import {Provider} from "react-redux"
import "./App.css";
import { Navbar } from "./components/navbar";
import { Taskboard } from './components/ecomboard.jsx';
import { Login } from './components/loginpage';
import { storecart } from './components/redux/reducers/productdetailsreducer';
import { BrowserRouter , Route , Routes , useLocation} from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dummy } from './components/dummy.jsx';
import React from 'react';
import { Homepage } from './components/homepage';
import {store} from "./components/redux/store.js"
import { Billingpage } from './components/billingpage';

function App() {
  const cartproducts = useSelector(state => state.productdetails.cart);
  const [count, setCount] = useState(0)
  const [isvalidadmincreds, setisvalidadmincreds] = useState(false);
  const isloggedout = location.pathname.includes('/');
  console.log(isvalidadmincreds);
  const dispatch = useDispatch();
  const [cart , setcart] = useState([]);
     // Use the effect to log updated state after the state has been set
     useEffect(() => {
      console.log('Cart updated:', cart);
      dispatch(storecart(cart));
      console.log(count);
    }, [cart]);
  const [cartcount , setcartcount] = useState(0);


  function cartStatus(productname) {

    const isInCart = cart.some((item) => item === productname);
  

    if (!isInCart) {
      setcartcount((prevCount) => prevCount + 1);

      



    }

else if(isInCart)
{

var indexnum = cart.indexOf(productname);
cart.splice(indexnum , 1);
var cartduplicate = [...cart];
setcart(cartduplicate);
if(cartcount > 0) {
setcartcount((prevCount) => prevCount - 1);
}




}


  }


  function handleisproductalreadyadded(product={}){
  
    console.log(`hi`);
  console.log(product._id);
    var isadded= cartproducts.some((item) => item._id   === product._id );
     console.log(cartproducts);
     if(isadded){
      return true;
     }
     else{
      return false
     }
   
   
   }




  function handlecart(product) {
  
    
     var cartcopy = [...cartproducts];
    var isproductalreadyadded = cartcopy.some((item)=>item._id === product._id);
    console.log(isproductalreadyadded);
    if(isproductalreadyadded){
      var cartcopyforduplicate = [...cart]
var removedduplicateproduct = cartcopyforduplicate.filter((item)=>item._id != product._id);
setcart(removedduplicateproduct);
setCount(cartcopy.length);

    }
    else{
      cartcopy.push(product);
      setcart(cartcopy);
      setCount(cartcopy.length);
      console.log(count); 
    }
    console.log(cart);
    
  }

   function handleisalreadyadded(product={}){
   
    return cart.some((item) => item === product.productname);
     
   
   
   }










  const [isLoggedIn, setIsLoggedIn] = useState(true);

   function handleLoginSuccess ()  {
  
     setIsLoggedIn(true);
  console.log(`hitted`);
  console.log(isLoggedIn);



  // navigate('/home');
  };
  return (
    <>
      <div className='App'>
     
      

       
<Provider store={store}>

<BrowserRouter >

          <Routes>
         <Route path="/" element={<Taskboard cartcount ={cart.length}  handleisproductalreadyadded={handleisproductalreadyadded}/>} /> 
         <Route path="/dummy" element={<Dummy />} /> 

          <Route path="/home" element={< Homepage cartcount ={cart.length} cartStatus={cartStatus}
          handlecart={handlecart} cart ={cart} handleisalreadyadded={handleisalreadyadded}
          setisvalidadmincreds ={setisvalidadmincreds} isvalidadmincreds={isvalidadmincreds}


          handleisproductalreadyadded={handleisproductalreadyadded}
          />} /> 
         
         <Route path="/billingpage" element={<Billingpage cartcount ={cart.length}/>} /> 
          
          </Routes>
        </BrowserRouter>

</Provider>






     
      </div>
    




     
    </>
  )
}

export default App
