import * as React from 'react';
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
// Por ejemplo ctrl+s+# seleccionar motor
// + para agregar - restar 
// agregar opcion de resetear posicion desde boton y posicion home general

export const SliderMotor = ({info = {id:0,min:-90, max:90, default:0, text:""}, 
    step = 1, action = (c) => console.log(c)}) => {

  const [value, setValue] = React.useState(info.default);

    const handleSliderChange = (event, newValue) => {
      if (newValue < info.min) {
        setValue(info.min);
      } else if (newValue > info.max) {
        setValue(info.max);
      } else{
        setValue(newValue);
      }
        action(info.id,value)
    };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < info.min) {
      setValue(info.min);
    } else if (value > info.max) {
      setValue(info.max);
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
            onChange={handleSliderChange} 
            defaultValue={info.default} min={info.min} max = {info.max}/>
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
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
