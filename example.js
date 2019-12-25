let e=require("express");
let b=require("body-parser")
let bc=require("bcryptjs")
let jwt=require("jsonwebtoken")
let app=e();
app.use(b.json())
const key="2se4sa32sr34s5r5a3rs4ts5=-*&@#$%+++__)(*&"
app.post("/",(req,res)=>{
let name = req.body.name;
let email=req.body.email;
let password=req.body.password;
let ry;
bc.hash(password,8,(err,data)=>{
    if(err){
        console.log(err)
    }else{
        ry=data;
    }
});
let token=jwt.sign({e:email,p:ry,n:name},key);
res.send(jwt.verify(token,key))
})
app.listen(3000)