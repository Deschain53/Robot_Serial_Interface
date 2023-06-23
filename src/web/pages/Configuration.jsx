import { useState } from "react"
import { WebLayout } from "../layout/WebLayout"
import { SerialObject } from "../../data/serialObject";

export const Configuration = (//{serial = null}
  ) => {

  const [contador, setContador] = useState(0)

  const serialObject = new SerialObject();

  const handleButton = async() => {

    if ("serial" in navigator) {    // The Web Serial API is supported.
      const pO = await serialObject.selectPort();
      serialObject.setConfig(pO)
      serialObject.escribe("hi")

      console.log('HandleButton', serialObject)
    
      console.log('Puerto configurado')
    } else {
        console.log('Serial not soported')
    }

}

const mueve = (value = 2) => {
    setContador(contador + value)
    serialObject.mueveA(19,contador) 
    console.log('movido a : '+contador)
}

  return (
    <>
    <WebLayout/>

    <div>Configuracion</div>

    <div className="window-app">
            <h1>Configuration</h1>     
            <button
                type="submit"
                className="btn m-1 btn-block btn-outline-primary col-sm-6"
                onClick={ handleButton }
            >Seleccionar dispositivo</button> 
    </div>
    <button
        type="submit"
        className="btn m-1 btn-block btn-outline-primary col-sm-6"
        onClick={ () =>  serialObject.mueveA(19,5) }
    >+5</button>   
    <button
        type="submit"
        className="btn m-1 btn-block btn-outline-primary col-sm-6"
        onClick={ () => serialObject.escribe("M19,-15")}//serialObject.mueveA(19,-5)}
    >-5</button>   
    </>
  )
}