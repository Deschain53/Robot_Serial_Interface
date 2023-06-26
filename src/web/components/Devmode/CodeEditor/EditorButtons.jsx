import React, { useState } from 'react'
//Para logos de los botones
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import StopIcon from '@mui/icons-material/Stop';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

import {saveAs } from "file-saver";
import { FileUploader } from '../../Buttons/FileUploader';
import { IconB } from '../../Buttons/IconB';
//import { useBasicActionsNaab } from '../../../../hooks/useBasicActionsNaab';

export const EditorButtons = ({
    code="", setCode = () => {}, actionCommand = () => {} , positionsInformation = [position=[0,0,0],prefix="",postfix=""]
  }) => {

    const [positions, prefix, postfix] = positionsInformation;
    const [contador, setContador] = useState(100);  //Para linea de tiempo

    const action = actionCommand; //NO ELIMINAR: controla acciones a ejecutar en editor

    //Ejecuta codigo dentro de editor
    const evaluaFuncion = () => {
      try{
        console.log('Codigo escrito: ' + code)
        eval(code);
      }catch{
        console.log('Error en evaluacion de codigo')
      }
    }

    // Manda el array de posiciones de useSerial al editor
    const sendPositionsToEditor = () => {
      const newCommand = 'action(\''+'posiciones,'+positions.toString()+'\')';
      const newcode = 'setTimeout(function(){\n' +'\t' + newCommand + '\n}, '+ contador + '); \n'
      setContador(contador + 500);
      setCode(code + '\n' + newcode);
    }

    const createFile = () => {
      const blob = new Blob([code], { type: 'text/plain;charset=utf-8'})
      const name = 'naab';
      const extension = 'dimmex'
      saveAs( blob,  name + '.' + extension);///.txt');
    }

  return (
    <>
    <div className="row mx-auto">
        <div className="col"> 
          <FileUploader setCode = {setCode} />
          <IconB Icon = {FileDownloadIcon} action = {createFile}/>
        </div>
        <div className="col"> 
          <IconB Icon ={ReplyAllIcon} action={ () => sendPositionsToEditor()}/>
        </div>
        <div className="col">        
          <IconB Icon = {SkipPreviousIcon} />
          <IconB Icon = {PlayCircleIcon} action = {evaluaFuncion}/>
          <IconB Icon = {SkipNextIcon} />
        </div>
        <div className="col">        
          <IconB Icon = {StopIcon} />
          <IconB Icon = {AccessibilityIcon} action = {() => action('home')}/>
        </div>

     </div>
    </>
  )
}

//<div className="col"> &nbsp;&nbsp; 
//<IconB Icon = {StopIcon} />
//<IconB Icon = {AccessibilityIcon} action = {sendHomePosition}/>
//</div>