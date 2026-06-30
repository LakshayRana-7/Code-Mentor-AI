import {useEffect,useState} from "react";
import api from "../services/api";
import ReviewCard from "../components/ReviewCard";

export default function History(){
 const [reviews,setReviews]=useState([]);

 useEffect(()=>{
  api.get("/history").then(res=>setReviews(res.data));
 },[]);

 return (
  <div style={{padding:"20px"}}>
   <h1>Review History</h1>
   {reviews.map(r=><ReviewCard key={r._id} review={r}/>)}
  </div>
 );
}
