import { config } from "dotenv";
config();
import morgan from "morgan";
import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import sendEmail from "./routes/sendEmail.js"

const app = express();

app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(cors({Credentials:true}));
app.use(cookieParser());

app.use("/api",sendEmail);

app.get("/check",(req,res)=>{
    res.status(200).json({
        message:"running"
    })
})

app.all("/{*any}",(req,res)=>{  
    res.status(400).send("Page not found!!..");
});

export default app;