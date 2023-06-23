import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

//Sobreescribe las propiedades del thema con lo deseado
export const purpleTheme = createTheme({
    palette:{
        primary:{
            main: '#09417C'//'#2196f3'
        },
        secondary:{
            main: '#735722'// '#78B2BF'//'#78B2BF'//'#3d5afe'
        },
        //tertiary:{
        //    main: '#735722'//'#78B2BF'//'#3d5afe'
        //},
        error:{
            main:red.A400
        }
    },
    typography: {
    //    fontSize: 16,
    //    h3: {
    //      fontWeight: 700,
    //      fontSize: '2.2rem'
    //    },
    //    h4: {
    //      fontWeight: 700,
    //      fontSize: '1.75rem'
    //    },
        h5: {
          fontWeight: 700
        },
        h6: {
          fontWeight: 700,
        }
    },
    components: {
        MuiLink: {
          styleOverrides: {
            root: {
              textDecoration: 'none',
            },
          },
        },
      },
})