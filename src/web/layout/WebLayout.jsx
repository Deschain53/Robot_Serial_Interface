import { Box } from '@mui/system'
import React from 'react'
import { Navbar } from '../../interface/NavBar/Navbar'

export const WebLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
        <Navbar />
        {children}
    </Box>
  )
}
