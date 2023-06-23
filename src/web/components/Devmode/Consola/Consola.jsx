import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { ComandLine } from './ComandLine';
import { createData } from '../../../../data/dataValidators';
//import { useSelector } from 'react-redux';
//import { createData } from '../../../auxiliar/dataValidators';


//Configuracion para headers de tabla
const columns = [
  { id: '>>', label: ' ', minWidth: 5 },
  {
    id: 'Console',
    label: 'Consola',
    minWidth: 170,
    align: 'left',
    //format: (value) => value.toFixed(2),
  },
  { id: 'status', label: ' ', minWidth: 1 },
];

export const Consola = ({action,consola,setConsola}) => {

  //const {consola} = useSelector(state => state.dev);

  

  //Funcion para modificar consola de acuerdo al comando ejecutado
  const agregaConsola = (c='') => {
    
    switch (c.toLowerCase() ) {
      case 'clear':
          setConsola([createData('',">>","",0)]);
        break;
    
      default:
        const newComandToExecute = createData(c);                 //Comando a ejecutar por consola
        const newComandResponse = createData('Comand send', '');  //Respuesta de microcontrolador o confirmacion
        setConsola([...consola, newComandToExecute, newComandResponse]);
        break;
    }




  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ height: 200 /*maxHeight: 440*/ }}>
        {
        <Table stickyHeader size="small" aria-label="sticky table">
          <TableHead key="HeaderConsole">
            <TableRow key ="HeadersConsole">
              {columns.map((column) => (
                <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
          {consola
              .map((row) => {
                //console.log(row.id)
                return (
                  <TableRow key = {`consoleRow-${row.d}`}>  
                        <TableCell mode={undefined} key={`identacion-${row.id}`} align={"left"} style={{ width: 1 }}> {row.identacion}</TableCell>
                        <TableCell mode={undefined} key={`texto-${row.id}`} align={"left"}> {row.texto}</TableCell>
                        <TableCell mode={undefined} key={`estatus-${row.id}`} align={"left"}> {row.estatus}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      }
        </TableContainer>        
        <ComandLine 
          action = {action}
          agregaConsola = {agregaConsola}
        />
    </Paper>
  );
}
//      //<ThemeProvider theme={tema}>
//      <ThemeProvider/>

  //const tema = useDarkLightModeTheme();
  //const  action = useActionsConsole(serial);
  //const action = ()