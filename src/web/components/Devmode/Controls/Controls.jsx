import React, { useEffect } from 'react'
import { SliderMotor } from './SliderMotor';
import { Grid, Typography } from '@mui/material';

//const calculaCinemáticaDirecta = (theta1,theta2,l1,l2) => {
//  const theta1F = theta1*(Math.PI/180)
//  const theta2F = theta2*(Math.PI/180)
//  const xP = Math.round( l1*Math.cos(theta1F) + l2*Math.cos(theta1F+theta2F) )
//  const yP = Math.round( l1*Math.sin(theta1F) + l2*Math.sin(theta1F+theta2F) )
//
//  return {xP,yP}
//}

export const Controls = ({motorsInformation = [], writteSerial, robot = "scara"}) => {

  return (
    <>
      {
       // robot == 'scara' ?
       // ( <>
       //   </>
       // ) : <></>
      }
      <Typography variant='h5'>Cinemática directa</Typography>
      <div>
        {motorsInformation.map(motorInformation => (
          <SliderMotor key={motorInformation.id} info = {motorInformation} action = {writteSerial}/>
          ))}
      </div>
    </>
  )
}
