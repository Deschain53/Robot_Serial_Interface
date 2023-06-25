import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { ComandLine } from './ComandLine';

  //Se podria agregar history al commandLine component para acceder mediante 
  //teclado a los ultimos comandos y asi dar una mejor experiencia
  // el sobreponer ultimo comando en consola no está arreglado

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

export const Consola = ({action, history}) => {

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
          {history
              .map((row) => {
                return (
                  <TableRow key = {`consoleRow-${row.id}`}>  
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
        />
    </Paper>
  );
}
