import { useEffect, useState } from 'react'
import {Navigate,Route,Routes} from 'react-router-dom'

// Pages: 
import { Control } from '../pages/Control'
import { Configuration } from '../pages/Configuration'
import { Instructions } from '../pages/Instructions'

//Others:
import { useSerial } from '../../hooks/useSerial';
import { SerialObject } from '../../data/serialObject';
import {naab_motors_information} from '../../data/motors/naab_motors'
import { scara_position_information } from '../../data/motors/scara_motors'
import  naabImg  from '../../img/naab.jpg';
import  scaraImg  from '../../img/scara.png';

let serial = new SerialObject()


const defaultConfiguration = {
    robot: 'scara',
    baud: 1200,
    information: scara_position_information,
    imgRobot: scaraImg,
    prefix: ",",
    postfix: "",
    //robot: 'naab',
    //baud: 9600,
    //information: naab_motors_information,
    //imgRobot: naabImg,
    //prefix: "posiciones,",
    //postfix: "",
}

export const WebRoutes = () => {
    
    const [configuration, setConfig] = useState(defaultConfiguration)
    
    const serialHookParent = useSerial(serial, configuration)
    
    useEffect(() => {
      serialHookParent.serialHookObject.setConfig(configuration)
      console.log('configuration: ', configuration)
    }, [configuration])
    

    return (
        <Routes>
            <Route path="/"  element={<Control configuration={configuration} serialHook={serialHookParent.serialHookObject}/>}/>
            <Route path="/control"  element={<Control configuration={configuration} serialHook={serialHookParent.serialHookObject}/>}/>
            <Route path="/configuration"  element={<Configuration configuration={configuration} setConfiguration={setConfig} />}/>
            <Route path="/instructions"  element={<Instructions/>}/>
            <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
    )
}