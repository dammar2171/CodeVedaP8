import db from "../config/db.js";
import bcrypt from "bcrypt";

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