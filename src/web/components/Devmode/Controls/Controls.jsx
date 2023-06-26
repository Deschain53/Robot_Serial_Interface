import React from 'react'
import { SliderMotor } from './SliderMotor';

export const Controls = ({motorsInformation = [], writteSerial}) => {
    
    return (
    <>
      <div>
        {motorsInformation.map(motorInformation => (
          <SliderMotor key={motorInformation.id} info = {motorInformation} action = {writteSerial}/>
          ))}
      </div>
    </>
  )
}
