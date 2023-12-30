
const express=require('express');
const app=express();
app.use(express.json());
//const app=express.Router();
//get request
app.get("/home",async(req,res)=>{
console.log("welcome to home  page")
res.send("hk=lo this is home")
})


//post request

app.post("/signin",async(req,res)=>{

    const {email,password}=req.body;
if (email=="nick@gmail.com") {
    res.json({
        sucess:"login success"
    })
} else {
    res.json({
        failed:"login failed"
    })
}

})

app.listen(3000,
    "0.0.0.0",
        ()=>{
    console.log("connected to port");
    });