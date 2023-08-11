import React from "react";
import './Markers/markers.css'

export const MarkerChip = (v) => {
    return (
        <div className={`chestMarkerChip ${v.switchMarker ? 'chestMarkerActive' : 'chestMarkerDisabled'}`} onClick={v.onClick}>
            <img src={v.img} alt=""/>
            <span>{v.name}</span>
        </div>
    )
}