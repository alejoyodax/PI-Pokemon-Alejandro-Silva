import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from "./FilterSort.module.css"
// Componentes


//ACTIONS
import { filterPokemons } from "../../redux/actions/filterPokemons"
import { getPokemonTypes } from "../../redux/actions/getPokemonTypes"

export default function FilterSort({ setItemsPorPagina }) {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPokemonTypes())
    }, [dispatch]
    )

    const pokemonTypes = useSelector(state => state.pokemonTypes)
    const valueOfSource = useRef()
    const valueOfType = useRef()

    // EJECUTA LA ACCIÓN DE FILTRAR POKEMONES    
    function handleFilterBySource(event) {
        const origen = valueOfSource.current.value
        const tipo = valueOfType.current.value
        dispatch(filterPokemons({ origen, tipo })) // A filterPokemons, LE PASAMOS COMO ARGUMENTO UN OBJETO CON LOS VALORES DE LAS VARIABLES DE LOS FILTROS, EN ESTE CASO SERÍAN 2
    }

    return (
        <div className={ styles.filtersSortsContainer }>
            <div className={ styles.s }>
                <label>Origen de Pokemón</label>
                <select className={ styles.select } ref={ valueOfSource } onChange={ (e) => { handleFilterBySource(e) } }>
                    <option>Todos</option>
                    <option>Poke-Api</option>
                    <option>Base de datos</option>
                </select>
            </div>

            <div>
                <label>Tipo</label>
                <select className={ styles.select } ref={ valueOfType } onChange={ (e) => { handleFilterBySource(e) } }>
                    <option>Todos</option>
                    { pokemonTypes.length === 0 ?
                        <option>Cargando...</option> :
                        pokemonTypes.map((type, index) => {
                            return <option key={ type.nombre }>{ type.nombre }</option>
                        })
                    }
                </select>
            </div>

            <div>
                <label>Items por página</label>
                <select className={ styles.select } onChange={ (e) => setItemsPorPagina(e) }>
                    <option>12</option>
                    <option>24</option>
                    <option>48</option>
                    <option>Todos</option>
                </select>
            </div>


        </div>
    )
}