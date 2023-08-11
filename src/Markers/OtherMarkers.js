import { Marker, Popup } from "react-leaflet"
import L from 'leaflet'
import { useSelector } from "react-redux";

import ChestMarkerIMG from '../img/Markers/ChestMarker.png'
import DivineLeaftFragmentIMG from '../img/Markers/DivineLeafFragment.png'
import NamelessPrimaticBoneIMG from '../img/Markers/NamelessPrismaticBone.png'
import { DIVINE_LEAF_FRAGMENT_RUS, NAMELESS_PRISMATIC_BONE_RUS } from "../localization";

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
    iconUrl: ChestMarkerIMG,
})

var divineLeafIcon = new LeafIcon({
    iconUrl: DivineLeaftFragmentIMG
})

var namelessPrismaticBoneIcon = new LeafIcon({
    iconUrl: NamelessPrimaticBoneIMG
})

const switchMarkerReducer = state => state.sidePanelReducer

const OtherMarkers = () => {
    const switchMarker = useSelector(switchMarkerReducer)

    return(
        <>
            {/*Talent point*/}
            {   
                switchMarker.talentPoint &&
                    <Marker position={[79.52065743513272, -157.89550781250003]} icon={chestIcon}>
                        <Popup>
                            Точка талантов
                        </Popup>
                    </Marker>
            }
            {/*Nameless prismatic bone */}
            {
                switchMarker.namelessPrismaticBone &&
                <Marker position={[79.46857657297485, -161.553955078125]} icon={namelessPrismaticBoneIcon}>
                        <Popup>
                            {NAMELESS_PRISMATIC_BONE_RUS}
                        </Popup>
                    </Marker>
            }

            {
                //Divine leaf fragment
                switchMarker.divineLeafFragment &&
                <Marker position={[79.20636706323891, -161.29028320312503]} icon={divineLeafIcon}>
                    <Popup>
                        {DIVINE_LEAF_FRAGMENT_RUS}
                    </Popup>
                </Marker>
            }
        </>
    )
}

export default OtherMarkers