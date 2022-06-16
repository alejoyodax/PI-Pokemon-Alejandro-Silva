/* eslint-disable react-hooks/exhaustive-deps */ // PARA DESACTIVAR AVISO DE DEPENDENCIA OMITIDA EN USE-EFFECT

import { useEffect } from "react"
// import { useState } from "react"
import { connect } from "react-redux"
import { getAllPokemons } from '../../redux/actions/getAllPokemons.js'
import IsLoading from "../IsLoading/IsLoading.js"
import styles from "./Pokemons.module.css"
import PokemonCards from "../PokemonCards/PokemonCards.js"

// IMPORTAMOS COMPONENTES
// COMPONENTE QUE RETORNA UNA LISTA DE CARDS DE LOS POKEMONS
function Pokemons({ pokemonsToShow, getAllPokemons, isLoading, isSuccesRequest }) {
    // SOLICITAR LISTA DE POKEMONES AL MONTAR EL COMPONENTE
    useEffect(() => {
        console.log("DID MOUNTED")
        if (pokemonsToShow.length === 0) getAllPokemons()
    }, [IsLoading]
    )


    return (
        <div className={ styles.Pokemons }>
            { isLoading ? IsLoading(isSuccesRequest) : <PokemonCards /> }
        </div>
    )
}

function mapStateToProps(state) {
    // console.log(state)
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllPokemons: () => dispatch(getAllPokemons())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);