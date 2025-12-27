import express from "express";
import dotenv from "dotenv";
import userRouter from "./src/routes/userRoute.js"
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors({
  origin:"http://localhost:5173/",
  methods:["GET","POST","PUT","DELETE"],
  allowedHeaders:["Content-Type","Authorization"],
}))

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use("/user", userRouter);

app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}`);
  
})