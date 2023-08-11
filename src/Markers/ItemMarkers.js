import { Marker, Popup } from "react-leaflet"
import L from 'leaflet'
import { useSelector } from "react-redux";

import ChestMarker from '../img/Markers/ChestMarker.png'
import ChestManaPotion from '../img/Locations/ChestManaPotionDessert.png'
import { HEALTH_POTION_RUS, MEDIUM_HEALTH_POTION_RUS, MANA_POTION_RUS } from "../localization";
import './markers.css'

const LeafIcon = L.Icon.extend({
    options: {
       iconSize:     [30, 30],
       shadowSize:   [0, 0],
       iconAnchor:   [15, 15],
       shadowAnchor: [0, 0],
       popupAnchor:  [0, 0]
    }
});

var chestIcon = new LeafIcon({
    iconUrl: ChestMarker,
})

const switchMarkerReducer = state => state.sidePanelReducer

const ItemMarkers = () => {
    const switchItem = useSelector(switchMarkerReducer)

    return(
        <>
                {/*Chest health potion*/}
                {
                    (switchItem.chest || switchItem.healthPotion) &&
                        <Marker position={[79.24743831828498, -157.55493164062503]} icon={chestIcon}>
                            <Popup>
                                {HEALTH_POTION_RUS}
                            </Popup>
                        </Marker>
                }
                {
                    (switchItem.chest || switchItem.healthPotion) &&
                        <Marker position={[79.30878962473248, -162.58153953611318]} icon={chestIcon}>
                            <Popup>
                                {HEALTH_POTION_RUS}
                            </Popup>
                        </Marker>
                }

            {
                //Chest medium health potion
                (switchItem.chest || switchItem.mediumHealthPotion) &&
                <Marker position={[79.16879279473494, -159.06724576091364]} icon={chestIcon}>
                        <Popup>
                            {MEDIUM_HEALTH_POTION_RUS}
                        </Popup>
                    </Marker>
            }

            {
                //Chest health potion
                (switchItem.chest || switchItem.manaPotion) && 
                <Marker position={[79.25972955160167, -158.87329101562503]} icon={chestIcon}>
                        <Popup maxWidth='1000'>
                            <div style={{textAlign: 'center'}}>
                                {MANA_POTION_RUS}
                            </div>
                            <img src={ChestManaPotion} alt="" className="popupImage"/>
                        </Popup>
                    </Marker>
            }
        </>
    )
}

export default ItemMarkers