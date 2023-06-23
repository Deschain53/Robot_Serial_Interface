import React from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { IconButton, Link } from '@mui/material';

const linkD = 'https://www.utm.mx/~minirobotica/formatos/Formato_Registro_Talleres.docx';

//Modificado el 25 de Abril del 2023
export const DownloadButton = ({link = linkD}) => {
  return (
    <>
      <IconButton 
        href={link} 
        
      >
        <FileDownloadIcon color="primary"/>
      </IconButton>
    </>
  )
}

//<IconButton href={link} >
//<FileDownloadIcon color="primary"/>
//</IconButton>


//<Link
//component="iconbutton"
//href={link}
//>
//<FileDownloadIcon color="primary"/>
//</Link>