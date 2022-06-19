import { SET_POKEMONS_PAGE } from "./actions_names";



export function setPokemonsPage(pokemons) {
    return {
        type: SET_POKEMONS_PAGE,
        payload: pokemons
    }
}
