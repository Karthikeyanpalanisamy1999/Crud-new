import axios from "axios"
import React, { useState,useEffect } from "react"
import { FaTrashAlt } from "@react-icons/all-files/fa/FaTrashAlt";
import { FaPen } from "@react-icons/all-files/fa/FaPen";
import { FaUserPlus } from "@react-icons/all-files/fa/FaUserPlus";
import { Link } from "react-router-dom";
function Read() {
    const [arr,setArr] = useState([{

    }])
    useEffect(()=>{
        axios.get('http://localhost:3001/')
        .then(response=>setArr(response.data))
        .catch(err=>console.log(err))
    },[])
    const handledelete=(id)=>{
        axios.delete('http://localhost:3001/delete/'+id)
        .then(response=>{console.log(response)
         window.location.reload();
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className="d-flex flex-wrap vh-100 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white justify-content-center align-items-center">
         <h3 className="d-flex justify-content-center align-items-center mt-5">List Of Produts</h3>
          <div>
             <Link to='/create' className="btn btn-success text-dark mt-3 ms-3 mb-3"><FaUserPlus/></Link>
          </div>
            <table className="table">
                <thead className="">
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((x,index)=>{
                            return <tr key={index}>
                                <td>{index+1}</td>       
                                <td>{x.name}</td>
                                <td>{x.age}</td>
                                <td>{x.mobile}</td>
                                <td>
                                    <Link to={`/update/${x._id}`} className="btn btn-warning"><FaPen/></Link>
                                    <button className="btn btn-danger ms-3 text-dark"
                                    onClick={(e)=>handledelete(x._id)}><FaTrashAlt/></button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
      </div>
    </div>
  )
};

export default Read;
