const dbConnect = require('./mongodb')
const express = require('express');
const app=express();
app.use(express.json())

//get API -read/fetch

app.get('/', async (req, res) => {
  let result=await dbConnect();
 result = await result.find().toArray();
  res.send(result);
});

//post API - insert data (post->body->json->written data to insert)

app.post('/',async(req,res) =>{
  let result = await dbConnect();
  result=await result.insertOne(req.body);
  res.send("data inserted successfully")
});

//put API (update data)

app.put('/:name',async(req,res)=>{
  let result=await dbConnect();
  result=await result.updateOne({name:req.params.name},{$set:req.body});
  res.send("data updated successfully")
});

//delete API

app.delete('/:name',async(req,res)=>{
  let result = awaitdpConnect();
  result=await result.deleteOne({name:req.params.name})
  res.send("data deleted successfully");
})

app.listen(3000);