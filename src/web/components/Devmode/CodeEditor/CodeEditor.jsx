import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { EditorButtons } from "./EditorButtons";

export const CodeEditor = ({ 
    onChange, language="javascript", theme, initialCode, 
    serial = null, actions = [] , changeAuxMotors, code, setCode
  }) => {


  //const [action, clear] = actions;

  //Para ejecutar el codigo dentro del editor de codigo


  const handleCodeChange = (e) => {
    setCode(e);
  }


  const posicionInicial = () => {
    if(serial){
      serial.escribe('posiciones,0,0,-90,0,0,0,0,90,0,0,0,0,0,0,80,90,0,-70,-90,0');
    }
  }
  return (
    <div className="container">

      <EditorButtons code={code} setCode={setCode} serial={serial}/>

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


//{
    //<div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
    //  <Editor
    //  height="85vh"
    //  width={`100%`}
    //  language={language || "javascript"}
    //  value={value}
    //  //theme={theme}
    //  defaultValue="// some comment"
    //  onChange={handleEditorChange}
    //  />
    //</div>
//}

//<input
//type="file"
//multiple={false} 
//onChange={readFile}
///>