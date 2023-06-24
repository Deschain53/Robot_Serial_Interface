import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { SliderMotor } from './SliderMotor';

export const Controls = ({motorsInformation = [], writteSerial}) => {
    
    return (
    <>
        {motorsInformation.map(motorInformation => (
           <SliderMotor key={motorInformation.id} info = {motorInformation} action = {writteSerial}/>
        ))}
    </>
  )
}
