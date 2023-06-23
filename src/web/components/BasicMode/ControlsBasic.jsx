import ExpandLessIcon from '@mui/icons-material/ExpandLess';    //Arriba
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';    //Abajo
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; //Left
import ChevronRightIcon from '@mui/icons-material/ChevronRight'; //Rigth
import AdjustIcon from '@mui/icons-material/Adjust';  //Center
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import { IconB } from '../Buttons/IconB';
import { useBasicActionsNaab } from '../../../hooks/useBasicActionsNaab';

export const ControlsBasic = ({serial}) => {

    const basicActionsRobot = useBasicActionsNaab(serial);

    return (
    <>
        <div className="container">
            <div className="row mx-auto">
                <IconB Icon = {UndoIcon}            action ={basicActionsRobot.undoAction}/>
                <div className=""> &nbsp;&nbsp; </div>
                <IconB Icon = {ExpandLessIcon} action ={basicActionsRobot.upAction}/> 
                <div className=""> &nbsp;&nbsp; </div>
                <IconB Icon = {RedoIcon}            action ={basicActionsRobot.redoAction}/>
            </div>

            <div className="row mx-auto">
                    <div className=""> &nbsp;&nbsp; </div>
                    <IconB Icon = {ChevronLeftIcon}   action ={basicActionsRobot.leftAction}/> 
                    <IconB Icon = {AdjustIcon}              action ={basicActionsRobot.home}/>
                    <IconB Icon = {ChevronRightIcon}  action ={basicActionsRobot.rightAction}/>
            </div>

            <div className="row mx-auto">
                <div className=""> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                </div>
                <div className=""><IconB Icon = {ExpandMoreIcon} action ={basicActionsRobot.downAction}/> </div>                
            </div>
        </div>   
    </>
    )
}