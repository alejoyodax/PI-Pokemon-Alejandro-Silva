/* eslint-disable react-hooks/exhaustive-deps */ // PARA DESACTIVAR AVISO DE DEPENDENCIA OMITIDA EN USE-EFFECT
import { useEffect } from "react"
import { useSelector } from "react-redux"
import styles from "./Pokemons.module.css"

// IMPORTAR ACTIONS CREATORS
// IMPORTAR COMPONENTES
import PokemonCards from "../PokemonCards/PokemonCards.js"
import IsLoading from "../IsLoading/IsLoading.js"
import FilterSort from "../FilterSort/FilterSort"
// COMPONENTE QUE RETORNA UNA LISTA DE CARDS DE LOS POKEMONS
export default function Pokemons() {
    let isLoading = useSelector((state) => state.isLoading)
    let isSuccesRequest = useSelector((state) => state.isSuccesRequest)


    return (
        <div className={ styles.Pokemons }>
            <FilterSort />
            { isLoading ? IsLoading(isSuccesRequest) : <PokemonCards /> }
        </div>
    )
}


