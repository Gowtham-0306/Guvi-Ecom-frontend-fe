import { Grid, Button, Typography } from "@mui/material";
import styles from './banner.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Navbar } from "./navbar";
import { Taskcard } from "./ecomcard";

import axios from "axios";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "./redux/reducers/apidatas";
import { storeediteddata , checkisvalidadmin  } from "./redux/reducers/productdetailsreducer";
import { BrowserRouter, Routes, Route, useNavigate , useLocation } from "react-router-dom";
import { Login } from "./loginpage";

export function Homepage({cartStatus=()=>{},
handlecart= () =>{} , products =[] , cart = {cart}

, ispresent=Boolean , handleisproductalreadyadded=()=>{},

cartcount ={count} , setisvalidadmincreds=()=>{} ,isvalidadmincreds={isvalidadmincreds}

}) {
  const navigate = useNavigate();
  const [filteredproducts, setfilteredproducts] = useState([]);
  const dispatch = useDispatch();
   const selectedStatus = useSelector(state => state.productdetails.selectedStatus);
   const cartdetails = useSelector(state => state.productdetails.cart);
   const datastorender = useSelector(state => state.productdetails.data);
  const [savedbutton, setsavedbutton] = useState(false);
  const [deletebutton, setdeletebutton] = useState(false);
  const [isvalid, setisvalid] = useState(false);
  const [isvalidadmn, setisvalidadmn] = useState(false);
  const location = useLocation(); // Get the location object
  const currentPath = location.pathname; 



  useEffect(() => {
    fetchDataFromAPI(dispatch);
    
    setdeletebutton(false);





  }, [dispatch, savedbutton, deletebutton]);
 
  
function handlecheckproductalreadyadded(product){
   (product);

return cartproducts.some((item)=> item._id === productdetails._id);

}



  const tasks = useSelector((state) => state.productdetails.data);


  const validadminentered = useSelector((state)=>state.productdetails.isvalidadmin);
   (validadminentered);
  

 ///to get if the user is valid admin or not

 

useEffect(()=>{
 const isAdmin = localStorage.getItem('isAdmin') === 'true';
 const usernametodisplay = localStorage.getItem('username');
 const password = localStorage.getItem('password');
 console.log(usernametodisplay);
  (isAdmin);
if(isAdmin){
 (isAdmin);
setvalidadmin(isAdmin)
console.log(usernametodisplay);
}

})





 
  useEffect(() => {
    const token = localStorage.getItem('token');
//     const isAdmin = localStorage.getItem('isAdmin') === 'true';
// if(isAdmin){

// setisvalidadmincredentials(isAdmin);

// }
    if (!token) {
      navigate('/');
    }
  }, [history]);

 

  
  const [filtername, setfiltername] = useState("");
 
  
  
  const [errors, setErrors] = useState({
    productname: false,
    productdescription: false,
    productprice: false,
    imageurl : false
  });
  const [productdetails, setproductdetails] = React.useState({
    productname: "",
    productdescription: "",
    productprice: "",
 imageurl : "" ,
    productrating :0
  });

  const [editableCardId, setEditableCardId] = useState(null);
  const [validadmin, setvalidadmin] = useState(false);
  const [datastorenderupdated, setdatastorenderupdated] = useState([]);
const isvalidadmincredentials = useSelector((state)=>state.productdetails.isvalidmin);
 (isvalidadmincredentials);
  const handleTaskDelete = async (taskId, productname, isdeleteclicked = Boolean) => {
     ("Deleting task with ID:", taskId , productname);
    // try {
    //   const response = await axios.delete(`http://127.0.0.1:3000/api/taskdelete/${taskId}`);
    //    ("Task deleted successfully");
      
    //   if(response.data.deleteduserdata){
    //      (`deleted`);
    //     const updatedTasks = tasks.filter(task => task._id !== taskId);
    //     if (updatedTasks.length > 0) {
    //       dispatch({ type: 'UPDATE_TASKS', payload: updatedTasks });
    //     } else {
    //        ("No tasks remaining after deletion");
    //       dispatch({ type: 'UPDATE_TASKS', payload: updatedTasks });
    //     }
    //     setdeletebutton(true);
    //   }
    // } catch (error) {
    //   console.error("Error deleting task:", error);
    // }
  };
  
  async function handleAddTask() {
    if (!productdetails.productname || !productdetails.productdescription || !productdetails.productprice || !productdetails.imageurl) {
      console.error("Please fill in all required fields");
      setErrors({
        productname: !productdetails.productname,
        productdescription: !productdetails.productdescription,
        productprice: !productdetails.productprice,
        imageurl : !productdetails.imageurl
      });
      return;
    }
    try {
       (`hit g`);
   
      const response = await axios.post("https://guvi-ecom-nodejs-be-1.onrender.com/createproduct", {
        ...productdetails,
       
      });
      if (response.status === 200) {
 console.log(`saved`)
// const datas = [...datastorender, ...productdetails ];
 const datas = [...datastorender , productdetails]     
 console.log(datas
 );   // console.log(...datastorender , ...productdetails);
   // dispatch(storeproductsSuccess(datas ));
       //const updated = response;
       //console.log(updated);
  //      dispatch({ type: 'UPDATE_TASKS', payload: updatedTasks });
      
        setsavedbutton(true);
        setTimeout(() => {
          setsavedbutton(false);
        }, 1000);
        setproductdetails({
          productname: "",
    productdescription: "",
    productprice: "",
 imageurl : "" ,
    productrating :0 ,
    
        });

        
      } 
      else {
         ("Task details not saved");
      }
    } catch (err) {
       (err);
    }
  }


function handleupdatenewchanges(product){


var datacopy = [...datastorender];

var newdatas = datacopy.fi




}












  async function handleclickedit(editedproductdetails, taskid) {
    if (!editedproductdetails.productname || !editedproductdetails.productdescription || !editedproductdetails.productprice) {
      console.error("Please fill in all required fields");
      return;
    }
  
    try {
      const response = await axios.put(`https://guvi-ecom-nodejs-be-1.onrender.com/updateuser/${taskid}`, editedproductdetails);
      if (response) {
         ("Task updated successfully");
         (response.data); // Assuming the response contains the updated task object
   (response.data.user);
        // Dispatch an action to update Redux state with the updated task
        dispatch(storeediteddata(response.data.user)); // Assuming storeTasksSuccess action creator is defined
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  }
  
  useEffect(() => {
     (selectedStatus);
    const filteredproducts = selectedStatus
      ? tasks.filter(task => task.taskstatus === selectedStatus)
      : tasks;
    setfilteredproducts(filteredproducts);
  }, [selectedStatus, tasks]);




  
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Navbar cartcount ={cartcount} />
        </Grid>
      </Grid>


{/* section for admin starts */}




{ validadmin ? (
  <Grid container className={styles.homepagefields}>
        <Grid item>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '20ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-controlled1"
              label="product Title"
              onChange={(event) => {
                setproductdetails({ ...productdetails, productname: event.target.value });
                if (event.target.value.length > 0) {
                  setErrors({ ...errors, productname: false });
                }
              }}
              error={errors.productname}
              helperText={errors.productname ? 'Task name is required' : ''}
              value={productdetails.productname}
            />
            <TextField
              id="outlined-controlled2"
              label="product Description"
              onChange={(event) => {
                setproductdetails({ ...productdetails, productdescription: event.target.value });
                if (event.target.value.length > 0) {
                  setErrors({ ...errors, productdescription: false });
                }
              }}
              error={errors.productdescription}
              helperText={errors.productdescription ? 'Task description is required' : ''}
              value={productdetails.productdescription}
            />
            <TextField
              id="outlined-controlled3"
              label="product price"
              onChange={(event) => {
                setproductdetails({ ...productdetails, productprice: event.target.value });
                if (event.target.value.length > 0) {
                  setErrors({ ...errors, productprice: false });
                }
              }}
              error={errors.productprice}
              helperText={errors.productprice ? 'Task category is required' : ''}
              value={productdetails.productprice}
            />
              <TextField
              id="outlined-controlled3"
              label="image url"
              onChange={(event) => {
                setproductdetails({ ...productdetails, imageurl: event.target.value });
                if (event.target.value.length > 0) {
                  setErrors({ ...errors, imageurl: false });
                }
              }}
              error={errors.imageurl}
              helperText={errors.imageurl ? 'Task category is required' : ''}
              value={productdetails.imageurl}
            />
              
            <Button
              variant="contained"
              size="small"
              onClick={handleAddTask}
              style={{ marginTop: 20, backgroundColor: savedbutton ? "green" : "rgb(25,118,210)" }}
            >
              {savedbutton ? (
                <>
                  <span>Products saved</span>
                  <DoneOutlineIcon />
                </>
              ) : "Add product"}
            </Button>
          </Box>
        </Grid>
      </Grid> 
) : (  <Grid container className={styles.homepagefields}>
<Typography variant=" h3" style={{color : "gold"}}>



        
 Welcome to zara dress shop
</Typography>
  </Grid>)


}

      {/* section for admin ends */}



{/* section for user starts*/}

    

{/* section for user ends */}



      {/* Sorting component */}
    

      {/* Task cards */}
      <Grid container>
      <Grid container rowGap={1} columnGap={5} className={styles.homepagecards}>
  {datastorender && datastorender.length > 0 ? (
    // Filter tasks based on selectedFilter before mapping
    datastorender.map((data, index) => (
      <Grid item md={3} key={data._id}>
        <Taskcard 
          productdetails={data} 
          handletaskdelete={handleTaskDelete}  
          handleclickedit={handleclickedit}  
          editable={editableCardId === data._id} 
          handleCardEdit={setEditableCardId}
          handlecart={handlecart}
          handleisproductalreadyadded= { handleisproductalreadyadded(data)}
          cartStatus={cartStatus}
        
       
          handleupdatenewchanges={handleupdatenewchanges}
        />
      </Grid>
    ))
  ) : (
    <Typography>{filteredproducts.length > 0 ? "loading..." : "No products found"}</Typography>
  )}
</Grid>

</Grid>

    </>
  );
}
