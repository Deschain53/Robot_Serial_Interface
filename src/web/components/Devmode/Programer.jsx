import { useState } from "react";
import { CodeEditor } from "./CodeEditor/CodeEditor";
import { Consola } from "./Consola/Consola";
import {EditorButtons} from "./CodeEditor/EditorButtons";


export const Programer = ({ history, addToHistory, resetHistory, writte, positionsInformation,}) => {

    const [code, setCode] = useState("//Agrega tu código aquí");

    //Funcion para modificar consola y escribir en serial de acuerdo al comando ejecutado
    const actionCommand = (c='') => {
      switch (c) {
        case 'clear':
            resetHistory();
            break;
      
        case 'clear dev':
            setCode('');
            break;

        case 'clear all':
            setCode('');
            resetHistory();
            break;
        
        case 'home':
            //writte('posiciones,0,0,-90,0,0,0,0,90,0,0,0,0,0,0,70,90,0,-80,-90,0'); //Home de Naab
            addToHistory(c)
            break;    

        default:
            writte(c);
            addToHistory(c)
            break;
      }
    }

    return (
    <div className="container">
        <div className="row mt-5">
            <EditorButtons 
                code = {code} 
                setCode={setCode} 
                actionCommand = {actionCommand} 
                positionsInformation = {positionsInformation}
            />
        </div>        
        <div className="row mt-3">
            <CodeEditor 
                code={code} 
                setCode={setCode}
            />
        </div>        
        <div className="row mt-2 pb-3">
            <Consola  
                action = {actionCommand} 
                history ={history}/>
        </div>
    </div>
    )
}

//<div className="row mt-3">
//<CodeEditor serial = {serial} actions = {actions} changeAuxMotors={changeAuxMotors} code={code} setCode={setCode}/>
//</div>