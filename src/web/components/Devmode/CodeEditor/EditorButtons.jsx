import React from 'react'
//Para logos de los botones
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import StopIcon from '@mui/icons-material/Stop';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

import {saveAs } from "file-saver";
import { FileUploader } from '../../Buttons/FileUploader';
import { IconB } from '../../Buttons/IconB';
import { useBasicActionsNaab } from '../../../../hooks/useBasicActionsNaab';


export const EditorButtons = ({code="", setCode, serial }) => {

    const basicActionsRobot = useBasicActionsNaab(serial);

    const evaluaFuncion = () => {
      try{
        console.log(code)
        eval(code);
      }catch{
        console.log('Error en evaluacion de codigo')
      }
    }

    const createFile = () => {
      const blob = new Blob([code], { type: 'text/plain;charset=utf-8'})
      const name = 'naab';
      const extension = 'dimmex'
      saveAs( blob,  name + '.' + extension);///.txt');
    }

    const readFile = (e) => {
      const file = e.target.files[0];
    
      if(!file) return;
    
      const fileReader = new FileReader();
    
      fileReader.readAsText(file);
    
      fileReader.onload = () => {
        setCode(fileReader.result)
        //console.log( fileReader.result )
      }
    
      fileReader.onerror = () => {
        console.log( fileReader.error)
      }
    }

    const sendHomePosition = () => {
      basicActionsRobot.home()
    }

  return (
    <>
    <div className="row mx-auto">
        <div className="col"> 
          <FileUploader handleFile = {readFile} />
          <IconB Icon = {CreateNewFolderIcon} action = {createFile}/>
        </div>

        <div className="col">        
          <IconB Icon = {SkipPreviousIcon} />
          <IconB Icon = {PlayCircleIcon} action = {evaluaFuncion}/>
          <IconB Icon = {SkipNextIcon} />
        </div>

        <div className="col"> &nbsp;&nbsp; 
          <IconB Icon = {StopIcon} />
          <IconB Icon = {AccessibilityIcon} action = {sendHomePosition}/>
        </div>
     </div>
    </>
  )
}
