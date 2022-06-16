import axios from "axios"

import {
    ADD_POKEMONS,
    GET_ALL_POKEMONS,
    NOT_SUCCESFUL_RESPONSE
} from "./actions_names"

const url = "http://localhost:3001/api/pokemons/"


export function addPokemons(pokemons) {
    return {
        type: ADD_POKEMONS,
        payload: pokemons
    }
}

export function getAllPokemons() {
    console.log("ACTION: getAllPokemons ejecutada...")
    return function (dispatch) {
        return axios(url)
            // .then(r => r.json())
            .then(json => {
                console.log("DATA: ", json.data)
                dispatch({ type: GET_ALL_POKEMONS, payload: json.data })
            })
            .catch((error) => {
                console.log(error)
                dispatch({ type: NOT_SUCCESFUL_RESPONSE })
            })
    }
}