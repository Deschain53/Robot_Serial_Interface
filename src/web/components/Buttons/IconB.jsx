// Boton que incluye un icono
// src>web>components>Buttons>IconB
import React from 'react';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Typography } from '@mui/material';

const defaultAction =  () => console.log('?')  ;

export const IconB = ({action = defaultAction ,Icon = HelpOutlineIcon, legend = ''}) => {

    const mode = "white";

    return (
        <IconButton onClick={ () => action() }> 
            <Icon style={{ color: mode ==='dark'? 'white' : 'black' }}  /> 
            {
                legend
                ?
                <Typography variant='h6' color='black' >
                    <div> &nbsp; {legend}</div>
                </Typography>
                :
                    <></>
            }
        </IconButton>
    )
}