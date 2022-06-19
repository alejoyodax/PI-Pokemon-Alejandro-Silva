import { useSelector } from 'react-redux'
import styles from './PokemonCards.module.css'

// COMPONENTES
import PokemonCard from '../PokemonCard/PokemonCard.js'
// PRINCIPAL

export default function PokemonCards() {
    let items = useSelector((state => state.pokemonsToShow))

    return (
        <div className={ styles.pokemonCardsContainer } >
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
        </div >
    )
}
