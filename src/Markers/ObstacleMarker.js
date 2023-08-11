import { Marker} from "react-leaflet"
import L from 'leaflet'
import { useSelector } from "react-redux";

import ObstacleRightIMG from '../img/Markers/ObstacleRight.png'

const LeafIcon = L.Icon.extend({
    options: {
       iconSize:     [15, 15],
       shadowSize:   [0, 0],
       iconAnchor:   [15, 15],
       shadowAnchor: [0, 0],
       popupAnchor:  [0, 0]
    }
});

var obstacleIcon = new LeafIcon({
    iconUrl: ObstacleRightIMG,
})


const switchMarkerReducer = state => state.sidePanelReducer

const ObstacleMarkers = () => {
    const switchMarker = useSelector(switchMarkerReducer)

    return (
        <>
           {
           /* switchMarker.obstacle &&
            <Marker position={[79.16307540424508, -158.68652343750003]} icon={obstacleIcon}/>*/
           }
        </>
    )
}

export default ObstacleMarkers