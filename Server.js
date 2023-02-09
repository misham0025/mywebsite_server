const express=require("express")
const app=express()
app.use(express.json())
app.listen(5099)
console.log("working...")
require('dotenv').config();

const cors=require("cors")
const Mongodb=require("Mongodb")
const Mongoclient=Mongodb.Mongoclient
app.use(cors({origin:"http://localhost:3000"}))
const mongodb=require("mongodb")
const mongoClient=mongodb.MongoClient

const response={
    name:"misham"
}

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