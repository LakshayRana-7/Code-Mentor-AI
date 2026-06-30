const jwt=require("jsonwebtoken");
const User=require("../models/User");

const token=(id)=>jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"7d"});

exports.register=async(req,res)=>{
 try{
  const {name,email,password}=req.body;
  if(await User.findOne({email})) return res.status(400).json({message:"User exists"});
  const user=await User.create({name,email,password});
  res.status(201).json({token:token(user._id),user});
 }catch(e){res.status(500).json({message:e.message});}
};

exports.login=async(req,res)=>{
 try{
  const {email,password}=req.body;
  const user=await User.findOne({email});
  if(!user || !(await user.matchPassword(password)))
    return res.status(401).json({message:"Invalid credentials"});
  res.json({token:token(user._id),user});
 }catch(e){res.status(500).json({message:e.message});}
};
