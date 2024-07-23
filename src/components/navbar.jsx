
import { AppBar , Divider, Toolbar , Grid ,Button} from "@mui/material"
import { Login } from "./loginpage"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import React from 'react';
import Select from '@mui/material/Select';
import {Typography} from "@mui/material";
import { storecart  , clearreducerstate} from "./redux/reducers/productdetailsreducer";

import { Link, useLocation  ,useNavigate } from 'react-router-dom';
export function Navbar({handleLoginSuccess = ()=>{} , handleOpen = ()=>{} ,  setisvalidadmincreds=()=>{},handleClose = ()=>{} ,cartcount ={count}
, tocheckuserisadminornot=()=>{}
 ,handleisproductalreadyadded=()=>{}
}){
    const [open, setOpen] = React.useState(false);
  
    const [type, settype] = React.useState("login");
    const location = useLocation(); // Get the location object
    const currentPath = location.pathname; 
    const carts = useSelector(state => state.productdetails.cart);
   


   const dispatch = useDispatch();
console.log(currentPath);
    const navigate = useNavigate();
    
    const isHomePresent = location.pathname.includes('/home');
    const isbillingpagePresent = location.pathname.includes('/billingpage');
    function handleClose (){
        setOpen(false)
        settype("login")



    }
    function dumy(buttontype){
      

        if(buttontype === 'Log out'){
            handleisproductalreadyadded();



        }
    }
    function handleOpen (islogoutbtn = Boolean){
        console.log(islogoutbtn );
if(islogoutbtn){

    
    dispatch(clearreducerstate('RESET_STATE'));
    handleisproductalreadyadded();
   
navigate("/");
localStorage.removeItem('isAdmin');
localStorage.removeItem('username');

//dispatch(storecart(cart));


}


      if(!islogoutbtn){
        setOpen(true);
      } 



    }


    function handleOpen2 (islogoutbtn = Boolean){
        console.log(islogoutbtn );
if(islogoutbtn){
    console.log(islogoutbtn);
    dispatch(clearreducerstate('RESET_STATE'));
    handleisproductalreadyadded();
navigate("/");

localStorage.removeItem('isAdmin');
localStorage.removeItem('username');


}

      if(!islogoutbtn){
        setOpen(true);
      } 



    }





    function handleType(){
        setOpen(true);
settype("registration");
// console.log(type);


    }
    return(<>
    
    <div>
    <AppBar style={{backgroundColor : "black"} }>

<Toolbar>

<Grid container 

style={{  margin: "0 auto" }}

flexDirection={"row"}
direction="row"
justifyContent="space-evenly"
alignItems={"center"}


 

>

    <Grid item>
        <Grid>

        
 <img src="https://www.guvi.in/web-build/images/guvi-logo-new.2c41fef696b49959c1033ef2290bd2b9.png"  style={{maxHeight : 50}} />
 </Grid>
    </Grid>
    <Grid item >
        <Grid container flexDirection={"row"}
        alignItems={"center"}
        justifyContent="space-evenly"
        marginRight={3}
        >

{ isHomePresent  && (
<h1></h1>

)
}


        <Button variant="contained" onClick={(event)=>{
                        dumy(event.target.textContent);

          console.log(isHomePresent);
            handleOpen(isHomePresent )
            handleOpen2(isbillingpagePresent );


        }}> {isHomePresent || isbillingpagePresent ? "Log out" : "Log in" } </Button>


  { currentPath === "/" && (
    <Button variant="contained" onClick={()=>{
    handleType()
}}>Sign UP</Button>


  )




  }

        </Grid>
   
   
    </Grid>

    <Grid item >
        <Grid container flexDirection={"row"}
        alignItems={"center"}
        justifyContent="space-evenly"
        marginRight={3}
        >

{ isHomePresent && (
<h1></h1>

)
}




{ currentPath != "/" && (

<Grid style={{marginRight : "15px"}}>

<Link to="/home" style={{"textDecoration" : "none",

"fontFamily" : "revert" , "fontSize" : "medium" , "marginLeft" : "10px" ,  "color" : "black"

       }} onClick={()=>{






       }}  onMouseLeave={(event)=>{

event.target.style.color="gold"

       }}       onMouseEnter={(event)=>{

event.target.style.color="red"

       }}                 ><Typography variant="contained" style={{"fontFamily" : "revert" ,
        "textDecoration " : "none" , color : "goldenrod"
       }}>
       Home 
        
        
        </Typography></Link>
</Grid>

       
)


    
}










  
{ currentPath === "/home" && (

<Grid style={{marginRight : "15px"}}>

<Link to="/billingpage" style={{"textDecoration" : "none",

"fontFamily" : "revert" , "fontSize" : "medium" , "marginLeft" : "10px" ,  "color" : "black"

       }} onClick={()=>{






       }} onMouseLeave={(event)=>{

        event.target.style.color="gold"
        
               }}          onMouseEnter={(event)=>{

event.target.style.color="red"

       }}                 ><Typography variant="contained" style={{"fontFamily" : "revert" ,
        "textDecoration " : "none" , color : "goldenrod"
       }}>
       Proceed to billing section
        
        
        </Typography></Link>
</Grid>

       
)


    
}


{ currentPath != "/"  && (
    <Button variant="contained" startIcon={<AddShoppingCartIcon />} onClick={()=>{
    
}}        onMouseLeave={(event)=>{

    event.target.style.color="gold"
    
           }}       >  <span className="badge bg-dark text-white ms-1 rounded-pill">{carts.length}</span></Button>
)


    
}

  







  

        </Grid>
   
   
    </Grid>



</Grid>


</Toolbar>
<Login modal ={open} handlemodalClose = {handleClose} modaltype= {type} handleLoginSuccess={handleLoginSuccess} setisvalidadmincreds={setisvalidadmincreds}
tocheckuserisadminornot={tocheckuserisadminornot}
/>

    </AppBar>
    {/* <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{cartcount}</span>
              </button>
            </form> */}
    </div> 
    </>)
}