import React from 'react';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { IconB } from './IconB';

export const FileUploader = ({handleFile}) => {
    
  const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <IconB Icon = {FolderOpenIcon} action = {handleClick}/>

      <input type="file"
             ref={hiddenFileInput}
             onChange={handleFile}
             style={{display:'none'}} 
      /> 
    </>
  );
};

