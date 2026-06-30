exports.getProfile=(req,res)=>{
  res.json({
    name:"Demo User",
    email:"demo@example.com",
    avatar:"",
    bio:"Aspiring Full Stack Developer"
  });
};

exports.updateProfile=(req,res)=>{
  res.json({
    message:"Profile updated (demo)",
    data:req.body
  });
};
