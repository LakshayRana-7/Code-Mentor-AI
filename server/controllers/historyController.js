const Review=require("../models/Review");

exports.getReviews=async(req,res)=>{
 try{
  const reviews=await Review.find().sort({createdAt:-1});
  res.json(reviews);
 }catch(err){
  res.status(500).json({message:err.message});
 }
};

exports.deleteReview=async(req,res)=>{
 try{
  await Review.findByIdAndDelete(req.params.id);
  res.json({message:"Review deleted"});
 }catch(err){
  res.status(500).json({message:err.message});
 }
};
