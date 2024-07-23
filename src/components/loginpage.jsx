import { Checkbox, Grid, Input ,FormLabel, InputLabel} from "@mui/material";
import styles from "./banner.module.css";

import axios from "axios";
import TextField from "@mui/material/TextField";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { Userdetails } from "./userdetails";
import {Homepage} from "./homepage"
import { useDispatch , useSelector } from "react-redux";
import { fetchDataFromAPI } from "./redux/reducers/apidatas";
import {  checkisvalidadmin , storeusercartdetails} from "./redux/reducers/productdetailsreducer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export function Login({

  modal = false,
  handlemodalClose = () => {},
  modaltype = "login",
  setisvalidadmincreds =()=>{},


  

}) {
  //   (`${modaltype} hit`);






let dispatch = useDispatch();
  const navigate = useNavigate();
  const isvalidadminuser = useSelector((state)=>state.productdetails.isvalidmin);


  //  (isHomePresent);
 
  const userid = localStorage.getItem('userid');
  const defaultuserCredentials = {
    Username: "",
    password: "",
    email: "",
    phonenumber: "",
    areyouadmin : false
  };
  const [userCredentials, setuserCredentials] = React.useState(
    defaultuserCredentials
  );
  const [redirectToHome, setRedirectToHome] = React.useState(true);
  const [signupsuccess, setsignupsuccess] = React.useState(false);
  const [loginfailed, setloginfailed] = React.useState(false);
 
  const location = useLocation(); // Get the location object
  const currentPath = location.pathname; 

  const [errors, setErrors] = useState({
    Username: false,
    password: false,
    email: false,
    phonenumber: false,
    areyouadmin : false
  });



 (userCredentials);

  function handleloginerror() {
     (`hit`);

setloginfailed(false);
setsignupsuccess(false);


  }

  function handleregistration(buttontype) {
    if (buttontype === "registration") {
      //  (userCredentials);
      if (!userCredentials.Username || !userCredentials.password || !userCredentials.email || !userCredentials.phonenumber ) {
        console.error("Please fill in all required fields");
 (userCredentials.phonenumber);
        setErrors({
          Username: !userCredentials.Username ,
          password: !userCredentials.password,
          email: !userCredentials.email,
          phonenumber: !userCredentials.phonenumber,
     
        })



        return; // Prevent further execution
      }




 (userCredentials);

      axios({
        method: "post",
        url: "https://guvi-ecom-nodejs-be-1.onrender.com/createuser",
        data: {
          ...userCredentials,
        },
      }).then((response)=>{


         ("User created successfully!!!", response.data);


        setsignupsuccess(true);
        setuserCredentials(defaultuserCredentials);

      }).catch((error)=>{

        console.error("Error creating user:", error.response.data);
        // You can also check for specific error status codes and handle them differently if needed
        if (error.response.status === 400) {

          console.error("Bad request - Invalid data:", error.response.data);
        }



      });
    
    
    
    
    
    
    
    
    
    } else {
      handlelogin(userCredentials);
    }
  }

  async function handlelogin(userCredentials) {
    //  const navigate = useNavigate();
    if (!userCredentials.Username || !userCredentials.password ) {
      console.error("Please fill in all required fields");
 (userCredentials.phonenumber);
      setErrors({
        Username: !userCredentials.Username ,
        password: !userCredentials.password,
       
      })



      return; // Prevent further execution
    }




     (userCredentials);
    Userdetails(userCredentials.areyouadmin);

    const response = await axios({
      method: "post",
      url: "https://guvi-ecom-nodejs-be-1.onrender.com/login",
      data: {
        ...userCredentials,
      },
    }).then((response)=>{


       ("successfull");


       
  
        if (response.status === 200) {

          localStorage.setItem('username' , `${userCredentials.Username}`);
       

if(userCredentials.areyouadmin){

  localStorage.setItem('isAdmin', 'true');
  
  localStorage.setItem('userid', `${response.data.userdetails._id}`);
   (`admin tried`);
}

           (`valid userr`);
   (response.data.userdetails.areyouadmin);

  fetchDataFromAPI(response.data.userdetails.areyouadmin);
  
          const token = response.data.token;
  
          localStorage.setItem("token", token);
  
   (userCredentials.areyouadmin);
  
          navigate("/home");
          dispatch(checkisvalidadmin(userCredentials.areyouadmin));
          fetchDataFromAPI(dispatch);
          setuserCredentials(defaultuserCredentials);
        
  
  
        } else  {
          alert("invalid creds");
           ("invalid user");
        }
      


      


   

    }).catch((error)=>{

      console.error("Error creating user:", error);
      // You can also check for specific error status codes and handle them differently if needed
      // if (error.response.status === 400) {

setloginfailed(true);


      // }



    });;

   
  }
  return (
    <>
      <Grid container>
        <Modal
          open={modal}
          onClose={()=>{
             (`h`);

           
           

            

          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ height: "500px" }}
        >
          <Box sx={style}>

          <Typography id="modal-modal-title" variant="h6" component="h2" color= "green">
              {modaltype != "login" && signupsuccess
                ? "Signup success ! you can log in now" 
                : ""}
            </Typography>

            <Typography id="modal-modal-title" variant="h6" component="h2" color= "red">
              {modaltype === "login" && loginfailed
                ? "log in failed enter valid Credentials" 
                : ""}
            </Typography>




            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modaltype === "login"
                ? "Enter your credentials to log in"
                : "Enter your credentials to signup"}
            </Typography>




            { modaltype === "login" &&(
     <Typography variant="h6" style={{fontSize : "smaller" , color : "red"}}>

     Note : select "Are you admin" checkbox only if you have Admin log in credentials
     </Typography>
)


}
       
            <Grid item>
              <DialogContent>
                <TextField
                  autoFocus
                  required
                
                  margin="dense"
                  id="username"
                  name="Username"
                  label="Username"
                  type="email"
                  fullWidth
                  variant="standard"
                  onChange={(event) => {
                    setuserCredentials({
                      ...userCredentials,
                      Username: event.target.value,
                    });
              
                     (event.target.value);

                    if(event.target.value.length > 0){
setErrors({...errors ,
  Username : false
                   });
                    }
                    
                     (userCredentials);
                  }}

                  error={errors.Username}
                  helperText={errors.Username ? 'Username is required' : ''} 


                />

                <TextField
                  autoFocus
                  required
                 
                  
                  margin="dense"
                  id="password"a
                  name="password"
                  label="password"
                  type="password"
                  fullWidth
                  variant="standard"
                  onChange={(event) => {
                    setuserCredentials({
                      ...userCredentials,
                      password: event.target.value,
                    });


                    if(event.target.value.length > 0){
                      setErrors({...errors ,
                        password : false
                                         });
                                          }


                  }}



                  error ={errors.password}
                  helperText={errors.password ? 'password is required' : ''} 
                />


<InputLabel   error={errors.areyouadmin} >
               Are you admin

             
               <Checkbox    value={userCredentials.areyouadmin}     checked={userCredentials.areyouadmin}            onChange={(event) => {
                 (event.target.checked);
                        setuserCredentials({
                          ...userCredentials,
                          areyouadmin: event.target.checked,
                        });

                        if(event.target.checked){
                          setErrors({...errors ,
                            areyouadmin : false
                                             });
                                              }
                        
                        //  (userCredentials);
                      }}>
                
               </Checkbox>
              
               </InputLabel>




                {modaltype === "registration" && (
                  <>
                    <TextField
                      autoFocus
                      required
                    
                      margin="dense"
                      id="email"
                      name="email"
                      label="email"
                      type="email"
                      fullWidth
                      variant="standard"
                      onChange={(event) => {
                        setuserCredentials({
                          ...userCredentials,
                          email: event.target.value,
                        });

                        if(event.target.value.length > 0){
                          setErrors({...errors ,
                            email : false
                                             });
                                              }


                      }}
                      error ={errors.email}
                      helperText={errors.email ? 'email is required' : ''} 
                    />

                    <TextField
                      autoFocus
                      required
                  
                      margin="dense"
                      id="phonenumber"
                      name="phonenumber"
                      label="phonenumber"
                      type="number"
                      fullWidth
                      variant="standard"
                      onChange={(event) => {
                        setuserCredentials({
                          ...userCredentials,
                          phonenumber: event.target.value,
                        });

                        if(event.target.value.length > 0){
                          setErrors({...errors ,
                            phonenumber : false
                                             });
                                              }
                        
                        //  (userCredentials);
                      }}
                      error ={errors.phonenumber}
                      helperText={errors.phonenumber ? 'Phone number is required' : ''} 
                    />
                  

<Box sx={{marginTop : 2}} fullWidth >



               

</Box>
                 


             
       



   

                    









                  </>
                )}


                
              </DialogContent>
            </Grid>

            <DialogContent>
              <Button
                variant="contained"
                style={{ marginRight: 4 }}
                onClick={(e) => {
                  handleregistration(modaltype);


                  Userdetails(userCredentials);
                }}
              >
                {modaltype === "login" ? "login" :  "signup"}
              </Button>
              <Button variant="contained" onClick={()=>{

handlemodalClose();

setErrors({
  Username: false ,
  password: false,
  email: false,
  phonenumber: false ,
})


setloginfailed(false);
setsignupsuccess(false);

              }}>
                close
              </Button>
            </DialogContent>
          </Box>
        </Modal>
      </Grid>
    </>
  );
}
