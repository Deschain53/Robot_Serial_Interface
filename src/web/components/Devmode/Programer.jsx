import { useState } from "react";
import { CodeEditor } from "./CodeEditor/CodeEditor";
import { Consola } from "./Consola/Consola";

export const Programer = ({ history, addToHistory, resetHistory, writte,}) => {

    const [code, setCode] = useState("//Agrega tu código aquí");

    ////////////////
    //Funcion a ejecutar cuando se presione el boton de enviar rutina
    //const agregaLineasACodigo = (newcode='') => {
    //    setCode(code + '\n' + newcode)
    //}

    //Funcion para modificar consola de acuerdo al comando ejecutado
    const actionCommandLine = (c='') => {
      switch (c.toLowerCase() ) {
        case 'clear':
          resetHistory();   //Reiniciando arreglo de consola
          break;
      
        default:
          writte(c);
          addToHistory(c)
          break;
      }
    }

    return (
    <div className="container">
        {<div className="row mt-2 pb-3">
            <Consola 
                action = {actionCommandLine} 
                history ={history}/>
        </div>}
    </div>
    )
}

//<div className="row mt-3">
//<CodeEditor serial = {serial} actions = {actions} changeAuxMotors={changeAuxMotors} code={code} setCode={setCode}/>
//</div>