import './code-editor.css'
import { useRef } from 'react';
import MonacoEditor, {OnChange, OnMount} from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

interface CodeEditorProps {
    initialValue: string;
    onEditorChange(value: string): void;
   
    
}

const CodeEditor: React.FC<CodeEditorProps> = ({onEditorChange, initialValue}) => {
    const editorRef = useRef<any>();

    const handleEditorDidMount: OnMount = (editor) => {
        editorRef.current = editor; 
      }

    const handleChange: OnChange = (value) => {
        onEditorChange(value || '');
    }

    const onFormatClick = () => {
        const unformatted = editorRef.current.getValue();
        const formatted = prettier.format(unformatted, {
            parser: 'babel',
            plugins: [parser],
            useTabs: false,
            semi: true,
            singleQuote: true
        }).replace(/\n$/, '');
        editorRef.current.setValue(formatted);
    }

    return (
    <div className='editor-wrapper'>
        <button className='button button-format is-primary is-small' onClick={onFormatClick}>Format</button>
        <MonacoEditor
            value={initialValue}
            onMount={handleEditorDidMount}
            onChange={handleChange}
            theme='vs-dark' 
            language='javascript' 
            height="100%" 
            options={{
                wordWrap: 'on',
                minimap: {enabled: false},
                showUnused: false,
                folding: false,
                lineNumbersMinChars: 3,
                fontSize: 16,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2
            }}
        />
    </div>);
};

export default CodeEditor; 