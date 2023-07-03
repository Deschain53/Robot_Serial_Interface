// Pestaña de configuracion 
// src> web>pages>Control
import React, { useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { WebLayout } from '../layout/WebLayout';
import { Programer } from '../components/Devmode/Programer';

import { Controls } from '../components/Devmode/Controls/Controls';
import { IconB } from '../components/Buttons/IconB';

import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import { ScaraAditionalControls } from '../components/Devmode/Controls/ScaraAditionalControls';
import { InverseCinematicScara } from '../components/Devmode/Controls/InverseCinematicScara';

export const Control = ({configuration={ robot: 'naab', baud: 9600, information: [], imgRobot}, 
  serialHook}) => {

  const {baud, information, robot} = configuration;  //imgRobot,

  const imgRobot = ""
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
          <img src = {imgRobot} className='img-fluid max-width: 50%'/>
        </Grid>
        <Grid item xs={12} md={6} sx={{tb:5}}>
          <Controls
            robot = {robot}
            motorsInformation={information} 
            writteSerial = {serialHook.modifyPosition}
            />
        </Grid>
          {
            configuration.robot == "scara" ? (
              <Grid container sx={{tb:5}}>
                <Grid item xs={6} md={6} >
                  <ScaraAditionalControls modifyArray = {serialHook.modifyPosition}/>
                </Grid>
                <Grid item xs={6} md={6} >
                  <InverseCinematicScara modifyArray = {serialHook.modifyPosition}/>
                </Grid>
              </Grid>
            ) : (<></>)
          }
      </Grid>
    </Box>

    <div className="container">
        <div className="row">
            <Programer 
              history =  {serialHook.history}  
              addToHistory =  {serialHook.addToHistory} 
              resetHistory =  {serialHook.resetHistory}
              writte = {serialHook.writte}
              positionsInformation = {serialHook.positionsInformation}
            />
        </div>
    </div>
  </Container>
</>
)
}


