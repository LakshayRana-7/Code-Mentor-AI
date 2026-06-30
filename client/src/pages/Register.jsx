import {useState} from 'react';
import api from '../services/api';

export default function Register(){
 const [form,setForm]=useState({name:'',email:'',password:''});

 const submit=async(e)=>{
  e.preventDefault();
  await api.post('/auth/register',form);
  alert('Registration successful');
 };

 return (
 <form onSubmit={submit}>
  <h2>Register</h2>
  <input placeholder='Name' onChange={e=>setForm({...form,name:e.target.value})}/>
  <input placeholder='Email' onChange={e=>setForm({...form,email:e.target.value})}/>
  <input type='password' placeholder='Password' onChange={e=>setForm({...form,password:e.target.value})}/>
  <button>Create Account</button>
 </form>);
}
