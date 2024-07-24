import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Read() {
 const[data,setdata]= useState([]);
/* useEffect(()=>{
  axios.get("https://667fb02df2cb59c38dc97dd5.mockapi.io/crud")
.then((resolve)=>{
  setdata(resolve.data);
})
},[]) */
const getdata = ()=>{
axios.get("https://667fb02df2cb59c38dc97dd5.mockapi.io/crud")
.then((resolve)=>{
  setdata(resolve.data);
}).catch((error)=>{
  document.write(error);
})
}


function handlwdelete(id){
 
axios.delete(`https://667fb02df2cb59c38dc97dd5.mockapi.io/crud/${id}`)
.then(()=>{
  getdata();
}).catch((error)=>{
  document.write(error);
})
}

function setlocalstoragedata(id,name,age,email){
localStorage.setItem("Id:",id);
localStorage.setItem("Name:",name);
localStorage.setItem("Age:",age);
localStorage.setItem("Email:",email);
}
useEffect(()=>{
  getdata();

},[])
  return (
    <div className='container'>
     

      
      <div className='text-center bg-primary mt-3'>
        <h1>Display All Record From Feching Api..</h1>
      </div>
      <div>
        <Link to='/create'>
        <button className='btn  btn-primary my-3 '>Create New Data</button>
        </Link>
      </div>
      <table className='table table-bordered table-striped'>
        <thead className='fs-5'>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>

        </thead>
        <tbody>
       {
        data.map((item)=>{
          const {id,e_name,e_age,e_email}=item;
          
          return(
<>
<tr>
            <td> {id} </td>
            <td> {e_name} </td>
            <td>{e_age}</td>
            <td>{e_email}</td>
            <td>
            <Link to='/Edit'>    
            <button className='btn btn-primary' onClick={()=>setlocalstoragedata(item.id, item.e_name , item.e_age , item.e_email)} >Edit</button>
            </Link>
            </td>
            <td>
              
              <button className='btn btn-danger' onClick={()=> {  if (window.confirm("Are you Sure?")) {handlwdelete(id)}}}>Delete</button>
            </td>
            </tr> 
             </>
          )
            
       
        })
       }
          
        </tbody>
      </table>
      </div>

  )
}
