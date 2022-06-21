import styles from "./PokemonCard.module.css"

function TitlePokemon({ nombre }) {
    return (
        <h3 className={ styles.titlePokemon }>{ nombre.toUpperCase() }</h3>
    )
}

function ImgPokemon({ img, nombre }) {
    return (
        <img width="70px" height={ "70px" } alt={ `imagen_${nombre}` } src={ img } />
    )
}

function TiposPokemon({ tipos }) {
    return (
        <div className={ styles.tipoPokemon }>
            { tipos.map(element => <div key={ element.nombre }>{ element.nombre }</div>
            ) }
        </div>

    )
}

function HR() {
    return <hr className={ styles.horizontalLine } />
}

function IdPokemon({ id, isFromPokeApi }) {
    const style = isFromPokeApi ? "BD" : "POKE-API"
    return (<h3 className={ styles[style] } >{ id }</h3>)
}

export default function PokemonCard({ id, nombre, vida, fuerza, img, tipos }) {
    const isFromPokeApi = id[0] === "A" ? false : true

    return (

        <div className={ styles.PokemonCard }>

            <IdPokemon id={ id } isFromPokeApi={ isFromPokeApi } />
            <TitlePokemon nombre={ nombre } />
            <hr className={ styles.horizontalLine }></hr>
            <ImgPokemon img={ img } />
            <TiposPokemon tipos={ tipos } />

        </div>
    )
}