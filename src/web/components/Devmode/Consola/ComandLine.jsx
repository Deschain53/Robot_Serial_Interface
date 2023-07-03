// Linea de comandos de consola
// src>web>components>Devmode>Consola>CommandLine
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { EditableCell } from './EditableCell';

const languaje = 'spanish';

export const ComandLine = ({action}) => {

    return (
      <Table size="small" aria-label="simple table">
        <TableBody key="bodyCommandLine">
          <TableRow key={"rowCommandLine"}>
            <TableCell key="comandTable">
              <EditableCell 
                  key={'comandLine'} 
                  valueInitial={''} 
                  actionOnSubmit={(c) => action(c)} 
                  autoset={true}
                  placeholder={languaje=="spanish" ? "Ingrese un comando" : "Writte a command"}/>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

    )
}