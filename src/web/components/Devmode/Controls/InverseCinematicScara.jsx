import React, { useEffect, useState } from 'react'
import {SliderMotor} from './SliderMotor'
import { Typography } from '@mui/material'

//const lb = 15   //Longitud del brazo en cm
//const lab = 10 //Longitud del antebrazo
const L1 =20
const L2 = 10 

export const InverseCinematicScara = ({modifyArray}) => {

  //Agregar useState X Y y pasarlos al action del sliderMotor
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [Z, setZ] = useState(0);

  const infoX = {id:1,min:-50, max:50, default:0, text:"Posición en eje X"}
  const infoY = {id:2,min:-50, max:50, default:0, text:"Posición en eje Y"}
  const infoZ = {id:3, text:"Posición en eje Z", min: 0, max: 50, default:0}
  
  const actionX = (id,value) => {
    //console.log(id,value)
    if(id==1){ setX(value)}
    if(id==2){ setY(value)}
    if(id==3){ setZ(value)}
  } 
  
  //const calculaCinematicaInversa = (x,y) => {
  //  console.log(x,y)
  //  // Angulos en radianes
  //  const alpha = Math.atan2(y, x)    
  //  const hipo = Math.sqrt(x*x + y*y)
  //  const aux = (lb*lb - lab*lab + hipo*hipo) / (2*lb*hipo)
  //  const beta = Math.acos( aux
  //  )
  //  const gamma = Math.acos(
  //    (lb*lb + lab*lab - hipo*hipo) / (2*lb*lab)
  //  )
  //
  //  console.log('a: ', alpha)
  //  console.log('aux: ', aux)
  //  console.log('hipotenusa: ', hipo)
  //  console.log('beta: ', beta)
  //  console.log('gamma: ', gamma)
  //  // Resultados en grados
  //  const anguloBrazo = (alpha + beta) * (Math.PI / 180)
  //  const anguloAntebrazo = (gamma - 180) * (Math.PI / 180)
  //  return {anguloBrazo,anguloAntebrazo}
  //}

  
  const inverseKinematics = (x,y) => {
    let theta2 = Math.acos((x*x + y*y - L1*L1 - L2*L2) / (2 * L1 * L2));
    if (x < 0 & y < 0) {
      theta2 = (-1) * theta2;
    }
    
    let theta1 = Math.atan(x / y) - Math.atan((L2 * Math.sin(theta2)) / (L1 + L2 * Math.cos(theta2)));
    
    theta2 = (-1) * theta2 * 180 / Math.PI;
    theta1 = theta1 * 180 / Math.PI;
  
   // Angles adjustment depending in which quadrant the final tool coordinate x,y is
    if (x >= 0 & y >= 0) {       // 1st quadrant
      theta1 = 90 - theta1;
    }
    if (x < 0 & y > 0) {       // 2nd quadrant
      theta1 = 90 - theta1;
    }
    if (x < 0 & y < 0) {       // 3d quadrant
      theta1 = 270 - theta1;
      //phi = 270 - theta1 - theta2;
      //phi = (-1) * phi;
    }
    if (x > 0 & y < 0) {       // 4th quadrant
      theta1 = -90 - theta1;
    }
    if (x < 0 & y == 0) {
      theta1 = 270 + theta1;
    }

    return {theta1, theta2}
  }

  
  useEffect(() => {
    const {theta1,theta2} = inverseKinematics(X,Y)
    //console.log('X,Y,Z', X,Y,Z)
    console.log('theta1: ',theta1)
    console.log('theta2: ',theta2)

    if(theta1 != NaN && theta2 != NaN){
      modifyArray(2,Math.round(theta1))
      modifyArray(3,Math.round(theta2))
    }

  }, [X,Y])

  useEffect(() => {
    modifyArray(5,Z)
  }, [Z])
  
    //const calculaCIenvia = (id,value) => {
  //  switch (id) {
  //    case 1: // X
  //        //Uliza funcion cinematica inversa
  //        //calculaCinematicaInversa()
  //      break;
//
  //    case 1: // Y
  //      
  //      break;
//
  //    default:
  //      break;
  //  }
  //}


  return (
    <>
      <Typography variant='h5'>Cinemática inversa</Typography>
      <SliderMotor key="x" info = {infoX} action = {actionX}/>
      <SliderMotor key="y" info = {infoY} action = {actionX}/>
      <SliderMotor key="z" info = {infoZ} action = {actionX}/>
    </>
  )
}
