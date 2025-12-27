import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupUser= async(req,res)=>{
  const {fullname,email,password}=req.body;

  const salt= await bcrypt.genSalt(10);
  const hashedPassword= await bcrypt.hash(password,salt);

  const sql="INSERT INTO USER(fullname,email,password) values(?,?,?);";

  db.query(sql,[fullname,email,hashedPassword],(err,result)=>{
    if(err){
      console.log("INSERTION_ERROR:",err);
      return res.status(500).json({message:"insertion failed"});
    }
    return res.status(200).json({message:"data inserted sucessfully"});
  });
}

export const loginUser= (req,res)=>{
  const {email,password}=req.body;
  console.log(email);
  
  const sql = "SELECT * FROM USER WHERE email=?";

  db.query(sql,[email],async(err,result)=>{
   if(err){
     console.log("FETCHING_ERROR:",err);
    return res.status(500).json({message:"fetching problem"});
   }

   if(result.length === 0){
    console.log("invalid email or password");
    return res.status(401).json({message:"Credential error"});
   }

   const response= result[0];

   const isValid= await bcrypt.compare(password,response.password);

   if(!isValid){
    return res.status(400).json({message:"credential not matched"});
   }
   
   const token = jwt.sign(
    {name:response.fullname,email:response.email},
    process.env.JWT_SECRET,
    {expiresIn:"1h"},
   )

  return res.status(200).json({
    message:"login sucessfull",
    token,
  })
})
}