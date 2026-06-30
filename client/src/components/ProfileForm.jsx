import {useState} from 'react';

export default function ProfileForm(){
 const [form,setForm]=useState({name:'',bio:''});

 return (
  <form>
   <input
    placeholder='Name'
    value={form.name}
    onChange={e=>setForm({...form,name:e.target.value})}
   />
   <textarea
    placeholder='Bio'
    value={form.bio}
    onChange={e=>setForm({...form,bio:e.target.value})}
   />
   <button type='submit'>Save Profile</button>
  </form>
 );
}
