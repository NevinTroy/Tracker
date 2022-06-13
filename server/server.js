const express=require('express');

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const port=process.env.PORT || 3000;

app.get('/',(req,res)=>{res.send(`Server running on ${port}`)});

app.listen(port,()=>{
    console.log(`Server Running`);
})