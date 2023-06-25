import React, { useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { WebLayout } from '../layout/WebLayout';
import { Programer } from '../components/Devmode/Programer';
import { useSerial } from '../../hooks/useSerial';
import { SerialObject } from '../../data/serialObject';
import { Controls } from '../components/Devmode/Controls/Controls';
import { IconB } from '../components/Buttons/IconB';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import scaraImg from '../../img/scara.png'
import { scara_position_information } from '../../data/motors/scara_motors';
import  naabImg  from '../../img/naab.jpg';
import {naab_motors_information} from '../../data/motors/naab_motors'

let serial = new SerialObject()
const motorInformation = naab_motors_information;
const robotImg = naabImg;//scaraImg;

export const Control = () => {
    const serialHook = useSerial(serial)

return (
<>
  <WebLayout/>
  <Container >

    <Box component="div">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4} >
          <IconB legend="Seleccionar dispositivo" Icon ={ConnectedTvIcon} action={ serialHook.setConfiguration }/>
        </Grid>
        <Grid item xs={12} md={4} >
          <IconB legend="Resetear conexión" Icon ={DesktopWindowsIcon} action={ serialHook.resetConfiguration }/>
        </Grid>
        <Grid item xs={12} md={4} >
        <IconB 
          legend= {serialHook.isConected ? "Dispositivo conectado" : "Dispositivo desconectado"} 
          Icon ={serialHook.isConected ? DesktopWindowsIcon : DesktopAccessDisabledIcon} 
          action={ serialHook.isPortOpen }
          />
        </Grid>
      </Grid>
    </Box>
    
    <Box component="div">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6} >
          <img src = {robotImg} className='img-fluid max-width: 50%'/>
        </Grid>
        <Grid item xs={12} md={6} >
          <Controls motorsInformation={motorInformation} writteSerial = {serialHook.moveMotorTo}/>
        </Grid>
      </Grid>
    </Box>

    <div className="container">
        <div className="row">
            <Programer //serial = { serial }
              history =  {serialHook.history}  
              addToHistory =  {serialHook.addToHistory} 
              resetHistory =  {serialHook.resetHistory}
              writte = {serialHook.writte}
            />
        </div>
    </div>
  </Container>
</>
)
}


