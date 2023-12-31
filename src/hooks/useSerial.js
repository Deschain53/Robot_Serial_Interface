import React, { useEffect, useState } from "react";
import { SerialObject } from "../data/serialObject";
import { createData } from "../data/dataValidators";

const historyDefault = createData('',">>","",0);

// Se encarga de gestionar la logica de la conexion serial
export const useSerial = (serialObject = new SerialObject(), 
    configuration={ robot: 'scara', baud: 115200, information: [], prefix:"", postfix:""}
    ) => {

//VARIABLES:  -----------------------------------------------------------------------------------------------------------

const [config, setConfig] = useState(configuration) // Configuracion del robot
const {robot,baud,information:motorsInformation } = config;

// Variables related to internal configuration and state of serial device:
const [isConected, setIsConected] = useState(false);   

// Variables related to positions:
const [positions, setPositions] = useState(   // Establece las posiciones a enviar
    motorsInformation.map( information => information.default )
); 

//const [direct, setDirect] = useState({x:0,y:0,z:0})
 
const prefix = config.prefix;
const postfix = config.postfix;
const positionsInformation = [positions, prefix, postfix]

// Variables related to memory and others:
const [history, setHistory] = useState([historyDefault]);     // Maneja el historial 

// use effect configuration
useEffect(() => {
    const newPositionInformation = config.information.map( information => information.default )
    
    if(robot == 'scara'){
       setPositions(([0,0]).concat(newPositionInformation).concat([0])) 
    } else {
        setPositions(newPositionInformation) 
    }

}, [config])

// CONFIGURATION METHODS: --------------------------------------------------------------------------------------------------------

    // Set the variables related to configuration and state of serial device:
    const setConfiguration = async() => {
        if ("serial" in navigator) {    // The Web Serial API is supported.
            addToHistory('Conexión iniciada...')
            console.log('useSerial > setConfiguration', 'Conexión iniciada')
            try{
                serialObject.setBaud(baud);
                const pO = await serialObject.selectPort();
                
                serialObject.setConfig(pO)
                serialObject.escribe("hi")
                addToHistory('Conexión establecida')
                setIsConected(true)
                addToHistory('Puerto abierto')
            }catch(e){
                addToHistory(e)
            }

          } else {
            console.log('Serial not soported')
            addToHistory('Su dispositivo o navegador no cuenta con conexión serial...')

        }
    }

    // Reset the configuration - NOT WORKING
    const resetConfiguration = () => {
        const resetResult = serialObject.resetConfiguration()     
        if(resetResult === "Reset succesfull") {
            setIsConected(false)
        }               
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
        let dataHistoryObject
        if(typeof(newEntry)  === "string") {
            dataHistoryObject = createData(newEntry,">>","",0)
        } else {
            dataHistoryObject = createData("No se pudo realizar la acción",">>","",0)
        }
        setHistory(history => [...history, dataHistoryObject]); //Esta funciona
    }

    // Reset history
    const resetHistory = () => {
        setHistory([createData('',">>","",0)])
    }

// POSITION METHODS: --------------------------------------------------------------------------------------------------------

    // If the serial device have motors and the chip is configured correctly it will send the command to move a specific motor to a specific position
    const modifyPosition = (position = 0, newValue = 0) => {
        
        //console.log('ModifyPosition, baud: ' + serialObject.baud)

        const modify = () => {
            let psto = positions;
            psto[position]= newValue;
            setPositions(psto);
            const message = prefix + psto.toString() +postfix ;
            writte(message);
        }

        if(isConected){
            const informationMotorPosition = config.information.find( info => info.id == position)
          if(informationMotorPosition != undefined){
            const minimo = informationMotorPosition.min;
            const maximo = informationMotorPosition.max;

            if ( (newValue >= minimo) || (newValue <= maximo) ){
                modify()
            }
          } else {
                modify()
          }
        }
    }

    const calculaCinemáticaDirectaScara = () => {
      const l1 = 20
      const l2 = 8
      const theta1 = positions[2]
      const theta2 = positions[3]
      const theta1F = theta1*(Math.PI/180)
      const theta2F = theta2*(Math.PI/180)
      const xP = Math.round( l1*Math.cos(theta1F) + l2*Math.cos(theta1F+theta2F) )
      const yP = Math.round( l1*Math.sin(theta1F) + l2*Math.sin(theta1F+theta2F) )
    
      return {xP,yP}
    }


    return {serialHookObject:{ setConfiguration, resetConfiguration, deleteAndSetConfiguration,
        isPortOpen, addToHistory,resetHistory, writte, modifyPosition,
        isConected, serialObject, history, positions, positionsInformation,
        setConfig, }}
}