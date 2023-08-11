import { combineReducers } from "@reduxjs/toolkit"
import { SWITCH_CHESTS, SWITCH_DIVINE_LEAF_FRAGMENT, SWITCH_HEALT_POTIONS, SWITCH_MANA_POTIONS, SWITCH_MEDIUM_HEALT_POTIONS, SWITCH_NAMELESS_PRISMATIC_BONE, SWITCH_OBSTACLES } from "./types"

export const initialState ={
    //items
    chest: true,
    healthPotion: true,
    mediumHealthPotion: true,
    manaPotion: true,
    namelessPrismaticBone: true,
    //others
    talentPoint: true,
    divineLeafFragment: true,
    obstacle: true
}


export const sidePanelReducer = (state = initialState, action) =>{
    switch(action.type) {
        case SWITCH_CHESTS: 
            return {
                ...state,
                chest: !state.chest
            }

        case SWITCH_HEALT_POTIONS: 
            return {
                ...state,
                healthPotion: !state.healthPotion
            }
        case SWITCH_MEDIUM_HEALT_POTIONS:
            return {
                ...state,
                mediumHealthPotion: !state.mediumHealthPotion
            }

        case SWITCH_MANA_POTIONS:
            return {
                ...state,
                manaPotion: !state.manaPotion
            }

        case SWITCH_DIVINE_LEAF_FRAGMENT:
            return {
                ...state,
                divineLeafFragment: !state.divineLeafFragment
            }

        case SWITCH_NAMELESS_PRISMATIC_BONE:
            return {
                ...state,
                namelessPrismaticBone: !state.namelessPrismaticBone
            }

        case SWITCH_OBSTACLES:
            return {
                ...state,
                obstacle: !state.obstacle
            }

        default:
            return state
    }
}

export const rootReducer = combineReducers({
    sidePanelReducer: sidePanelReducer
})
