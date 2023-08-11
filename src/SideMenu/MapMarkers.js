import { useDispatch, useSelector} from "react-redux"
import { SWITCH_CHESTS, SWITCH_DIVINE_LEAF_FRAGMENT, SWITCH_HEALT_POTIONS, SWITCH_MANA_POTIONS, SWITCH_MEDIUM_HEALT_POTIONS, SWITCH_NAMELESS_PRISMATIC_BONE, SWITCH_OBSTACLES } from "../reducers/types"
import { MarkerChip } from "../Blocks"

import ChestMarkerIMG from '../img/Markers/ChestMarker.png'
import HealthPotionIMG from '../img/Markers/HealthPotion.png'
import MediumHealthPotionIMG from '../img/Markers/MediumHealthPotion.png'
import ManaPotionIMG from '../img/Markers/ManaPotion.png'
import DivineLeafFragmentIMG from "../img/Markers/DivineLeafFragment.png"
import NamelessPrimaticBoneIMG from '../img/Markers/NamelessPrismaticBone.png'
import { CHEST_RUS, DIVINE_LEAF_FRAGMENT_RUS, HEALTH_POTION_RUS, ITEMS_RUS, MANA_POTION_RUS, MEDIUM_HEALTH_POTION_RUS, NAMELESS_PRISMATIC_BONE_RUS, OBSTACLE_RUS, OTHERS_RUS } from "../localization"


const selectSidePanel = state => state.sidePanelReducer

const MapMarkers = () => {
    const switchMarkers = useSelector(selectSidePanel)
    const dispatch = useDispatch()

    function clickChest(){
        dispatch({type: SWITCH_CHESTS})
    }

    function clickHealthPotions(){
        dispatch({type: SWITCH_HEALT_POTIONS})
    }
    function clickMediumHealthPotion(){
        dispatch({type: SWITCH_MEDIUM_HEALT_POTIONS})
    }

    function clickManaPotions() {
        dispatch({type: SWITCH_MANA_POTIONS})
    }

    function clickObstacle() {
        dispatch({type: SWITCH_OBSTACLES})
    }

    function clickNamelessPrismaticBone() {
        dispatch({type: SWITCH_NAMELESS_PRISMATIC_BONE})
    }

    function clickDivineLeafFragment(){
        dispatch({type: SWITCH_DIVINE_LEAF_FRAGMENT})
    }

    return (
        <div>
            <h3 style={{textAlign: 'center', margin: 'auto'}}>
                {ITEMS_RUS}
            </h3>
                <div className="markerBlock">
                    <MarkerChip img={ChestMarkerIMG} name={CHEST_RUS} switchMarker={switchMarkers.chest} onClick={clickChest}/>
                    <MarkerChip img={HealthPotionIMG} name={HEALTH_POTION_RUS} switchMarker={switchMarkers.healthPotion} onClick={clickHealthPotions}/>
                    <MarkerChip img={MediumHealthPotionIMG} name={MEDIUM_HEALTH_POTION_RUS} switchMarker={switchMarkers.mediumHealthPotion} onClick={clickMediumHealthPotion}/>
                    <MarkerChip img={ManaPotionIMG} name={MANA_POTION_RUS} switchMarker={switchMarkers.manaPotion} onClick={clickManaPotions}/>
                </div>
            <h3 style={{textAlign: 'center', margin: 'auto'}}>
                {OTHERS_RUS}
            </h3>
            <div  className="markerBlock">
                {/*<MarkerChip name={OBSTACLE_RUS} switchMarker={switchMarkers.obstacle} onClick={clickObstacle}/>*/}
                <MarkerChip img={NamelessPrimaticBoneIMG} name={NAMELESS_PRISMATIC_BONE_RUS} switchMarker={switchMarkers.namelessPrismaticBone} onClick={clickNamelessPrismaticBone}/>
                <MarkerChip img={DivineLeafFragmentIMG} name={DIVINE_LEAF_FRAGMENT_RUS} switchMarker={switchMarkers.divineLeafFragment} onClick={clickDivineLeafFragment}/>
            </div>
        </div>
    )
}


export default MapMarkers