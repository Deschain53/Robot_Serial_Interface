import React from "react";
import Editor from "@monaco-editor/react";

// Maneja el texto a escribir dentro del editor
export const CodeEditor = ({code, setCode}) => {

  const handleCodeChange = (e) => {
    setCode(e);
  }

  return (
    <div className="container">
      <div className="row">
        <Editor 
          height="50vh" 
          language="javascript"  
          value={"" ||code}
          onChange={(e) => handleCodeChange(e) }//(e) => setCode(e.target.value)}
          theme={'dark'}
          />
      </div>
    </div>
  );
};
