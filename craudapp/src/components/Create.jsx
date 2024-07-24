import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function Create() {
   const [name,setname] = useState('');
   const [Age,setAge] = useState('');
   const [Email,setEmail] = useState('');
   const navigate =useNavigate();
const handlesubmit = (e) =>{
    e.preventDefault();
    axios.post("https://667fb02df2cb59c38dc97dd5.mockapi.io/crud",{
        e_name:name,
        e_age:Age,
        e_email:Email
    }).then(()=>{
      navigate('/');
    }).catch((error)=>{
      document.write(error);
    })   
}

function aler(){
alert("Record insert..");
}
  return (

        <>
      <form onSubmit={handlesubmit} > 
       <div className='mt-2'>
        <Link to='/'>
        
        <button className='btn btn-primary'><ion-icon name="arrow-back-outline"></ion-icon>Back</button>
        </Link>
       </div>
        <div className='bg-primary text-center my-2'>
<h1>Insert Record in API..</h1>
        </div>

        <div className="mb-3">
  <label htmlFor="Name" className="form-label">Enter Name: </label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name" onChange={(e)=>setname(e.target.value)} />
</div>
        <div className="mb-3">
  <label htmlFor="Age" className="form-label">Enter Age:</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="21"  onChange={(e)=>setAge(e.target.value)}/>
</div>
        <div className="mb-3">
  <label htmlFor="Email" className="form-label">Enter Email:</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"  onChange={(e)=>setEmail(e.target.value)} />
</div>
<div className='d-grid'>
<input type="submit" value='submit' className='btn btn-primary' onClick={aler}  />
</div>

</form>
        </>
  )
}
