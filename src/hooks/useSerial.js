import React, { useState } from "react";

export const useSerial = () => {

//VARIABLES: // -----------------------------------------------------------------------------------------------------------

    //Variables related to internal configuration and state of serial device:
    //const [isConected, setConected] = useState(false);   //True para pruebas, false para produccion y uso 
    //const [port      , setPort]   = useState(null);  
    //const [reader    , setReader] = useState(null); 
    //const [writer    , setWriter] = useState(null);
    //const [isPortOpen, setPortOpen] = useState(false);

    let isConected = false
    let port       = null
    let reader     = null
    let writer     = null
    let isPortOpen = false

    //CAMBIAR USESTATE POR VARIABLES LET
    //Variables related to memory and others:
    const [history, setHistory] = useState([]);

//INTERNAL METHODS: -------------------------------------------------------------------------------------------------------
    const resetConfiguration = () => {
        port       = null
        reader     = null
        writer     = null
        isPortOpen = false                
        isConected = false
    }

    //Set the variables related to configuration and state of serial device:
    const setInternalConfiguration = async(portObject = null) => {
        //if(portObject != null){
            try{
                port       = port
                reader     = portObject.reader
                writer     = portObject.writer
                isPortOpen = true                
                isConected = true
            }catch(e){
              console.log(e)
            }
        //}  
    }

    const addToHistory = (newEntry = "") => {
        setHistory(history => [...history, newEntry]);
    }

//PUBLICS METHODS: --------------------------------------------------------------------------------------------------------

    //Gives a command to device througth serial port:
    const writeSerial = async(data = "hi") => {
        try{
            if(port){
                const encoder = new TextEncoder();    
                const dataArrayBuffer = encoder.encode(data);
            return writer.write(dataArrayBuffer);
            }            
        }catch(e){
            console.log(e)
        }
    }

    //Set internal configuration and gives the command "hi" to the device so it can detect the interface is conected:
    const setConfiguration = async() => {
        if ("serial" in navigator) {    // The Web Serial API is supported.
           
            const pO = await getPortObject();
            await setInternalConfiguration(pO);

            setTimeout(function(){
                escribe("hi");  //Mesage indicate to the serial device that the interface is conected
            },3000);

            console.log('setConfiguration',pO)
            console.log('setConfiguration','Puerto conectado')

        } else {
            console.log('Something went wrong with the conection');
        }
    }

    //If the serial device have motors and the chip is configured correctly it will send the command to move a specific motor to a specific position
    const moveMotorTo = (motor = 0, to = 0) => {
        if(isConected){
            writeSerial("M"+motor.toString()+","+to.toString());
            addToHistory("M"+motor.toString()+","+to.toString());
        }
    }

    const escribe = (comando = "") => {
        if(isConected){
            console.log(comando);
        }
    }

    return { isConected, setConfiguration, resetConfiguration, writeSerial, moveMotorTo, escribe}
}