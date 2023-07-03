import { useEffect, useState } from 'react'
import {Navigate,Route,Routes} from 'react-router-dom'

// Pages: 
import { Control } from '../pages/Control'
import { Configuration } from '../pages/Configuration'
import { Instructions } from '../pages/Instructions'

//Others:
import { useSerial } from '../../hooks/useSerial';
import { SerialObject } from '../../data/serialObject';
import { scara_position_information } from '../../data/motors/scara_motors'
import  scaraImg  from  '../../../public/img/scara.png' //'../../img/scara.png';


let serial = new SerialObject()

const defaultConfiguration = {
    robot: 'scara',
    baud: 115200,
    information: scara_position_information,
    imgRobot: scaraImg,
    prefix: "",
    postfix: "",
}

//Contiene las rutas de toda la aplicación
export const WebRoutes = () => {
    
    const [configuration, setConfig] = useState(defaultConfiguration)
    
    const serialHookParent = useSerial(serial, configuration)
    
    useEffect(() => {
      serialHookParent.serialHookObject.setConfig(configuration)
      console.log('configuration: ', configuration)
    }, [configuration])
    
    return (
        <Routes>
            <Route path="/Robot_Serial_Interface/"  element={<Control configuration={configuration} serialHook={serialHookParent.serialHookObject}/>}/>
            <Route path="/Robot_Serial_Interface/control"  element={<Control configuration={configuration} serialHook={serialHookParent.serialHookObject}/>}/>
            <Route path="/Robot_Serial_Interface/configuration"  element={<Configuration configuration={configuration} setConfiguration={setConfig} />}/>
            <Route path="/Robot_Serial_Interface/instructions"  element={<Instructions/>}/>
            <Route path='*' element={<Navigate to="/Robot_Serial_Interface"/>}/>
        </Routes>
    )
}