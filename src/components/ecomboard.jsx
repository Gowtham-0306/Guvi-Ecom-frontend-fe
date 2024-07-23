import {Grid} from "@mui/material"
import styles from './taskboard.module.css'
import { Navbar } from "./navbar"
import {useState} from "react"
export function Taskboard({cartcount= {cartcount} , setisvalidadmincreds=()=>{}
,handleisalreadyadded=()=>{} , handleisproductalreadyadded=()=>{}

}){
console.log(cartcount);
console.log(`cou`);

return(

<>



    <Grid container>
    <Navbar cartcount={cartcount} setisvalidadmincreds={setisvalidadmincreds} handleisalreadyadded={handleisalreadyadded} handleisproductalreadyadded={handleisproductalreadyadded} />

    </Grid>




</>)



}