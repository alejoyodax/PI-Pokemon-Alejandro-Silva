import { connect } from 'react-redux'
import { useState } from 'react'
import styles from './PokemonCards.module.css'
import PokemonCard from '../PokemonCard/PokemonCard'

const ITEMS_PER_PAGE = 12;

function ControlsPaginated({ numberOfPages, currentPage, nextHandler, prevHandler }) {
    return (
        <div className={ styles.controlsPaginated }>
            <button onClick={ prevHandler } className={ styles.buttonPage }>Anterior</button>
            <h3>{ `Página ${currentPage + 1} de ${numberOfPages}` }</h3>
            <button onClick={ nextHandler }>Siguiente</button>
        </div>
    )
}

function PokemonCards({ pokemonsToShow }) {
    const [pokemonsFromStore] = useState([...pokemonsToShow])
    const [items, setItems] = useState([...pokemonsFromStore].splice(0, ITEMS_PER_PAGE))
    const [currentPage, setCurrentPage] = useState(0)
    const numberOfPages = Math.floor(pokemonsFromStore.length / ITEMS_PER_PAGE) + 1

    // HANDLERS PARA CAMBIAR DE PÁGINA
    const nextHandler = () => {
        const totalItems = pokemonsFromStore.length;
        const nextPage = currentPage + 1;
        const firstIndex = nextPage * ITEMS_PER_PAGE;
        if (firstIndex >= totalItems) return;   // PARA EVITAR QUE AVANCE DE PÁGINA SI YA NO HAY ITEMS PARA MOSTRAR

        setItems([...pokemonsFromStore].splice(firstIndex, ITEMS_PER_PAGE))
        setCurrentPage(nextPage)
    }

    const prevHandler = () => {
        const prevPage = currentPage - 1
        if (prevPage < 0) return
        const firstIndex = prevPage * ITEMS_PER_PAGE

        setItems([...pokemonsFromStore].splice(firstIndex, ITEMS_PER_PAGE))
        setCurrentPage(prevPage)
    }

    return (
        <div className={ styles.pokemonCardsContainer }>
            <ControlsPaginated numberOfPages={ numberOfPages } nextHandler={ nextHandler } prevHandler={ prevHandler } currentPage={ currentPage } />
            {
                items.map((p =>
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
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCards)