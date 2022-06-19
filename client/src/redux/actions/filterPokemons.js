import {
    FILTER_POKEMONS
} from "./actions_names"

export function filterPokemons(filters) {
    return {
        type: FILTER_POKEMONS,
        payload: filters
    }
}



