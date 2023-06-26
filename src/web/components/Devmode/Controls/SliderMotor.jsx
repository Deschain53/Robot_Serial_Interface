import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';

const Input = styled(MuiInput)`
  width: 42px;
`;

// Se pueden agregar eventor de teclado para implementar atajos y 
// seleccionar elementos especificos

export const SliderMotor = ({info = {id:0,min:-90, max:90, default:0, text:""}, 
    step = 1, action = (c) => console.log(c)}) => {

  const [value, setValue] = useState(info.default);
  const [isFirstRender, setIsFirstRender] = useState(true);
    //const handleSliderChange = (event, newValue) => {
    //  if (newValue < info.min) {
    //    setValue(info.min);
    //  } else if (newValue > info.max) {
    //    setValue(info.max);
    //  } else{
    //    setValue(newValue);
    //  }
    //    //action(info.id,value)
    //    console.log('value', value)
    //};


    useEffect(() => {
      if(!isFirstRender) 
        action(info.id, value)
    }, [value])
    
    useEffect(() => {
      setIsFirstRender(false)
    }, [])
    

  //const handleInputChange = (event) => {
  //  const newValue = event.target.value
  //  console.log(newValue)
  //  setValue(newValue === '' ? '' : Number(newValue));
  //};

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
    <Box sx={{ width: 500 }}>
      <Typography id="input-slider" gutterBottom>
          {info.text}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <VolumeUp />
        </Grid>
        <Grid item xs>
          <Slider aria-labelledby="input-slider" 
            value= {typeof value === 'number' ? value : info.default} 
            //onChange={handleSliderChange} 
            //onChange={ e => console.log(e.target.value)}
            onChange={ e =>  setValue(e.target.value === '' ? '' : Number(e.target.value))} 
            defaultValue={info.default} min={info.min} max = {info.max}/>
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            //onChange={handleInputChange}
            //onChange={ e => console.log(e.target.value)}
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
