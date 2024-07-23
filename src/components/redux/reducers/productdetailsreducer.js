import { createSlice } from "@reduxjs/toolkit";

const productdetailsSlice = createSlice({
  name: "productdetails",
  initialState: {
    data: [],
    selectedStatus: '' ,
    isvalidmin : false, 
    cart: [],
    usercart :[] 
  },
  reducers: {
    storeproductsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    storeproductsSuccess: (state, action) => {
      if (action.payload) {
       console.log([...action.payload])
        state.data = [...action.payload]; // Create a new array using spread syntax
      } else {
        state.data = [];
      }
    },

    storeusercartdetails: (state, action) => {
      if (action.payload) {
       console.log([...action.payload])
        state.usercart = [...action.payload]; // Create a new array using spread syntax
      } else {
        state.usercart = [];
      }
    },




    storeediteddata: (state, action) => {
      if (action.payload) {
        const updatedItem = action.payload;
        state.data = state.data.map(item => {
          return item._id === updatedItem._id ? updatedItem : item;
        });
      }
    },





    clearreducerstate: (state, action) => {
      if (action.payload === 'RESET_STATE') {
        console.log(`clar`);
        state.data=[];
        state.cart = [];
       
      }
    },

    storecart: (state, action) => {
      if (action.payload != "CLEAR_CART") {
        const cart = action.payload;
        (cart);
       state.cart = action.payload;
        (state.cart);
      }else if (action.type === "CLEAR_CART") {
        state.cart = [];
         ('Cart cleared');
    } else {
         ('Unknown action payload');
        state.cart = [];
    }

   
    
    },


    
    
    storeproductsFailure: (state, action) => {
      state.error = action.payload;
    },
    updateSelectedStatus: (state, action) => {
      state.selectedStatus = action.payload;
    },
    checkisvalidadmin: (state, action) => {
      // state.isvalidmin = action.payload;
       (action.payload);
     state.isvalidmin = action.payload;
      (state.isvalidmin);
     
    }
    
  },
});

export const { storeproductsRequest, storeproductsSuccess, storeproductsFailure, updateSelectedStatus  , storeediteddata
  , checkisvalidadmin , storecart , clearreducerstate  , storeusercartdetails
} = productdetailsSlice.actions;
export default productdetailsSlice.reducer;
