import { useEffect, useState } from 'react'
import robotimg from '../../img/robotM.jpg'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { MuiButton } from './Buttons/MuiButton';
import { EditableCell } from '../Devmode/Consola/EditableCell';
import SendIcon from '@material-ui/icons/Send';
import { FormIncreaseDecrease } from './Others/FormIncreaseDecrease';

export const FormMotor = ({serial, n = 0, min=-90, max=90, def=0, action, sensibilidad = 1}) => {

    const [position, setPosition] = useState(def);
    //console.log(position)
    
    //const [formValues, handleInputChange] = useForm(position);

    const limites = {
        min,
        max,
        def,
    }

    const envia = (p) => {
        const motorN = 'M'+String(n);
        if(serial){
            console.log( motorN +','+ String(p))
            serial.escribe( motorN +','+ String(p))
        }
    }

    const increasePosition = () => { 
        if(position < limites.max) 
        setPosition(position+sensibilidad) 
        envia(position)
    }
    
    
    const decrementPosition = () => {
        if(position > limites.min) 
        setPosition(position-sensibilidad)
        envia(position)
    }
    
    
    const sendPositionMotorToSerial = (p) => {
        envia(p)
        setPosition(p);
        console.log(position);
    }

    
    useEffect(() => {
        action(n,position)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position]);

    return (
    <>  
        <div className='container'>
            <div className='row'>

                <div className=''> {'M'+String(n)}</div>
                <div className='col-4'>
                <EditableCell 
                    valueInitial={position} 
                    actionOnSubmit={sendPositionMotorToSerial}
                    autoset = {true}
                    />
                </div>
                <div className='column'>
                    <MuiButton className="row" Icon = {ArrowDropUpIcon} action = { increasePosition} />
                    <MuiButton className="row" Icon = {ArrowDropDownIcon} action = { decrementPosition} />
                </div>

            </div>

        </div>

        
    </>
    )
}

export const AuxMotor = ({serial,action}) => {

    const [posiciones, setPosiciones] = useState([0,0,-90,0,0,0,0,90,0,0,0,0,0,90,80,90,0,-80,-90,0]);

    const [sensibilidad, setSensibilidad] = useState(1);

    const [contador, setContador] = useState(100);

    //console.log(contador)

    const modificaPosicion = (n,newPosition) => {
        let psto = posiciones;
        //console.log(psto);
        psto[n]= newPosition;
        //console.log(psto)
        setPosiciones(psto)
    }

    //Para establecer el envio de posiciones al editor de codigo
    const actionToDo = () => {
        const newcommands = 'action(\''+'posiciones,'+posiciones.toString()+'\')';
        const newcode = 'setTimeout(function(){\n' +'\t' + newcommands + '\n}, '+ contador + '); \n'
        action(newcode)
        setContador(contador + 100)
    }

    //useEffect(() => {
    //    actionToDo();
    //  // eslint-disable-next-line react-hooks/exhaustive-deps
    //}, [posiciones]);

    return (
    <>
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <img
                    src = {robotimg}
                    className= "img-fluid max-width: 25%"
                />
                {
                    action
                    ?
                    <div className='col-6'>
                        <MuiButton action = {actionToDo}  Icon={SendIcon} legend = {'Manda posición'}/>
                    </div>
                    :<></>
                }
            </div>

            

            <div className="col-lg-3 col-md-6 col-sm-12">

                <div>{'Sensibilidad: ' + sensibilidad}
                    <MuiButton className="row" Icon = {ArrowDropUpIcon} action = { () => setSensibilidad(sensibilidad + 1)} />
                    <MuiButton className="row" Icon = {ArrowDropDownIcon} action = { () => setSensibilidad(sensibilidad - 1)} />
                </div>
                <FormMotor serial = {serial} n = {0}  min = {-90} max = {90} def={0} action = {modificaPosicion}    sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {1}  min = {-90} max = {90} def={0} action = {modificaPosicion}    sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {2}  min = {-90} max = {90} def={-90} action = {modificaPosicion}  sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {3}  min = {-90} max = {90} def={0} action = {modificaPosicion}    sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {4}  min = {-90} max = {90} def={0} action = {modificaPosicion}    sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {5}  min = {-90} max = {90} def={0} action = {modificaPosicion}    sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {6}  min = {-90} max = {90} def={0}    action = {modificaPosicion}     sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {7}  min = {-90} max = {90} def={90}   action = {modificaPosicion}     sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {8}  min = {-90} max = {90} def={0}    action = {modificaPosicion}     sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {9}  min = {-90} max = {90} def={0}    action = {modificaPosicion}     sensibilidad ={sensibilidad}/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <FormMotor serial = {serial} n = {10} min = {-90} max = {90} def={0} action = {modificaPosicion}    sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {11} min = {-90} max = {90} def={0}    action = {modificaPosicion}     sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {12} min = {-90} max = {90} def={0}    action = {modificaPosicion}     sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {13} min = {-90} max = {90} def={0}    action = {modificaPosicion}     sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {14} min = {-80} max = {80} def={70}   action = {modificaPosicion}     sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {15} min = {0}   max = {90} def={90}   action = {modificaPosicion}     sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {16} min = {-90} max = {90} def={0}    action = {modificaPosicion}     sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {17} min = {-80} max = {80} def={-80} action = {modificaPosicion}  sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {18} min = {-90} max = {0}  def={-90} action = {modificaPosicion}  sensibilidad ={sensibilidad}/>
                <FormMotor serial = {serial} n = {19} min = {-90} max = {90} def={0} action = {modificaPosicion}    sensibilidad ={sensibilidad}/>
            </div>
    
            
        </div>
    </>
    )
}

// className="col-md-3 col-sm-12"


//            <form onSubmit={sendPositionMotorToSerial}>
//                <div className="row mb-3">
//                    <label htmlFor="colFormLabel" className=''>
//                        n                      
//                    </label>
//                    <div className="col-sm-10">
//                      <input    
//                        type = "number"
//                        name = "M"
//                        //className={ inputClassName } 
//                        id="position" 
//                        placeholder = "x"   
//                        autoComplete = "off"
//                        value = {formValues} 
//                        onChange = {handleInputChange}
//                      />
//                    </div>
//                </div>
//            </form>



//useEffect(() => {
//    dispatch( changeLanguaje(languaje) );
//    dispatch( saveConfState() );
//    // eslint-disable-next-line react-hooks/exhaustive-deps
//  }, [languaje]);