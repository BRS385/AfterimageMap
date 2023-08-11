import React from 'react'
import { useState } from 'react'

import './sidePanel.css'
import MapMarkers from './MapMarkers'


const SidePanel = () => {
    const [panelState, setPanelState] = useState ({openSettings: false, openMapMarkers: true})
    
    function handleSettings() {
        setPanelState({
            openSettings: !panelState.openSettings,
            openMapMarkers: false
        })
    }
    
    function handleMapMarkers() {
        setPanelState({
            openSettings: false,
            openMapMarkers: !panelState.openMapMarkers
        })
    }

    return(
        <div className='main'>
            <div className='openSettings'>
                <div className='buttonRounding buttonFirst'>
                    <img src='./Map/openSettings.svg' onClick={handleSettings} alt=':(' style={ {width: '50px', height: '50px', background: 'transparent'} }/>
                </div>
                <div className='buttonRounding buttonLast'>
                    <img src='./Map/mapMarkers.svg' onClick={handleMapMarkers} alt=':(' style={ {width: '50px', height: '50px', background: 'transparent'} }/>
                </div>
                
            </div>
            {
                panelState.openSettings &&
                <div className='panel'>
                    'Settings'
                </div>
            }
            {
                panelState.openMapMarkers &&
                <div className='panel'>
                    <MapMarkers/>
                </div>
            }
        </div>
    )

}


export default SidePanel