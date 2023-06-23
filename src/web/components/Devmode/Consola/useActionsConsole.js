import { useDispatch } from "react-redux";
import { clearAll, clearConsole, clearEditor, receiveCommandObject } from "../../../actions/devActions";

const createData = (texto, identacion = ">>",estatus="", id) => {
  return { identacion,texto,estatus,id };
}

export const useActionsConsole = (serial = null) => {
    
    const dispatch = useDispatch();
    

    const action = (command) => {

      switch(command.toLowerCase() ) {

        case 'clear':
          dispatch(clearConsole());
          break;

        case 'clear all':
          dispatch(clearAll());
          break;

        case 'clear editor':
          dispatch(clearEditor());
          break;


        default:
          console.log(command + ' from useActionConsole')
          const comandoObject = createData(command,">>","","",)
          dispatch(receiveCommandObject(comandoObject));

          if(serial.isConected){      
            console.log(serial)
            serial.escribe(command)  //Manda comandos hacia el microcontrolador
            //serial.lee()
            const respuesta  = 'comand send'; //Esto se intercambiara por la respuesta del micro
            dispatch(receiveCommandObject(createData('comand received',"  ","")));
          }
          break;
            
    
              
      }
        

      

      }


      //try{
        
        

    return action
}