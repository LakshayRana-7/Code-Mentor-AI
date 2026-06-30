export default function PDFButton(){
 const download=()=>window.print();

 return (
   <button onClick={download}>
     Export Review (PDF)
   </button>
 );
}
