import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import styles from './PokemonCardsPaginated.module.css'

// COMPONENTES
import PokemonCard from '../PokemonCard/PokemonCard.js'
import FilterSort from '../FilterSort/FilterSort'

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
        // console.log("PAGINAS MONTADA")
        // console.log("pokemonsToShow: ", pokemonsToShow)
        setState([...pokemonsToShow])
        setCurrentItems([...pokemonsToShow.slice(0, itemsPerPage)])
        setTotalPages(Math.floor(pokemonsToShow.length / itemsPerPage))
    }, [pokemonsToShow, itemsPerPage]
    )

    // CUANDO EL NÚMERO DE LA PÁGINA DE POKEMONES CAMBIE (cuando cambiemos la página)
    useEffect(() => {
        const newFirstIndex = currentPage * itemsPerPage
        setCurrentItems([...state.slice(newFirstIndex, newFirstIndex + itemsPerPage)])
    }, [currentPage, state, itemsPerPage]
    )

    const siguientePagina = () => {
        if (currentPage >= totalPages) return
        // console.log("AVANZA DE PÁGINA")
        setCurrentPage(currentPage + 1)
    }

    const anteriorPagina = () => {
        if (currentPage <= 0) return
        setCurrentPage(currentPage - 1)
    }

    const setItemsPorPagina = (event) => {
        setCurrentPage(0)
        event.target.value === "Todos" ?
            setItemsPerPage(9999) :
            setItemsPerPage(parseInt(event.target.value)) // EL VALOR DEL SELECT ES UN STRING
    }

    const renderCards = () => {
        return (
            currentItems.map((p =>
                <Link style={ { textDecoration: 'none' } } to={ `detalle-pokemon/${p.id}` } key={ `link${p.id}${p.nombre}` }>
                    <PokemonCard
                        key={ `${p.id}${p.fuerza}${p.nombre}` }
                        id={ p.id }
                        nombre={ p.nombre }
                        vida={ p.vida }
                        fuerza={ p.fuerza }
                        img={ p.img }
                        tipos={ p.tipos }
                    />
                </Link>
            ))
        )
    }

    const RenderPageControls = () => {
        return (
            <div className={ styles.paginatedControlsContainer }>
                <button onClick={ anteriorPagina }>Anterior</button>
                <h3>{ `${state.length} pokemones - Página ${currentPage + 1} de ${totalPages + 1}` }</h3>
                <button onClick={ siguientePagina }>Siguiente</button>
            </div>)
    }

    return (
        <div className={ styles.pokemonCardsContainer } >
            <FilterSort setItemsPorPagina={ setItemsPorPagina } />
            <RenderPageControls />
            {
                currentItems.length > 0 ? renderCards() : "No hay resultados para tus filtros :("
            }
            { itemsPerPage > 12 ? <RenderPageControls /> : null }
        </div >
    )
}

