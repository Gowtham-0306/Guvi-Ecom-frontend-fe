import { AppBar, Divider, Toolbar, Grid, Button } from "@mui/material";
import { Login } from "./loginpage";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import React from "react";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import {
  storecart,
  clearreducerstate,
} from "./redux/reducers/productdetailsreducer";

import { Link, useLocation, useNavigate } from "react-router-dom";
export function Navbar({
  handleLoginSuccess = () => {},
  handleOpen = () => {},
  setisvalidadmincreds = () => {},
  handleClose = () => {},
  cartcount = { count },
  tocheckuserisadminornot = () => {},
  handleisproductalreadyadded = () => {},
totalprice = Number
}) {
  const [open, setOpen] = React.useState(false);
const amount = totalprice * 100;
const currency  = "INR"
const receipt = "qwsaq1"

  const [type, settype] = React.useState("login");
  const location = useLocation(); // Get the location object
  const currentPath = location.pathname;
  const carts = useSelector((state) => state.productdetails.cart);

  const dispatch = useDispatch();
  console.log(currentPath);
  const navigate = useNavigate();

  const isHomePresent = location.pathname.includes("/home");
  const isbillingpagePresent = location.pathname.includes("/billingpage");
  function handleClose() {
    setOpen(false);
    settype("login");
  }
  function dumy(buttontype) {
    if (buttontype === "Log out") {
      handleisproductalreadyadded();
    }
  }
  function handleOpen(islogoutbtn = Boolean) {
    console.log(islogoutbtn);
    if (islogoutbtn) {
      dispatch(clearreducerstate("RESET_STATE"));
      handleisproductalreadyadded();

      navigate("/");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("username");

      //dispatch(storecart(cart));
    }

    if (!islogoutbtn) {
      setOpen(true);
    }
  }

  function handleOpen2(islogoutbtn = Boolean) {
    console.log(islogoutbtn);
    if (islogoutbtn) {
      console.log(islogoutbtn);
      dispatch(clearreducerstate("RESET_STATE"));
      handleisproductalreadyadded();
      navigate("/");

      localStorage.removeItem("isAdmin");
      localStorage.removeItem("username");
    }

    if (!islogoutbtn) {
      setOpen(true);
    }
  }

  function handleType() {
    setOpen(true);
    settype("registration");
    // console.log(type);
  }




  async function handlebilling(){

const response = await fetch('https://guvi-ecom-nodejs-be-1.onrender.com/order' ,{


method : "POST",
body :JSON.stringify({

    amount,
   currency,
   receipt
}),
headers :{
    "content-type" : "application/json"
}

});


const order = await response.json();
console.log(order);




var options = {
    "key": "rzp_test_D27jYnumNsPdCW", // Enter the Key ID generated from the Dashboard
    amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
   currency,
    "name": "Acme Corp", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert("Thanks for the purchase")
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com", 
        "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new window.Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});

rzp1.open();
    e.preventDefault();





  }



  return (
    <>
      <div>
        <AppBar style={{ backgroundColor: "black" }}>
          <Toolbar>
            <Grid
              container
              style={{ margin: "0 auto" }}
              flexDirection={"row"}
              direction="row"
              justifyContent="space-evenly"
              alignItems={"center"}
            >
              <Grid item>
                <Grid>
                <ShoppingBagTwoToneIcon 
                style={{ fontSize: 50 , color : "gold"}} 
                />
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent="space-evenly"
                  marginRight={3}
                >
                  {isHomePresent && <h1></h1>}

                  <Button
                    variant="contained"
                    onClick={(event) => {
                      dumy(event.target.textContent);

                      console.log(isHomePresent);
                      handleOpen(isHomePresent);
                      handleOpen2(isbillingpagePresent);
                    }}
                  >
                    {" "}
                    {isHomePresent || isbillingpagePresent
                      ? "Log out"
                      : "Log in"}{" "}
                  </Button>

                  {currentPath === "/" && (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleType();
                      }}
                    >
                      Sign UP
                    </Button>
                  )}
                </Grid>
              </Grid>

              <Grid item>
                <Grid
                  container
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent="space-evenly"
                  marginRight={3}
                >
                  {isHomePresent && <h1></h1>}

                  {currentPath != "/" && (
                    <Grid style={{ marginRight: "15px" }}>
                      <Link
                        to="/home"
                        style={{
                          textDecoration: "none",

                          fontFamily: "revert",
                          fontSize: "medium",
                          marginLeft: "10px",
                          color: "black",
                        }}
                        onClick={() => {}}
                        onMouseLeave={(event) => {
                          event.target.style.color = "gold";
                        }}
                        onMouseEnter={(event) => {
                          event.target.style.color = "red";
                        }}
                      >
                        <Typography
                          variant="contained"
                          style={{
                            fontFamily: "revert",
                            "textDecoration ": "none",
                            color: "goldenrod",
                          }}
                        >
                          Home
                        </Typography>
                      </Link>
                    </Grid>
                  )}

                  {currentPath === "/home" && (
                    <Grid style={{ marginRight: "15px" }}>
                      <Link
                        to="/billingpage"
                        style={{
                          textDecoration: "none",

                          fontFamily: "revert",
                          fontSize: "medium",
                          marginLeft: "10px",
                          color: "black",
                        }}
                        onClick={() => {}}
                        onMouseLeave={(event) => {
                          event.target.style.color = "gold";
                        }}
                        onMouseEnter={(event) => {
                          event.target.style.color = "red";
                        }}
                      >
                        <Typography
                          variant="contained"
                          style={{
                            fontFamily: "revert",
                            "textDecoration ": "none",
                            color: "goldenrod",
                          }}
                        >
                          Proceed to billing section
                        </Typography>
                      </Link>
                    </Grid>
                  )}

                  {currentPath != "/" && (
                    <Button
                      variant="contained"
                      startIcon={<AddShoppingCartIcon />}
                      onClick={() => {}}
                      onMouseLeave={(event) => {
                        event.target.style.color = "gold";
                      }}
                    >
                      {" "}
                      <span className="badge bg-dark text-white ms-1 rounded-pill">
                        {carts.length}
                      </span>
                    </Button>
                  )}

                  {isbillingpagePresent ? (
                    <Button
                      variant="contained"
                      startIcon={<AddShoppingCartIcon />}
                      onClick={(event) => {

    if(totalprice){
        handlebilling();
    }
            else{
                alert("Please buy atleast one product")
            }               




                      }}
                      onMouseLeave={(event) => {
                        event.target.style.color = "gold";
                      }}
                    >
                      Proceed for billing
                    </Button>
                  ) : (
                    ""
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
          <Login
            modal={open}
            handlemodalClose={handleClose}
            modaltype={type}
            handleLoginSuccess={handleLoginSuccess}
            setisvalidadmincreds={setisvalidadmincreds}
            tocheckuserisadminornot={tocheckuserisadminornot}
          />
        </AppBar>
      </div>
    </>
  );
}
