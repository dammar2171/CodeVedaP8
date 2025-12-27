import mysql from "mysql2";

const db= mysql.createConnection({
  host:process.env.PORT,
  user:process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_NAME,
  xampp_port:process.env.XAMPP_PORT,
});

db.connect((err)=>{
  if(err){
    console.log("DATABASE_CONNECTION_ERROR:",err);
  }
  console.log("database connected sucessfully");
});

export default db;

