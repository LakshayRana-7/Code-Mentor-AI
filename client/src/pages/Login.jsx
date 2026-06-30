import {useState,useContext} from 'react';
import api from '../services/api';
import {AuthContext} from '../context/AuthContext';

export default function Login(){
 const {login}=useContext(AuthContext);
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');

 const submit=async(e)=>{
  e.preventDefault();
  const res=await api.post('/auth/login',{email,password});
  login(res.data);
  alert('Login successful');
 };

 return (
 <form onSubmit={submit}>
  <h2>Login</h2>
  <input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
  <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} />
  <button>Login</button>
 </form>);
}
