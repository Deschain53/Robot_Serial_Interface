import React from 'react';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { IconB } from './IconB';

export const FileUploader = ({setCode = () => {}}) => {
    
  const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

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
      console.log('FileUploader > ', fileReader.error)
    }
  }

  return (
    <>
      <IconB Icon = {FolderOpenIcon} action = {handleClick}/>

      <input type="file"
             ref={hiddenFileInput}
             onChange={readFile}
             style={{display:'none'}} 
      /> 
    </>
  );
};

