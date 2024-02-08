import React , {useState , useEffect} from "react";
let store = localStorage.getItem("islogin")
store = JSON.parse(store)

export default {
    checkLogin : function (){
       
       console.log(">>> condition check",store)
       if(store != null){
        return true;
       }
       else{
        return false;
       }
    },
    getEmail : function (){
        
        // console.log(">>>>>" , store)
        return store?.email;
    }
}