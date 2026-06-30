import CodeEditor from '../components/CodeEditor';

export default function NewReview(){
  return (
    <div style={{padding:'20px'}}>
      <h1>New AI Code Review</h1>
      <CodeEditor />
      <button style={{marginTop:'16px'}}>Review Code</button>
    </div>
  );
}
