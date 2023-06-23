import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { useSelector, useDispatch } from 'react-redux';
import { saveConfState, setModeToDark, setModeToLight } from '../../../actions/configuration';

export const DarkModeButton = () => {
    
    const dispatch = useDispatch();

    const {mode} = useSelector(state => state.conf);

    const changeMode = () => {
        //console.log('click from darmodeButton')

        if ( mode === 'dark' ) {
            dispatch( setModeToLight() );
            dispatch( saveConfState() ); 
        }

        if ( mode === 'light') {
            dispatch( setModeToDark() );
            dispatch( saveConfState() );
        }
    }

    return (
        <IconButton onClick={ () => changeMode() }> 
            <Brightness4Icon style={{ color: mode ==='dark'? 'white' : 'black' }}  /> 
        </IconButton>
        /*<button onClick={ () => changeMode() } >
            mode
        </button>*/
    )
}