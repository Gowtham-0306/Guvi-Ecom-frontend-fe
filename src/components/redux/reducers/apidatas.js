import axios from 'axios';
// import { storeTasksSuccess } from './taskdetailsreducer';
import { storeproductsSuccess  , checkisvalidadmin} from './productdetailsreducer';

// Function to fetch data from API



export  async function fetchDataFromAPI (dispatch = ()=>{} , usercreds) {
 
 


    const apiurl = `https://guvi-ecom-nodejs-be-1.onrender.com/getproductdetails`;



  try {
    const response = await axios.get(apiurl);


dispatch(storeproductsSuccess(response.data.
  productdetails));
  

// console.log(response.data.productdetails.areyouadmin);
  } catch (error) {
    throw error;
  }

 
};
fetchDataFromAPI()
