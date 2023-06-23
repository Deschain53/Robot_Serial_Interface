import { Grid, Typography } from '@mui/material'
import React from 'react'

export const TitleSection = ({text}) => {
  return (
  <Grid 
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{paddingTop:2}}
    >
      <Typography variant='h5' color='primary' sx={{fontWeight:'700'}} >{text}</Typography>
  </Grid>
  )
}
