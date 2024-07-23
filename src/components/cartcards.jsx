import { Navbar } from "./navbar";

import { Grid } from "@mui/material";
import styles from "./banner.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import {
  storeproductsRequest,
  storeproductsSuccess,
  storeproductsFailure,
} from "./redux/reducers/productdetailsreducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

export function Cartcards({ productdetails = { productdetails } }) {
  console.log(productdetails);
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          width: "100%",
          maxWidth: 300,
          backgroundColor: "black",
          maxHeight: "500px",

          margin: "1rem auto",
          borderRadius: "16px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(10px)",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <div
          sx={{
            position: "absolute",
            top: "16px",
            right: "16px",

            color: "gold",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          <Typography variant="contained" style={{ color: "gold" }}>
            sale
          </Typography>
        </div>
        <img
          src={productdetails.imageurl}
          alt="Product"
          style={{
            maxHeight: "220px",
            maxWidth: "200px",

            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        />
        <CardContent
          sx={{
            padding: "16px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              marginBottom: "8px",
              color: "gold",
            }}
          >
            {productdetails.productname}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              textDecoration: "bold",
              color: "#888",
              marginBottom: "8px",
            }}
          >
            {productdetails.productprice} <CurrencyRupeeIcon />
          </Typography>

          <Box maxHeight={50} sx={{ overflow: "hidden" }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "italic",
                marginBottom: "8px",
                color: "white",
                fontStyle: "italic",
                overflow: "hidden",
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
            width: "100%",
            borderRadius: "8px",
            marginTop: "13px",
          }}
          onClick={() => {}}
        >
          {"Added to cart"}
        </Button>
      </Card>
    </>
  );
}
