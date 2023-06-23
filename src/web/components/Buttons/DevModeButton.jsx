import React from 'react';
import IconButton from '@mui/material/IconButton';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
//import { useSelector } from 'react-redux';

export const PmodeButton = ({isDevMode,changeMode}) => {
    
    //const dispatch = useDispatch();
    //const {mode} = useSelector(state => state.conf);
    const mode = 'white';

    return (
        <IconButton 
            onClick={ () => changeMode()  } 
            style={{ color: mode ==='dark'? 'white' : 'black' }
        }> 
            { isDevMode ? 
                (
                    <CodeIcon  />
                ) 
            :      
                (
                    <CodeOffIcon/>
                )
            }
        <div>&nbsp;</div>
        <div>{isDevMode ? 'Modo programador' : 'Modo básico' }</div>
        </IconButton>
    )
}