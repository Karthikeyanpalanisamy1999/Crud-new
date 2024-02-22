const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CrudModel = require('./models/crud');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/CRUDS',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.post('/create',(req,res)=>{
  CrudModel.create(req.body)
  .then(crud=>res.json(crud))
  .catch(err=>res.json(err))
})

app.get('/',(req,res)=>{
    CrudModel.find({})
    .then(crud=>res.json(crud))
    .catch(err=>res.json(err))
})

app.get('/getuser/:id',(req,res)=>{
    const id = req.params.id
    CrudModel.findById({_id:id})
    .then(crud=>res.json(crud))
    .catch(err=>res.json(err))
})
app.put('/update/:id',(req,res)=>{
    const id = req.params.id
    CrudModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        age:req.body.age,
        mobile:req.body.mobile
    })
    .then(crud=>res.json(crud))
    .catch(err=>res.json(err))
})

app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    CrudModel.findByIdAndDelete({_id:id})
    .then(crud=>res.json(crud))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("Server Running")
})
