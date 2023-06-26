import React, { useEffect, useState } from "react"
import { WebLayout } from "../layout/WebLayout"
import {naab_motors_information} from '../../data/motors/naab_motors'
import { scara_position_information } from '../../data/motors/scara_motors';
import scaraImg from '../../img/scara.png'
import  naabImg  from '../../img/naab.jpg';
import { SimpleSelector } from "../../interface/Selectors/SimpleSelector";
import { IconB } from "../components/Buttons/IconB";
import { Container } from "@mui/material";

export const Configuration = ({setConfiguration = () => {}},
  configuration= { 
    robot: 'naab', baud: 9600, information: naab_motors_information, imgRobot: naabImg,
    prefix: "posiciones,",postfix:""}, 
  ) => {

  const [robot, setRobot] = useState(configuration.robot);
  const [baud, setBaud] = useState(configuration.baud);

  const selectRobot = [
    {value: 'naab',text:'naab'},
    {value: 'scara',text:'scara'},
  ]

  const selectBaud = [
    {value: 300,  text:300},
    {value: 600,  text:600},
    {value: 1200, text:1200},
    {value: 2400, text:2400},
    {value: 9600, text:9600},
    {value: 14400,text:14400},
    {value: 19200,text:19200},
    {value: 28800,text:28800},
    {value: 38400,text:38400},
  ]

  const getInformation = () => {
    switch (robot) {
      case 'scara':
        return scara_position_information;
        //break;
    
      default:
        return naab_motors_information;
      //break;
    }
  }

  const getImg = () => {
    switch (robot) {
      case 'scara':
        return scaraImg;
        //break;
    
      default:
        return naabImg;
      //break;
    }
  }

  const prefixNew =  robot === "naab" ? "posiciones," : "[";
  const postfixNew =  robot === "naab" ? "" : "]";

  const handleClick = () => {
    setConfiguration(
      {
        robot, 
        baud,
        information: getInformation(),
        imgRobot: getImg(),
        prefix: prefixNew,
        postfix: postfixNew
      }
    )
  }
  

  return (
  <>
    <WebLayout/>
      <Container>
        <div>Configuracion</div>
        <div className="window-app">
          <h1>Configuration</h1>     
          <SimpleSelector legend="Robot" data={robot} setData={setRobot} selectInfo={selectRobot}/>
          <SimpleSelector legend="Baud rate" data={baud} setData={setBaud} selectInfo={selectBaud}/>
          <IconB action={handleClick} legend="Aplica configuración"></IconB>
        </div>
      </Container>
  </>
  )
}
