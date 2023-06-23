import {Navigate,Route,Routes} from 'react-router-dom'
import { Control } from '../pages/Control'
import { Configuration } from '../pages/Configuration'
import { Instructions } from '../pages/Instructions'
import { useSerial } from '../../hooks/useSerial'


export const WebRoutes = () => {

    const serial = useSerial();

    return (
        <Routes>
            <Route path="/"  element={<Control serial={serial}/>}/>
            <Route path="/control"  element={<Control serial={serial}/>}/>
            <Route path="/configuration"  element={<Configuration serial={serial}/>}/>
            <Route path="/instructions"  element={<Instructions/>}/>
            <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
    )
}