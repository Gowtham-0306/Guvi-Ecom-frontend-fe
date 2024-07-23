import { configureStore } from "@reduxjs/toolkit";

import productdetailsreducer from "./reducers/productdetailsreducer";

 export const store =  configureStore({
    // ROOT REDUCER
    reducer: {
      productdetails : productdetailsreducer
    },
  });