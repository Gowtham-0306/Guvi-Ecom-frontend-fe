import { Navbar } from "./navbar";

import { Grid } from "@mui/material";
import styles from './banner.module.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { storeproductsRequest , storeproductsSuccess , storeproductsFailure} from "./redux/reducers/productdetailsreducer"
import { useDispatch, useSelector } from "react-redux";
import { useEffect  , useState} from "react";
import axios from 'axios';
import { Cartcards } from "./cartcards";
export function Billingpage({cartcount ={cartcount}}){



    const products = useSelector(state => state.productdetails.cart);
    console.log(products);



    function totalcalculation(product){

return  product.reduce((accum, currentval)=>{
return accum + currentval.productprice;



},0)



    }


   var totalamount = totalcalculation(products);


return(

    <>




   <Navbar cartcount={cartcount} totalprice = {totalamount} />
    

   <Grid container  style={{  display : "flex",alignItems : "center",
        justifyContent : "center" , width : "100%" , paddingTop : "50px"
        , flexDirection : "row"
    }} >

 

<Grid style={{backgroundColor : "rgb(83,53,37)" , width : "100%", display : "flex", 
    alignItems : "center", 
        justifyContent : "center" ,boxshadow : '0.3s ease' , height : "80px" , flexDirection : "column"
}}>
<Typography style={{textAlign : "center" ,
    "color" : "gold" , fontFamily : "inherit" , fontWeight : "bolder" , fontStyle : "italic"
}}>


   Your selected products are listed below :
    
</Typography>








<Typography style={{textAlign : "center" ,
    "color" : "white" , fontFamily : "sans-serif" , fontWeight : "bolder"
}}>


       Total Products : {products.length} and total amount :  {totalamount} <CurrencyRupeeIcon/> 

       


       
    
</Typography>








</Grid>













<Grid item style={{  alignItems : "center",
        justifyContent : "center" , width : "100%"  , margin : "auto"
        , display : "flex" , flexDirection  : "row" , 
    }} > 
{
    products.map((item)=>(

<Cartcards key={item._id} productdetails = {item}/>

    ))
}

    
</Grid>





    </Grid>

        
   
        
         </>
)






}
