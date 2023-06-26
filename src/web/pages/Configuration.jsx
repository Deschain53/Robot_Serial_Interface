import { useState } from "react"
import { WebLayout } from "../layout/WebLayout"
import { SerialObject } from "../../data/serialObject";
import { useSerial } from "../../hooks/useSerial";

export const Configuration = ({serial},  
  ) => {

  const serialHook = useSerial(serial, [0,0,-90,0,0,0,0,90,0,0,0,0,0,90,80,90,0,-80,-90,0], "posiciones", "")

  return (
    <>
    <WebLayout/>

    <div>Configuracion</div>

    <div className="window-app">
            <h1>Configuration</h1>     
            <button
                type="submit"
                className="btn m-1 btn-block btn-outline-primary col-sm-6"
                onClick={ () => serialHook.setConfiguration() }
            >Seleccionar dispositivo</button> 
    </div>
    <button
        type="submit"
        className="btn m-1 btn-block btn-outline-primary col-sm-6"
        onClick={ () => serialHook.writte("M19,+15")}
    >+5</button>   
    <button
        type="submit"
        className="btn m-1 btn-block btn-outline-primary col-sm-6"
        onClick={ () => serialHook.writte("M19,-15")}//serialObject.mueveA(19,-5)}
    >-5</button>   
    <button
      type="submit"
      className="btn m-1 btn-block btn-outline-primary col-sm-6"
      onClick={ () => serialHook.resetConfiguration() }
    >Resetear configuracion</button> 
    <button
      type="submit"
      className="btn m-1 btn-block btn-outline-primary col-sm-6"
      onClick={ () => console.log(serial) }
    >Print serial</button> 
    </>
  )
}
