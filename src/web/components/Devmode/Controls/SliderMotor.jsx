import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
//import Add from '@mui/icons-material/Add';
//import Remove from '@mui/icons-material/Remove';

const Input = styled(MuiInput)`
  width: 42px;
`;

// Se pueden agregar eventor de teclado para implementar atajos y 
// seleccionar elementos especificos

export const SliderMotor = ({info = {id:0,min:-90, max:90, default:0, text:""}, 
    step = 1, action = (c) => console.log(c)}) => {

  const [value, setValue] = useState(info.default);
  const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
      if(!isFirstRender) 
        action(info.id, value)
    }, [value])
    
    useEffect(() => {
      setIsFirstRender(false)
    }, [])
    
  const handleBlur = () => {
    if (value < info.min) {
      setValue(info.min);
    } else if (value > info.max) {
      setValue(info.max);
    } else {
      setValue(value)
    }
  };

  return (
    <Box sx={{ width: {md:400,lg:500} }}>
      <Typography id="input-slider" gutterBottom>
          {info.text}
      </Typography>
      <Grid container spacing={2} alignItems="center">

        <Grid item xs>
          <Slider aria-labelledby="input-slider" 
            value= {typeof value === 'number' ? value : info.default} 
            onChange={ e =>  setValue(e.target.value === '' ? '' : Number(e.target.value))} 
            defaultValue={info.default} min={info.min} max = {info.max}/>
        </Grid>
        <Grid item>
          <Input
            sx={{ width: 50 }}
            value={value}
            onChange={ e =>  setValue(e.target.value === '' ? '' : Number(e.target.value))} 
            onBlur={handleBlur}
            inputProps={{
              step: step,
              min: info.min ,
              max: info.max,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
