import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Dashboard(){
return(
<>
<Navbar/>
<div style={{display:'flex'}}>
<Sidebar/>
<main style={{padding:'20px'}}>
<h1>Dashboard</h1>
<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px'}}>
<div style={{border:'1px solid #ccc',padding:'16px'}}>Total Reviews: 0</div>
<div style={{border:'1px solid #ccc',padding:'16px'}}>Languages Used: 0</div>
<div style={{border:'1px solid #ccc',padding:'16px'}}>Favorites: 0</div>
</div>
</main>
</div>
</>
);
}
