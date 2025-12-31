import pg from "pg";
import dotenv from "dotenv";

const {Client}=pg;
dotenv.config();

const db= new Client({
  host:process.env.DB_HOST,
  user:process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_NAME,
  port:process.env.POSTGRES_PORT,
});

db.connect((err)=>{
  if(err){
    console.log("DATABASE_CONNECTION_ERROR:",err);
  }
  console.log("database connected sucessfully");
});

export default db;

