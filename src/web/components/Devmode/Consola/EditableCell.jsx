import React , { useEffect } from 'react';
//import { useSelector  } from 'react-redux';
import {useFormReceptive} from '../../../../hooks/useFormReceptive';

const actionDefault = (idProduct) => {
    console.log('Submit from ' + idProduct);
}

export const EditableCell = ({valueInitial=0, actionOnSubmit = actionDefault, autoset = true, placeholder="" }) => {

    //const {mode} = useSelector(state => state.conf);
    const mode = 'white';

    const [formValues, handleInputChange, setValues] = useFormReceptive({value:valueInitial});

    const { value } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        actionOnSubmit(value);
        if(autoset){
            setValues({value:valueInitial});      //Para resetear valor a '' despues de ENTER
        }
    };

    useEffect(() => {
        setValues({value:valueInitial});
        // eslint-disable-next-line
    }, [valueInitial])

    //const inputClassName = "form-control fs-6 " + (mode ==='dark' ? "text-white bg-dark " : "text-black bg-light ");
    const inputClassName = "form-control fs-6 text-black bg-light";

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <input    
                    type = "text"
                    name = "value"
                    className={ inputClassName } 
                    id="value" 
                    placeholder = {placeholder}   
                    autoComplete = "off"
                    value = {value}
                    onChange = {handleInputChange}
                    />
                </div>
            </form>
    )
}
