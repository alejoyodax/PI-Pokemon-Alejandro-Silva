import { useDispatch, useSelector } from 'react-redux'
import styles from './PokemonCardsPaginated.module.css'

// COMPONENTES
import PokemonCard from '../PokemonCard/PokemonCard.js'
import { useState } from 'react'
import { useEffect } from 'react'

export default function PokemonCardsPaginated() {
    const pokemonsToShow = useSelector(state => state.pokemonsToShow)
    const [state, setState] = useState([...pokemonsToShow])
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(12)
    const [currentItems, setCurrentItems] = useState([...state.slice(0, itemsPerPage)])
    const [totalPages, setTotalPages] = useState(Math.floor(pokemonsToShow.length / itemsPerPage))

    // SOLO CUANDO LOS POKEMONES DEL "STORE" CAMBIAN Y LA CANTIDAD DE POKEMONES A MOSTRAR
    useEffect(() => {
        console.log("pokemonsToShow: ", pokemonsToShow)
        setState([...pokemonsToShow])
        setCurrentPage(0)
        setCurrentItems([...pokemonsToShow.slice(0, itemsPerPage)])
        setTotalPages(Math.floor(pokemonsToShow.length / itemsPerPage))
    }, [pokemonsToShow, itemsPerPage]
    )

    // CUANDO LA PÁGINA ACTUAL CAMBIE
    useEffect(() => {
        const newFirstIndex = currentPage * itemsPerPage
        setCurrentItems([...state.slice(newFirstIndex, newFirstIndex + itemsPerPage)])

    }, [currentPage, state, itemsPerPage]
    )

    const siguientePagina = () => {
        console.log("-- SIGUIENTE PÁGINA")
        if (currentPage === totalPages) return
        console.log("AVANZA DE PÁGINA")
        setCurrentPage(currentPage + 1)
    }

    const anteriorPagina = () => {
        console.log("-- SIGUIENTE PÁGINA")
        if (currentPage === 0) return
        console.log("AVANZA DE PÁGINA")
        setCurrentPage(currentPage - 1)
    }

    const renderCards = () => {
        return (
            currentItems.map((p =>
                <PokemonCard
                    key={ p.id }
                    id={ p.id }
                    nombre={ p.nombre }
                    vida={ p.vida }
                    fuerza={ p.fuerza }
                    img={ p.img }
                    tipos={ p.tipos }
                />
            ))
        )
    }

    return (
        <div className={ styles.pokemonCardsContainer } >
            <div className={ styles.paginatedControlsContainer }>
                <button onClick={ anteriorPagina }>Anterior</button>
                <h3>{ `Página ${currentPage + 1} de ${totalPages + 1}` }</h3>
                <button onClick={ siguientePagina }>Siguiente</button>
            </div>

            {
                currentItems && currentItems.length > 0 ? renderCards() : "No hay resultados para tus filtros :("
            }
        </div >
    )
}
