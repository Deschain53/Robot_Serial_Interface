// Navbar de la aplicacion
// src>interface>Navbar
import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { LineMenu } from './LineMenu';
import Typography from '@mui/material/Typography';

const nameLogo = "Robot Serial Interface";
const nameLogoSm = "RSI";

export const Navbar = () => {
  return(
    <>
    <Box sx={{ flexGrow: 1 } }>

    <Grid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center">
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: '#09417C',
            textDecoration: 'none',
            //background:'white', 
          }}
          >
          {nameLogo}
        </Typography>
    </Grid>
      <LineMenu nameLogo={nameLogo} nameLogoSm={nameLogoSm}/>
    </Box>
    </>
  )
}