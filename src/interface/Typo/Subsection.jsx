import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Subsection = ({text = ''}) => {
  return (
    <>
      <Box sx={{paddingBottom:1, paddingTop:1}} >
        <Typography variant='h6' color='primary' sx={{paddingTop:1}} >{text}</Typography>
        <Divider />
      </Box>
    </>
  )
}
