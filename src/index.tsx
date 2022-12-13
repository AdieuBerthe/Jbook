import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { useState } from "react";
import {createRoot} from "react-dom/client";
import CodeEditor from './components/code-editor';
import Preview from './components/preview';
import bundle from './bundler';

const App = ()  => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');

  const onClick = async () => {
    const output = await bundle(input)
    setCode(output);

  };
  
  return (
  <div>
    <CodeEditor initialValue='//Start coding' onEditorChange={(value) => setInput(value)}/>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
    <Preview code={code} />
  </div>
  )};

const root = createRoot(document.getElementById('root')!);

root.render(<App />);