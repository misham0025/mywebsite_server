const express=require("express")
const app=express()
app.use(express.json())
app.listen(process.env.PORT || 6826)
console.log("working...")
require('dotenv').config();
const cors=require("cors")
app.use(cors({origin:"http://localhost:3000"}))
const mongodb=require("mongodb")
const mongoClient=mongodb.MongoClient



app.get("/get",async(req,res)=>{
    try {
     const connection=await mongoClient.connect(process.env.MONGO_URL);
     const db=connection.db("misham");
    let response= await db.collection("movie").find().toArray()
     await connection.close();
     res.status(200).json(response)
 
    } catch (error) {
     res.status(500).json({message:"error"})
    }
 })