import axios from "axios"

import {
    GET_POKEMON_TYPES,
} from "./actions_names"

const url = "http://localhost:3001/api/types/"

export function getPokemonTypes() {
    console.log("ACTION: getPokemonTypes ejecutada...")
    return function (dispatch) {
        return axios(url)
            // .then(r => r.json())
            .then(json => {
                // console.log("DATA: ", json.data)
                dispatch({ type: GET_POKEMON_TYPES, payload: json.data })
            })
            .catch((error) => {
                console.log("ERROR AL SOLICITAR LOS TIPOS DE POKEMON")
            })
    }
}