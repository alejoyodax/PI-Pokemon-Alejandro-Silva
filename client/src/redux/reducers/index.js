// REDUCERS
import {
    GET_ALL_POKEMONS,
    NOT_SUCCESFUL_RESPONSE,
    ADD_POKEMONS,
    // GET_POKEMON_BY_ID,
    // GET_POKEMON_BY_NAME,
    // GET_POKEMON_TYPES,
    // FILTER_POKEMON_BY_TYPE,
    // SORT_POKEMON_BY_NAME_ASC,
    // SORT_POKEMON_BY_NAME_DES,
    // SORT_POKEMON_BY_STRENGTH_ASC,
    // SORT_POKEMON_BY_STRENGTH_DES,

} from '../actions/actions_names.js'

const initialState = {
    pokemonsList: [],   // LOS POKEMONES QUE LLEGAN DE LA API
    pokemonsToShow: [], // SON LOS POKEMONS FILTRADOS Y ORDENADOS
    pokemonDetail: {},  // EL POKEMON DEL CUAL SE MUESTRA INFORMACIÓN
    pokemonTypes: [],
    isLoading: true,
    isSuccesRequest: true
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemonsList: [...action.payload],
                pokemonsToShow: [...action.payload],
                isLoading: false,
                isSuccesRequest: true
            }


        case NOT_SUCCESFUL_RESPONSE:
            return {
                ...state,
                isLoading: false,
                isSuccesRequest: false
            }
        // SIEMPRE PONER CASO DEFAULT, O SI NO NINGUN COMPONENTE PUEDE ACCEDER AL ESTADO
        default:
            return state;
    }


}




