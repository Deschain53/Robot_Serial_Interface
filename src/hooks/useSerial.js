import React, { useState } from "react";
import { SerialObject } from "../data/serialObject";

export const useSerial = (serialObject = new SerialObject()) => {

//VARIABLES:  -----------------------------------------------------------------------------------------------------------

    // Variables related to internal configuration and state of serial device:
    //let serialObject = new SerialObject();    
    const [isConected, setIsConected] = useState(false);   

    // Variables related to memory and others:
    const [history, setHistory] = useState([]);     //Maneja el historial de comandos y posiciones
    const [dataArray, setDataArray] = useState([]); //Establece las posiciones a enviar

// INTERNAL METHODS: -------------------------------------------------------------------------------------------------------

    // Add new entry
    const addToHistory = (newEntry = "") => {
        setHistory(history => [...history, newEntry]);
    }

    // Configure the internal array 
    const configureDataArray = () => {

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

    // PUBLICS METHODS: --------------------------------------------------------------------------------------------------------

    // Reset the configuration
    const resetConfiguration = () => {
        serialObject.resetConfiguration()
        setIsConected(false)                
    }

    // Set the variables related to configuration and state of serial device:
    const setConfiguration = async() => {
        if ("serial" in navigator) {    // The Web Serial API is supported.
            const pO = await serialObject.selectPort();
            addToHistory('Conexión iniciada...')
            console.log('useSerial > setConfiguration', 'Conexión iniciada')

            serialObject.setConfig(pO)
            serialObject.escribe("hi")
            //console.log('useSerial > setConfiguration', pO)
            addToHistory('Conexión establecida')
            setIsConected(true)
            console.log('useSerial > setConfiguration', 'puerto abierto: '+isPortOpen())
            console.log('useSerial > setConfiguration', 'Puerto configurado')
            
            //console.log('useSerial > setConfiguration', serialObject)
          } else {
              console.log('Serial not soported')
        }
    }

    // Delete and set configuration
    const deleteAndSetConfiguration = () => {
        resetConfiguration()
        addToHistory('Serial configuration deleted')
        console.log('useSerial > deleteAndSetConfiguration','Serial configuration deleted')
        setConfiguration()
    }

    // send a string througth device using serialObject
    const writte = async(command = '') => {
        //console.log(serialObject)
        await serialObject.escribe(command)
    }
    
    // If the serial device have motors and the chip is configured correctly it will send the command to move a specific motor to a specific position
    const moveMotorTo = (motor = 0, to = 0) => {
        if(isConected){
            writte("M"+motor.toString()+","+to.toString())
            // Aplicar procesamiento de cadenas
        }
    }

    return { setConfiguration, resetConfiguration, deleteAndSetConfiguration,
        writte, isConected,moveMotorTo, serialObject, isPortOpen }
}