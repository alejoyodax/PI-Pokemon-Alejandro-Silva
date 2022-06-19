function filtroPorOrigen(origen, pokemon) {
    if (origen === "Poke-Api") {
        // QUIERO PREGUNTAR SI ESE POKEMON ES DE LA POKE API
        if (pokemon.id[0] !== "A") return true
        return false
    }
    if (origen === "Base de datos") {
        if (pokemon.id[0] === "A") return true
        return false
    }
    if (origen === "Todos") return true
}

function filtroPorTipo(tipo, pokemon) {
    if (tipo === "Todos") return true
    for (let i = 0; i < pokemon.tipos.length; i++) {
        if (pokemon.tipos[i].nombre === tipo) return true
    }
    return false
}


export default function filterPokemons({ origen, tipo, pokemonsList }) {
    console.log(origen, tipo, pokemonsList)

    // SI NO SE APLICA NIGÚN FILTRO
    if (origen === "Todos" && tipo === "Todos") console.log(pokemonsList)
    // QUIERO LA LISTA DE TODOS LOS POKEMONES DE LA "BD" Y CLASE "WATER"
    let filteredPokemons = pokemonsList.filter((pokemon) => {
        if (
            filtroPorOrigen(origen, pokemon) &&
            filtroPorTipo(tipo, pokemon)
        ) {
            console.log("Cumple con la condición el pokemon: ", pokemon.nombre)
            return true
        } else { return false }
    })

    console.log(filteredPokemons)
    return filteredPokemons

}
