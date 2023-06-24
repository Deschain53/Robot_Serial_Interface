import React from 'react';
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Typography } from '@mui/material';
//import { useSelector } from 'react-redux';

const defaultAction =  () => console.log('?')  ;

export const IconB = ({action = defaultAction ,Icon = HelpOutlineIcon, legend = ''}) => {

    //const {mode} = useSelector(state => state.conf);
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