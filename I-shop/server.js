
import { urlencoded, json } from 'express';
import express from "express"
import cors from 'cors';
import { MongoClient as mongoClient } from "mongodb";



var connectionString = "mongodb://127.0.0.1:27017";
var app = express();
app.use(cors());
app.use(urlencoded({
    extended:true
}));
app.use(json());


app.get("/getusers",async (req,res)=>{
    try{
        const obj = await mongoClient.connect(connectionString)
        const database = obj.db("reactdb")
        const document = await database.collection("tblusers").find({}).toArray()
        res.send(document)
        res.end()
    }catch(err){
        console.log(err)
    }
})

app.post("/register", async (req,res)=>{
    try{
        var userdetails = {
            UserId:req.body.UserId,
            UserName:req.body.UserName,
            Password:req.body.Password,
            Age:parseInt(req.body.Age),
            Mobile:req.body.Mobile,
            Subscribed:(req.body.Subscribed=="true")?true:false
        }
        const obj = await mongoClient.connect(connectionString)
        const database = obj.db("reactdb")
        await database.collection("tblusers").insertOne(userdetails)
        res.redirect("/getusers")
    }catch(err){
        console.log("err: ", err)
    }
})

app.listen(4000)
console.log("server started  :http://127.0.0.1:4000");

// app.get("/getusers",(req,res)=>{
//     mongoClient.connect(connectionString,(err,clientObj)=>{
//         if(!err){
//             var database = clientObj.db("reactdb");
//             database.collection("tblusers").find({}).toArray((err,documents)=>{
//                 if(!err){
//                     res.send(documents);
//                 }
//             });
            
//         }
//     })
// })



// app.post("/registeruser",(req,res)=>{
//     var userdetails = {
//         UserId:req.body.UserId,
//         UserName:req.body.UserName,
//         Password:req.body.Password,
//         Age:parseInt(req.body.Age),
//         Mobile:req.body.Mobile,
//         Subscribed:(req.body.Subscribed=="true")?true:false,
//     }
//     mongoClient.connect(connectionString,(err,clientObj)=>{
//         if(!err){
//             var database = clientObj.db("reactdb");
//             database.collection("tblusers").insertOne(userdetails,(err,result)=>{
//                 if(!err){
//                     console.log("Record Inserted");
//                     res.redirect("/getusers");
//                 }
//             })
//         }
//     })
// })

