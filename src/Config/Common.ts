import { useReducer } from "react";

const RouteName ={
     SPLASH:"Splash",
     LOGIN:"Login",
     SIGNUP:"Signup",
     BOTTOM:"BottomNav",

     HOME:"Home",
     TRANSECTIONS:"Transections",
     REPORTS:"Reports",
     ACCOUNT:"Account",

}
const AsyncKeys ={
     USER_DETAILS:"user_details",
     USER_ID:"userId"
}

const CollectionName = {
     EXPENSE:"expense_details",
     useReducer:"user_details",
}

export  {RouteName,AsyncKeys,CollectionName};