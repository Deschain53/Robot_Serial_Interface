// Barra de navegacion de interfaz
// serc>interface>NavBar>LineMenu
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Link } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { pages } from './pages';

export const LineMenu = ({nameLogo='name logo', nameLogoSm="N L Sm"}) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    return (
    <>
      <AppBar position="static" color='primary'>
        <Container maxWidth="xl" >
          <Toolbar disableGutters>
  
          {/*PANTALLA CHICA --------------------------------- */}
            {/*NabMenu en pantalla Chica */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
                //style={{ textDecoration: 'none' }}
                >
                {pages.map((page) => (
                  <MenuItem key={page.direction} onClick={handleCloseNavMenu} >

                      <NavLink 
                        to = {page.direction}
                        >
                          <Typography 
                            variant='h6'
                          >
                            {page.label}
                          </Typography>
                      </NavLink>

                  </MenuItem>
                ))}
              </Menu>
            </Box>
  
          {/*Logo y Marca de pagina en pantalla Grande */}
            <Typography
                variant="h6"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'none' , sm:'flex'},
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
                > {nameLogo} </Typography>

          {/*Logo y Marca de pagina en pantalla Chica */}
            <Typography
                variant="h6"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' , sm:'none'},
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  //fontSize:'10px',
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
              }}
            > {nameLogoSm} </Typography>
  
          {/*PANTALLA GRANDE ---------------------------------*/}
            <Grid 
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
              //sx= {{alignItems: {xs:"center"}}}
              //justifyContent="center"
            >

  
              <Grid item>
                {/*Menu en patalla Grande */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
                  {pages.map((page) => (
                    <Button
                    key={page.direction}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      <NavLink
                        to={page.direction}
                        //className={({ isActive }) =>
                        //isActive ? activeClassName : undefined
                        //}
                      >
                        <Typography 
                          textAlign="center"
                          sx={{ color: 'white', textDecoration: 'none', }}>
                            {page.label}
                        </Typography>
                      </NavLink>
                    </Button>
                  ))}
                </Box>
              </Grid>
  
            </Grid>
            
  
          </Toolbar>
  
        </Container>
      </AppBar>
    </>
    );
  }
