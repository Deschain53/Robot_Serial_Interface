import {Navigate,Route,Routes} from 'react-router-dom'
import { Control } from '../pages/Control'
import { Configuration } from '../pages/Configuration'
import { Instructions } from '../pages/Instructions'
import { useSerial } from '../../hooks/useSerial'
import { SerialObject } from '../../data/serialObject'


export const WebRoutes = () => {


    return (
        <Routes>
            <Route path="/"  element={<Control />}/>
            <Route path="/control"  element={<Control />}/>
            <Route path="/instructions"  element={<Instructions/>}/>
            <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
    )
}