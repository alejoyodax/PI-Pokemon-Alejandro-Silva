import { useState } from "react"
import { connect } from 'react-redux'
import styles from './Paginated.module.css'

const ITEMS_PER_PAGE = 12;




function Paginated({ pokemonsList }) {
    const [pokemonsFromStore] = useState([...pokemonsList])

    // ESTABLECEMOS LA PÁGINA INICIAL
    const [items, setItems] = useState([...pokemonsFromStore].splice(0, ITEMS_PER_PAGE))
    const [currentPage, setCurrentPage] = useState(0)

    // HANDLERS PARA CAMBIAR DE PÁGINA
    const nextHandler = () => {
        const totalItems = pokemonsFromStore.length;
        const nextPage = currentPage + 1;
        const firstIndex = nextPage * ITEMS_PER_PAGE;
        if (firstIndex >= totalItems) return;   // PARA EVITAR QUE AVANCE DE PÁGINA SI YA NO HAY ITEMS PARA MOSTRAR

        setItems([...pokemonsFromStore].splice(firstIndex, ITEMS_PER_PAGE))
        setCurrentPage(nextPage)
    }


    return (
        <div className={ styles.container }>
            <div>{ `Página ${currentPage + 1}` }</div>
            <div>
                <button>{ "<" }</button>

                <button onClick={ nextHandler } >{ ">" }</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state
    }
}


export default connect(mapStateToProps)(Paginated)