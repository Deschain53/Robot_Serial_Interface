import React, { useState } from "react";
import { SerialObject } from "../data/serialObject";
import { createData } from "../data/dataValidators";

const historyDefault = createData('',">>","",0);


export const useSerial = (serialObject = new SerialObject(), motorInformation = [{id: 0, text:"M0", min: -90, max: 90, default:0},],
    prefix = "", postfix = "") => {

//VARIABLES:  -----------------------------------------------------------------------------------------------------------

// Variables related to internal configuration and state of serial device:
const [isConected, setIsConected] = useState(false);   

// Variables related to memory and others:
const [positions, setPositions] = useState(   // Establece las posiciones a enviar
        motorInformation.map( information => information.default )
    ); 

const [history, setHistory] = useState([historyDefault]);     // Maneja el historial 

// CONFIGURATION METHODS: --------------------------------------------------------------------------------------------------------

    // Set the variables related to configuration and state of serial device:
    const setConfiguration = async() => {
        if ("serial" in navigator) {    // The Web Serial API is supported.
            const pO = await serialObject.selectPort();
            addToHistory('Conexión iniciada...')
            console.log('useSerial > setConfiguration', 'Conexión iniciada')

            serialObject.setConfig(pO)
            serialObject.escribe("hi")
            addToHistory('Conexión establecida')
            setIsConected(true)
            console.log('useSerial > setConfiguration', 'puerto abierto: '+isPortOpen())
            console.log('useSerial > setConfiguration', 'Puerto configurado')
          } else {
              console.log('Serial not soported')
        }
    }

    // Reset the configuration
    const resetConfiguration = () => {
        serialObject.resetConfiguration()
        setIsConected(false)                
    }

    // Delete and set configuration
    const deleteAndSetConfiguration = () => {
        resetConfiguration()
        addToHistory('Serial configuration deleted')
        console.log('useSerial > deleteAndSetConfiguration','Serial configuration deleted')
        setConfiguration()
    }

    // Check if serial is writtable
    const isPortOpen = () => {
        try{
            let isPortOpen = false;
            if(serialObject.port.writable.locked == true){
                isPortOpen = true;
            }
            //if(serialObject.)
            return isPortOpen;
        }catch(e){
            return false;
        }
    }

    // Send a string througth device using serialObject
    const writte = (command = '') => {
        //console.log(serialObject)
        serialObject.escribe(command)
    }


// MEMORY METHODS: --------------------------------------------------------------------------------------------------------

    // Add new entry to history
    const addToHistory = (newEntry = "") => {
        const dataHistoryObject = createData(newEntry,">>","",0)
        //if (history == [historyDefault] ){
        //    setHistory([dataHistoryObject]);
        //} else {
            setHistory(history => [...history, dataHistoryObject]); //Esta funciona
            //} 
    }

    // Reset history
    const resetHistory = () => {
        setHistory([createData('',">>","",0)])
    }

// POSITION METHODS: --------------------------------------------------------------------------------------------------------

    // If the serial device have motors and the chip is configured correctly it will send the command to move a specific motor to a specific position
    const modifyPosition = (position = 0, newValue = 0) => {
        
        if(isConected){
          if ( (newValue >= motorInformation[position].min) || (newValue <= motorInformation[position].max) ){
            let psto = positions;
            psto[position]= newValue;
            setPositions(psto);
            const message = prefix + psto.toString() +postfix ;
            writte(message);
          }
        }
    }

    return { setConfiguration, resetConfiguration, deleteAndSetConfiguration,
        isPortOpen, addToHistory,resetHistory, writte, modifyPosition,
        isConected, serialObject, history, positions}
}