// REDUCERS
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

} from '../actions/actions_names.js'

const initialState = {
    pokemonsList: [],
    pokemonListFilteredSorted: [],
    pokemonDetail: { prueba: "Hola, parece que el store funciona!!" },
    pokemonTypes: [],
    isLoading: true,
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemonsList: [...action.payload]
            }

        // SIEMPRE PONER CASO DEFAULT, O SI NO NINGUN COMPONENTE PUEDE ACCEDER AL ESTADO
        default:
            return state;
    }


}




