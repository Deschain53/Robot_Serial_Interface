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


/*
export const ImgNavb = ( {h="auto",w="auto"} ) => {

  return (
  <>
      <img    src={LogoUTM}//(mode === 'dark' ? logoObs : logoClaro)} ///DESECTRUCTURAR
              className="rounded mx-auto d-block"     
              height = {h}
              width = {w} 
      />
  </>
  )
}
*/

/*
           {<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />}
      <Grid
        container
        spacing={0}
        direction="column"
        //sx= {{alignItems: {xs:"center"}}}
        //justifyContent="center"
        ///Justificacion dinamica, en pantalla chica que este a la izquierda
        //style={{ minHeight: '100vh' }}
      >
        <Grid item xs={6} sm={6} md={12} lg={12}> 

        </Grid>

        <Grid item xs={6} sm={6} md={12} lg={12}>
        </Grid>
      </Grid>

*/
//<ImgNavb h='100' w='100'/>

//<ImageLogo
////estilo={{with:200, height:200}}
///>

//  style={{ minLarge: '100vh' }}