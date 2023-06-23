//import { AuxMotor } from "../ui/AuxMotor";
import { ControlsBasic } from "./ControlsBasic"
//import { GestureDDB } from "./GesturesDDB";


export const BasicMode = ({serial}) => {


    return (
    <>
        {/*<AuxMotor serial = {serial}/>*/}        
        <ControlsBasic 
            serial = { serial }
        />
        {/*<GestureDDB/>*/}
    
    </>
    )
}