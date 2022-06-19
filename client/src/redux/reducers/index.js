// REDUCERS
import {
    FILTER_POKEMONS,
    GET_ALL_POKEMONS,
    GET_POKEMON_TYPES,
    NOT_SUCCESFUL_RESPONSE,
    // GET_POKEMON_BY_ID,
    // GET_POKEMON_BY_NAME,
    // GET_POKEMON_TYPES,
    // FILTER_POKEMON_BY_TYPE,
    // SORT_POKEMON_BY_NAME_ASC,
    // SORT_POKEMON_BY_NAME_DES,
    // SORT_POKEMON_BY_STRENGTH_ASC,
    // SORT_POKEMON_BY_STRENGTH_DES,

} from '../actions/actions_names.js'
import filterPokemons from '../helpers/filterPokemons.js'

const initialState = {
    pokemonsList: [],   // LOS POKEMONES QUE LLEGAN DE LA API
    pokemonsToShow: [],
    pokemonsPage: [],
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

        case FILTER_POKEMONS:
            const filters = action.payload // FILTERS ES UN OBJETO
            const filteredPokemons = filterPokemons({ origen: filters.origen, tipo: filters.tipo, pokemonsList: state.pokemonsList })

            return {
                ...state,
                pokemonsToShow: [...filteredPokemons]
            }

        case GET_POKEMON_TYPES:
            return {
                ...state,
                pokemonTypes: [...action.payload]
            }



        // SIEMPRE PONER CASO DEFAULT, O SI NO NINGUN COMPONENTE PUEDE ACCEDER AL ESTADO
        default:
            return state;
    }


}




