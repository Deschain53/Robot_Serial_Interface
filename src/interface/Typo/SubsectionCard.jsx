import { Typography } from '@mui/material'
import React from 'react'

export const SubsectionCard = ({texto=''}) => {
  return (
    <Typography sx={{ fontSize:'1em' ,pb:0, mt:0, fontWeight:'700' }} color='primary'>
        {texto}
    </Typography>
  )
}