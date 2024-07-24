import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'

  
export default function () {
  const [id,setid]=useState(0);
  const [name,setname]=useState('');
  const [age,setage]=useState('');
  const [email,setemail]=useState('');
 const navigate=useNavigate();

  useEffect(() => {
  setid(localStorage.getItem ('Id:'));
  setname(localStorage.getItem('Name:'));
  setage(localStorage.getItem('Age:'));
  setemail(localStorage.getItem('Email:'));

  }, []);
  const handlupdate = (e)=> {
    e.preventDefault();
    axios.put(`https://667fb02df2cb59c38dc97dd5.mockapi.io/crud/${id}`,{
 e_name:name,
 e_age:age,
 e_email:email
    }).then(()=>{
      navigate('/');
    }).catch((error)=>{
      document.write(error);
    })
  }

  return (
    <div>
       <form onSubmit={handlupdate} > 
       <div className='mt-2'>
        <Link to='/'>
        <button className='btn btn-primary'><ion-icon name="arrow-back-outline"></ion-icon>Back</button>
        </Link>
       </div>
        <div className='bg-primary text-center my-2'>
<h1>Update Record in API..</h1>
        </div> 

        <div className="mb-3">
  <label htmlFor="Name" className="form-label">Enter Name:</label>
  <input type="text" className="form-control" value={name} onChange={(e) => setname(e.target.value)} id="exampleFormControlInput1" placeholder="name" />
</div>
  <div className="mb-3">
  <label htmlFor="Age" className="form-label">Enter Age:</label>
  <input type="number" className="form-control" value={age} onChange={(e) => setage(e.target.value)} id="exampleFormControlInput1" placeholder="21"/>
</div>
        <div className="mb-3">
  <label htmlFor="Email" className="form-label">Enter Email:</label>
  <input type="email" className="form-control" value={email} onChange={(e) => setemail(e.target.value)} id="exampleFormControlInput1" placeholder="name@example.com"   />
</div>
<div className='d-grid'>
<input type="submit"  value='Update' className='btn btn-primary'/>
</div>

</form>
    </div>
  )
}
