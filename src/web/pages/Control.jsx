import React, { useState } from 'react';
import { PmodeButton } from '../components/Buttons/DevModeButton';
import { WebLayout } from '../layout/WebLayout';
import Button from '@mui/material/Button';
import { Devmode } from '../components/Devmode/DevMode';
import { useSerial } from '../../hooks/useSerial';
import { SerialObject } from '../../data/serialObject';
import { Controls } from '../components/Devmode/Controls/Controls';

let serial = new SerialObject()

const motorsInformation = [
    {id: 0, text:"M0", min: -90, max: 90, default:0},
    {id: 1, text:"M1", min: -90, max: 90, default:0},
    {id: 2, text:"M2", min: -90, max: 90, default:-89},
    {id: 3, text:"M3", min: -90, max: 90, default:0},
    {id: 4, text:"M4", min: -90, max: 90, default:0},
    {id: 5, text:"M5", min: -90, max: 90, default:0},
    {id: 6, text:"M6", min: -90, max: 90, default:0},
    {id: 7, text:"M7", min: -90, max: 90, default:89},
    {id: 8, text:"M8", min: -90, max: 90, default:0},
    {id: 9, text:"M9", min: -90, max: 90, default:0},
    {id: 10,text:"M10", min: -90, max: 90, default:0},
    {id: 11,text:"M11", min: -90, max: 90, default:0},
    {id: 12,text:"M12", min: -90, max: 90, default:0},
    {id: 13,text:"M13", min: -90, max: 90, default:0},
    {id: 14,text:"M14", min: -80, max: 80, default:70},
    {id: 15,text:"M15", min: 0,   max: 90, default:90},
    {id: 16,text:"M16", min: -90, max: 90, default:0},
    {id: 17,text:"M17", min: -80, max: 80, default:-79},
    {id: 18,text:"M18", min: -90, max: 0, default:-89},
    {id: 19,text:"M19 - Cabeza", min: -90, max: 90, default:0},
]

export const Control = () => {
    const serialHook = useSerial(serial)

    return (
    <>
    <WebLayout/>

    <div>
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
    </div>
      
    <Controls motorsInformation={motorsInformation} writteSerial = {serialHook.moveMotorTo}/>

    <div className="container">
        <div className="row">
            <Devmode serial = { serial }/>
        </div>
    </div>

    </>

        
    )
}


