import React from "react";
import useFetch from "./useFetch";

const useFetchProducts=()=>{
   const {data: products, loading, error}= useFetch('posts');
   return{products, loading, error};
}

export default useFetchProducts;

// Based upon feedback, it is good practice to utilize small hooks 
// for specific uses, find ways to use this.