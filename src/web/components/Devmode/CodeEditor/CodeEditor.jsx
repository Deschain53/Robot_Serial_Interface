// Maneja el texto a escribir dentro del editor
// src>web>components>Devmode>CodeEditor
import React from "react";
import Editor from "@monaco-editor/react";

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
          onChange={(e) => handleCodeChange(e) }
          theme={'dark'}
          />
      </div>
    </div>
  );
};
