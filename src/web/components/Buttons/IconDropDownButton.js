import React from 'react';
import { useSelector } from 'react-redux';
import { IconButton } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export const IconDropDownButton = ({open,setOpen}) => {
    const { mode } = useSelector(state => state.conf);
    
    return (
        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} color={ mode === 'dark' ? "primary" : "default" }>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
    )
}
