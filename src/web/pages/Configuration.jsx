import { useState } from "react"
import { WebLayout } from "../layout/WebLayout"
import { SerialObject } from "../../data/serialObject";
import { useSerial } from "../../hooks/useSerial";

export const Configuration = ({serial},  
  ) => {

  const [contador, setContador] = useState(0)

  const serialHook = useSerial(serial)

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
