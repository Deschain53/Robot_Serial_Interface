import React from 'react'
import { IconB } from '../../Buttons/IconB'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import LayersClear from '@mui/icons-material/LayersClear';
import FowardIcon from '@mui/icons-material/Forward';

export const ScaraAditionalControls = ({modifyArray = () =>{} }) => {

    const guardarTrayectoria = () => {
        modifyArray(0,1)
        setTimeout(function(){
            modifyArray(0,0)
        }, 1600); 
    }

    const eliminarTrayectoria = () => {
        modifyArray(0,2)
        setTimeout(function(){
            modifyArray(0,0)
        }, 1600); 
    }

    const seguimientoTrayectorias = () => {
        modifyArray(0,1)
        //setTimeout(function(){
        //    modifyArray(0,0)
        //}, 1600); 
    }

    return (        
    <>
        <IconB legend="Guardar trayectoria internamente" Icon ={AddToPhotosIcon} action={ guardarTrayectoria }/>
        <IconB legend="Eliminar trayectorias internas" Icon ={LayersClear} action={ eliminarTrayectoria}/>
        <IconB legend="Seguimiento de trayectorias internas" Icon ={FowardIcon} action={ seguimientoTrayectorias}/>
    </>
  )
}
