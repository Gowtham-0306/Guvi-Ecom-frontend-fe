import { Login } from "./loginpage";
import { storeediteddata , checkisvalidadmin } from "./redux/reducers/productdetailsreducer";
export async function Userdetails(usercred){


console.log(usercred);

const apiurl = `https://guvi-ecom-nodejs-be-1.onrender.com/getproductdetails`;



// try {
//   const response = await axios.get(apiurl);


// dispatch(checkisvalidadmin(response.data.
// productdetails.areyouadmin));


// // console.log(response.data.productdetails.areyouadmin);
// } catch (error) {
//   throw error;
// }



}