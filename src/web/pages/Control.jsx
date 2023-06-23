import React, { useState } from 'react';
import { PmodeButton } from '../components/Buttons/DevModeButton';
import { WebLayout } from '../layout/WebLayout';
import { BasicMode } from '../components/BasicMode/BasicMode';
import { Devmode } from '../components/Devmode/DevMode';

export const Control = ({serial = null}) => {
    //const {isDevMode,isConectedB } = useSelector(state => state.conf);
    const [isDevMode, setIsDevMode] = useState(true);

    const changeMode = () => {
        setIsDevMode(!isDevMode);
    }

    return (
        <>
    <WebLayout/>
        <div>
            <PmodeButton isDevMode = {isDevMode} changeMode = { changeMode }/>
        </div>

        {             
            isDevMode ?
                (
                <div className="container">
                    <div className="row">
                        <Devmode serial = { serial }/>
                    </div>
                  </div>
                )
            :       
                (
                  <div className="container">
                      <div className="row">
                          <BasicMode serial = { serial }/>
                      </div>
                  </div>
                )        
        }
        </>

        
    )
}


