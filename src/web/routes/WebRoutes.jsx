import { useState } from 'react'
import {Navigate,Route,Routes} from 'react-router-dom'

// Pages: 
import { Control } from '../pages/Control'
import { Configuration } from '../pages/Configuration'
import { Instructions } from '../pages/Instructions'

//Others:
import { useSerial } from '../../hooks/useSerial';
import { SerialObject } from '../../data/serialObject';
import {naab_motors_information} from '../../data/motors/naab_motors'
import  naabImg  from '../../img/naab.jpg';

let serial = new SerialObject()

export const WebRoutes = () => {
    
    const [configuration, setConfig] = useState({
        robot: 'naab',
        baud: 9600,
        information: naab_motors_information,
        imgRobot: naabImg
    })
    
    const serialHookParent = useSerial(serial, configuration.information, "posiciones,", "")
    
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