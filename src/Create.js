import React, { useState } from "react"
import axios from 'axios';
function Create() {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [mobile,setMobile] = useState('');
    const[image,setImg] = useState('');
    const [arr,setArr] = useState([{

    }])
    const Store=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/create",{name,age,mobile,image})
        .then(response=>setArr([...arr,response.data]))
        .catch(err=>console.log(err))
        window.location.href='/';
    }

  return (
<div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white justify-content-center align-items-center p-3">
         <h3 className="d-flex justify-content-center align-items-center">Create</h3>
            <form onSubmit={Store}>
                <div className="mt-3">
                    <label className="mt-1">Name</label>
                    <input type="text" className="form-control mt-1" required placeholder="Enter Name..."
                    onChange={(e)=>setName(e.target.value)} value={name}></input>
                </div> 
                <div className="mt-3">
                    <label className="mt-1">Age</label>
                    <input type="text" className="form-control mt-1" required placeholder="Enter Age..."
                    onChange={(e)=>setAge(e.target.value)} value={age}></input>
                </div> 
                <div className="mt-3">
                    <label className="mt-1">Mobile No</label>
                    <input type="text" className="form-control mt-1" placeholder="Enter Moblie no..."
                    onChange={(e)=>setMobile(e.target.value)} required value={mobile}></input>
                </div> 
                
                <div className="mt-3 ms-2">
                    <button className="btn btn-success">Submit</button>
                </div>
            </form>
      </div>
    </div>
  )
};

export default Create;
