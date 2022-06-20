import { useDispatch, useSelector } from 'react-redux'
import styles from './PokemonCards.module.css'

// COMPONENTES
import PokemonCard from '../PokemonCard/PokemonCard.js'

export default function PokemonCards() {
    let items = useSelector((state => state.pokemonsToShow))

    const renderCards = () => {
        return (
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
        )
    }

    return (
        <div className={ styles.pokemonCardsContainer } >
            {
                items.length > 0 ? renderCards() : "No hay resultados para tus filtros :("
            }
        </div >
    )
}
