import { useState } from "react";
import { createData } from  "../../../data/dataValidators";
import { CodeEditor } from "./CodeEditor/CodeEditor";
import { Consola } from "./Consola/Consola";

export const Devmode = ({serial}) => {

    const [code, setCode] = useState("//Agrega tu código aquí");
    const [consola, setConsola] = useState([createData('',">>","",0)]);
    const [wantAuxMotors, setWantMotors] = useState(true)

    //Funcion a ejecutar cuando se ejecuta un comando
    const enviaComando = (command = '') => {
        console.log('Comando ' + command)
        if(serial){
            serial.escribe(command)
        }
    }

    //Funcion para limpiar consola
    const limpiaConsola = () => {
        setConsola([createData('',">>","",0)]);
    }

    //Funcion para cambiar estado de auxiliarMotors
    const changeAuxMotors = () => {
        setWantMotors(!wantAuxMotors)
    }

    //Funcion a ejecutar cuando se presione el boton de agregar rutina
    const agregaLineasACodigo = (newcode='') => {
        setCode(code + '\n' + newcode)
    }



    //Funciones que podran ser ejecutadas desde el editor de código
    const actions = [enviaComando, limpiaConsola]

    return (
    <div className="container">

        {/*
            wantAuxMotors 
            ?
                (
                <div className="row mt-3">
                    <AuxMotor serial = {serial} action={agregaLineasACodigo} />
                </div>
                )
            :
            (
                <></>
            )
            
        */}


        <div className="row mt-3">
            <CodeEditor serial = {serial} actions = {actions} changeAuxMotors={changeAuxMotors} code={code} setCode={setCode}/>
        </div>
    
        {<div className="row mt-2 pb-3">
            <Consola action = {enviaComando} consola ={consola} setConsola={setConsola}/>
        </div>}
    </div>
    )
}