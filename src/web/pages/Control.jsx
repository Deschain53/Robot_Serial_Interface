import React, { useState } from 'react';
import { PmodeButton } from '../components/Buttons/DevModeButton';
import { WebLayout } from '../layout/WebLayout';
import { BasicMode } from '../components/BasicMode/BasicMode';
import { Devmode } from '../components/Devmode/DevMode';
import { useSerial } from '../../hooks/useSerial';
import { SerialObject } from '../../data/serialObject';

let serial = new SerialObject()    

export const Control = () => {
    const serialHook = useSerial(serial)

    return (
<>
    <WebLayout/>

        <button
            type="submit"
            className="btn m-1 btn-block btn-outline-primary col-sm-6"
            onClick={ () => serialHook.setConfiguration() }
        >Seleccionar dispositivo</button> 
        <button
            type="submit"
            className="btn m-1 btn-block btn-outline-primary col-sm-6"
            onClick={ () => serialHook.resetConfiguration() }
        >Reset configuration</button> 
        
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
                
        <div className="container">
            <div className="row">
                <Devmode serial = { serial }/>
            </div>
        </div>
                

        </>

        
    )
}


