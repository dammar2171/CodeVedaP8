import db from "../config/db.js"

export const insertNotes=(req,res)=>{
  const {title,detail}=req.body;
  const userID = req.user.id;

  const sql = "INSERT INTO notes(title,detail,userId) VALUES(?,?,?);";

  db.query(sql,[title,detail,userID],(err,result)=>{
    if(err){
      console.log("DATABASE_ERROR:",err);
      return res.status(500).json({message:"insertion failed"});
    }
    return res.status(200).json({message:"data inserted sucessfully"});
  })
}

export const fetchNotes=(req,res)=>{
  const userID=req.user.id;

  const sql="SELECT * FROM notes WHERE userId=?";
  db.query(sql,[userID],(err,result)=>{
    if(err){
      console.log("Databse Error:",err);
      return res.status(500).json({message:"fetching error"});
    }
    return res.status(200).json({message:"data fetched sucessfully",result});
  })
}

export const deleteNote=(req,res)=>{
  const {title} = req.params;
  const userId = req.user.id;

  const sql="DELETE FROM notes WHERE title=? AND userId=?";

  db.query(sql,[title,userId],(err,result)=>{
    if(err) {
      console.log("DELETION_ERROR:",err);
      return res.status(500).json({message:"deletion error"});
    }
    return res.status(200).json({message:"deleted sucessfully"});
  })
}

export const updateNote=(req,res)=>{
  const {title}=req.params;
  const {updatedTitle,updatedDetail}=req.body;
  const userId=req.user.id;

  const sql = "UPDATE notes SET title=?, detail=? WHERE title = ? AND userId = ?";
  db.query(sql,[updatedTitle,updatedDetail,title,userId],(err,result)=>{
    if(err){
      console.log("UPDATION_ERROR:",err);
      return res.status(500).json({message:"updation error"});
    }
    return res.status(200).json({message:"updated sucessfully"});
  })
}