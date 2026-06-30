import Editor from '@monaco-editor/react';
import {useState} from 'react';

export default function CodeEditor(){
  const [language,setLanguage]=useState('javascript');
  const [code,setCode]=useState('// Start coding...');

  return (
    <div>
      <select value={language} onChange={e=>setLanguage(e.target.value)}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="cpp">C++</option>
      </select>

      <Editor
        height="70vh"
        theme="vs-dark"
        language={language}
        value={code}
        onChange={(v)=>setCode(v||'')}
      />
    </div>
  );
}
