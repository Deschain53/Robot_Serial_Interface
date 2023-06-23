import { useState } from "react"
import { DDBoptions } from "../ui/DropDownButtons/DDBoptions"


export const GestureDDB = () => {

    const actionOnChange = (caritaHexadecimal) => {
        console.log(caritaHexadecimal);
    }

    const caritas = [
        {id:'##', label:':)'},
        {id:'####', label:':('},
        {id:'######', label:';)'},
        {id:'#######', label:':|'}];

    return (
    <>
        <DDBoptions data={caritas} actionOnChange= {actionOnChange}/>    
    </>
    )
}