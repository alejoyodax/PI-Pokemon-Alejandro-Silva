// ACTIONS
import {
    GET_ALL_POKEMONS,
    GET_POKEMON_BY_ID,
    GET_POKEMON_BY_NAME,
    GET_POKEMON_TYPES,
    FILTER_POKEMON_BY_TYPE,
    SORT_POKEMON_BY_NAME_ASC,
    SORT_POKEMON_BY_NAME_DES,
    SORT_POKEMON_BY_STRENGTH_ASC,
    SORT_POKEMON_BY_STRENGTH_DES,

} from "./actions_names.js";

// 
export function getAllPokemons() {
    return function (dispatch) {
        console.log("ACTION: GET ALL POKEMONS")
        dispatch({
            type: GET_ALL_POKEMONS,
            payload: [
                { name: "Bulbasaur", tipos: ["agua"] },
                { name: "Pikachu", tipos: ["electricidad"] }
            ]
        })

    }
}


