import React from 'react'
import { useSelector } from 'react-redux';
import { buttons_index } from '../../../languaje/buttons/buttons_index';

export const CalculateButton = ({handleSubmit}) => {

    const { languaje} = useSelector(state => state.conf);

    const buttonsInfo = buttons_index[`${languaje}_buttons`];

    return (
        <button
        type="submit"
        className="btn m-1 btn-block btn-outline-primary col-sm-6"
        onClick = { handleSubmit }
        >
        { buttonsInfo.calculate }
    </button>
    )
}
