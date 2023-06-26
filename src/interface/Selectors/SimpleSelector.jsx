import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SimpleSelector = ({data = '',setData = () => {}, legend= "", selectInfo = [{value: 1,text:''},]}) => {
    const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">{legend}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={data}
          onChange={handleChange}
          label="Age"
        >
          { 
            selectInfo.map( selectItem=> (
                <MenuItem key={selectItem.value} value={selectItem.value}>
                    {selectItem.text}
                </MenuItem>
            ))
          }
        </Select>
      </FormControl> 
    </div>
  );
}
