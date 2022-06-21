/* eslint-disable react-hooks/exhaustive-deps */ // PARA DESACTIVAR AVISO DE DEPENDENCIA OMITIDA EN USE-EFFECT
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from "./Pokemons.module.css"

// IMPORTAR ACTIONS CREATORS
// IMPORTAR COMPONENTES
import PokemonCards from "../PokemonCards/PokemonCards.js"
import PokemonCardsPaginated from "../PokemonCardsPaginated/PokemonCardsPaginated"
import IsLoading from "../IsLoading/IsLoading.js"
import FilterSort from "../FilterSort/FilterSort"

import resetFilter from "../../redux/actions/resetFilter.js"

export default function Pokemons() {
    let isLoading = useSelector((state) => state.isLoading)
    let isSuccesRequest = useSelector((state) => state.isSuccesRequest)

    let dispatch = useDispatch()
    // RESETEAMOS LOS FILTROS CUANDO SE DESMONTE EL ACTUAL COMPONENTE
    useEffect(() => {
        return function resetFilters() {
            dispatch(resetFilter())
        }
    })

    return (
        <div className={ styles.Pokemons }>
            { isLoading ? IsLoading(isSuccesRequest) : <PokemonCardsPaginated /> }
        </div>
    )
}


