export default function ReviewCard({review}){
 return (
  <div style={{border:"1px solid #ddd",padding:"12px",marginBottom:"10px"}}>
   <h3>{review.language}</h3>
   <p>{review.summary}</p>
   <small>{new Date(review.createdAt).toLocaleString()}</small>
  </div>
 );
}
