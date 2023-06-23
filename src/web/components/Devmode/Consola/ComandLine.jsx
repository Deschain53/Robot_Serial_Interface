import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { EditableCell } from './EditableCell';
//import { TableCellLightDark } from '../../../styles/material-ui-styles/tableStyles';
//import { useSelector  } from 'react-redux';


export const ComandLine = ({action, agregaConsola}) => {
    //const {mode,languaje} = useSelector(state => state.conf);    //Para modo claro/oscuro
    const mode = 'white';
    const languaje = 'spanish';

    const ejecutaAccionYGuardaEnConsola = (c = '') => {
        action(c);
        agregaConsola(c);
    }  

    return (
      <Table size="small" aria-label="simple table">
        <TableBody key="bodyCommandLine">
          <TableRow key={"rowCommandLine"}>
            {/*<TableCellLightDark key={"IdentacionConsola"} align={"left"} mode={mode} style={{ width: 1 }}>{">>"}</TableCellLightDark >*/}
            <TableCell key="comandTable">
              <EditableCell 
                  key={'comandLine'} 
                  valueInitial={''} 
                  actionOnSubmit={ejecutaAccionYGuardaEnConsola} 
                  autoset={true}
                  placeholder={languaje=="spanish" ? "Ingrese un comando" : "Writte a command"}/>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

    )
}