const {reviewCode}=require("../services/aiService");

exports.createReview=async(req,res)=>{
  try{
    const {code,language}=req.body;
    const result=await reviewCode(code,language);
    res.json(result);
  }catch(err){
    res.status(500).json({message:err.message});
  }
};
