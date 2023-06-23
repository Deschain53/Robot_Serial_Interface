import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { buttons_index } from '../../../languaje/buttons/buttons_index';
import { LinearProgressWithLabel } from '../Progress/LinearProgressWithLabel';

export const ExampleButton = ({textButton = null}) => {
    const { pricesInitilizedFromStorage } = useSelector( state => state.conf );
    const { languaje } = useSelector(state => state.conf);

    const [isPricesExtracted, setIsPricesExtracted] = useState(false);

    const [valueProgress, setValueProgress] = useState(-1);
    
    const cuenta100 = () => {
        setValueProgress(0);
        setTimeout( () => setValueProgress(50)  , 2000);
        setTimeout( () => setValueProgress(75)  , 3000);
        setTimeout( () => setValueProgress(100)  , 5000);
        setIsPricesExtracted(true);
    }

    const buttonsInfo = buttons_index[`${languaje}_buttons`];

    return (
        <div className="container mt-2 mb-2">
            <div className="row align-items-center">

                <div className="col-sm-3"> </div>

                <div className="col-sm-6 align-items-center">
                    <button 
                        className={"btn btn-block btn-outline-" 
                                    + (isPricesExtracted ? "success" 
                                        : (pricesInitilizedFromStorage) ? "warning" : "danger")} 
                        onClick = { cuenta100 }
                    > 
                        { textButton? textButton : buttonsInfo.send}
                    </button>
                </div>

                <div className="col-sm-3"> </div>

            </div>

            {   //Indicate if it shows the progress bar or not
                (valueProgress === -1)
                ?   (<></>)
                :
                    (
                        <div className="row align-items-center">
                            <div className="col-12">
                                <LinearProgressWithLabel  value={valueProgress} />
                            </div>
                        </div>
                    )
            }





        </div>




    )
}


