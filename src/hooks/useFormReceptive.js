import {useState} from 'react';

export const useFormReceptive = (inicialState = {}) => {
    const [values, setValues] = useState(inicialState);

    const handleInputChange = ({target}) => {

        setValues({
            ...values,
            [target.name] : target.value  
        });
    }

    return [ values, handleInputChange, setValues];

}