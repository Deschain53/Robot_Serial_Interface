// Barras deslizantes para cinematica directa
// src>web>components>Devmode>Controls
import React, { useEffect } from 'react'
import { SliderMotor } from './SliderMotor';
import { Grid, Typography } from '@mui/material';

export const Controls = ({motorsInformation = [], writteSerial, robot = "scara"}) => {

  return (
    <>
      <Typography variant='h5'>Cinemática directa</Typography>
      <div>
        {motorsInformation.map(motorInformation => (
          <SliderMotor key={motorInformation.id} info = {motorInformation} action = {writteSerial}/>
          ))}
      </div>
    </>
  )
}
