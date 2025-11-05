const express=require('express');
const route=require('./routes/signRoutes');
const path=require('path');

const app=express();
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    
    try{
        //console.log("file path : ",path.join(__dirname,'..','frontend',"index.html"));
        res.sendFile(path.join(__dirname,'..','frontend',"index.html"));
    }catch(err)
    {
        res.send(`error comes : ${err}`);
    }
    
    
})

app.use("/api",route);

app.listen(2300,()=>{
    console.log("Server is running on port 23000");
})