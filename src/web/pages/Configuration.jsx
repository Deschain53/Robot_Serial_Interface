import React from "react"
import { WebLayout } from "../layout/WebLayout"
import { useSerial } from "../../hooks/useSerial";
import {naab_motors_information} from '../../data/motors/naab_motors'
import { scara_position_information } from '../../data/motors/scara_motors';
import scaraImg from '../../img/scara.png'
import  naabImg  from '../../img/naab.jpg';

export const Configuration = ({configuration={ robot: 'naab', baud: 9600, information: naab_motors_information, imgRobot: naabImg}, 
  setConfiguration = () => {}}) => {

  return (
  <>
    <WebLayout/>
    <div>Configuracion</div>
    <div className="window-app">
      <h1>Configuration</h1>     
    </div>
  </>
  )
}
