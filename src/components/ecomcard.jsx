import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";
import { useState } from "react";
import { Box } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
export function Taskcard({
  productdetails,
  handlecart = () => {},
  handleisproductalreadyadded = Boolean ,
  
}) {
  const [status, setStatus] = useState('');
  const carts = useSelector(state => state.productdetails.cart);

  const handleAddToCart = () => {
    handlecart(productdetails);
   
    
  };
 

  return (
    <Card 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        position: 'relative', 
        width: '100%', 
        maxWidth: 300, 
        backgroundColor : "black" ,
        maxHeight : "500px" ,
       
        margin: '1rem auto', 
        borderRadius: '16px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }
      }}
    >
      <div 
        sx={{ 
          position: 'absolute', 
          top: '16px', 
          right: '16px', 
         
          color: 'gold', 
          padding: '4px 8px', 
          borderRadius: '4px', 
          fontSize: '12px', 
          fontWeight: 'bold'
        }}
      >
        <Typography variant='contained' style={{"color" : "gold"}}>
sale
        </Typography>
      </div>
      <img 
        src={productdetails.imageurl} 
        alt="Product" 
        style={{ 
          maxHeight: '220px', 
          maxWidth: '200px', 
         
          borderTopLeftRadius: '16px', 
          borderTopRightRadius: '16px' 
        }} 
      />
      <CardContent 
        sx={{ 
          padding: '16px', 
          textAlign: 'center'
        }}
      >
        <Typography 
          variant="h5" 
          component="div" 
          sx={{ 
            fontWeight: 'bold', 
            marginBottom: '8px',
            color : "gold"
          }}
        >
          {productdetails.productname}
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary" 
          sx={{ 
            textDecoration: 'bold', 
            color: '#888', 
            marginBottom: '8px'
          }}
        >
          {productdetails.productprice} <CurrencyRupeeIcon/>
        </Typography>

        <Box maxHeight={50} sx={{overflow : "hidden"}}>
        <Typography 
          variant="body1" 
          sx={{ 
            fontWeight: 'italic', 
            marginBottom: '8px',
            color : "white",
            fontStyle : "italic" ,
            overflow : "hidden"
          }}
        >
          {productdetails.productdescription}
        </Typography>
        </Box>
        
      </CardContent>
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ 
          width: '100%', 
          borderRadius: '8px',
          marginTop : "13px"
        }} 
        onClick={()=>{

        console.log((handleisproductalreadyadded));
        handleAddToCart(productdetails);
        }}
      >
        { handleisproductalreadyadded ? "Remove from cart" : "Add to cart" }
      </Button>
    </Card>
  );
}
