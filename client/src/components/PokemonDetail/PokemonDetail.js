import styles from "./PokemonDetail.module.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BarraInfo from "./BarraInfo";
import translateTypeName from "../../redux/helpers/translateTypeName";

export default function PokemonDetail() {
    const { idPokemon } = useParams()
    const [isLoading, setIsloading] = useState(true)
    const [pokemonInfo, setPokemonInfo] = useState({})


    useEffect(() => {
        console.log("FETCHING POKEMON INFO...")
        axios(`http://localhost:3001/api/pokemons/${idPokemon}`)
            .then((response) => {
                setPokemonInfo(response.data)
                setIsloading(false)
            })

    }, [idPokemon]
    )

    const renderCardInfo = () => {

        function calcColor(id) {
            if (id[0] === "A") { return "#c74444" } // BD
            else { return "#8179B7" }   // POKE-API
        }

        const p = pokemonInfo
        return (
            <div className={ styles.cardContainer }>
                <div className={ styles.cardHeader }>
                    <h2 style={ { color: calcColor(p.id) } } className={ styles.idPokemon }>ID: { p.id }</h2>
                    <h1>{ p.nombre.toUpperCase() }</h1>
                    <hr></hr>
                    <div className={ styles.origenContainer }>
                        <p>Origen</p>
                        <div style={ { backgroundColor: calcColor(p.id) } } className={ styles.origen }>
                            { p.id[0] === "A" ? "Base de datos" : "Poke-Api" }
                        </div>
                    </div>


                </div>
                <div className={ styles.cardBody }>
                    <div className={ styles.cardImg }>
                        <img className={ styles.img } src={ p.img } alt={ `${p.nombre}_imagen` } />
                        <h2>{ p.tipos.length > 1 ? `${translateTypeName(p.tipos[0].nombre)} - ${translateTypeName(p.tipos[1].nombre)}` : `${translateTypeName(p.tipos[0].nombre)}` }</h2>
                    </div>
                    <div className={ styles.cardDetail }>
                        <div className={ styles.cardDetailIn }>
                            <BarraInfo id={ p.id } value={ p.vida } name={ "Vida:" } />
                            <hr className={ styles.horizontalLine }></hr>
                            <BarraInfo id={ p.id } value={ p.fuerza } name={ "Fuerza:" } />
                            <hr className={ styles.horizontalLine }></hr>
                            <BarraInfo id={ p.id } value={ p.defensa } name={ "Defensa:" } />
                            <hr className={ styles.horizontalLine }></hr>
                            <BarraInfo id={ p.id } value={ p.velocidad } name={ "Velocidad:" } />
                            <hr className={ styles.horizontalLine }></hr>
                            <div className={ styles.pesoAltura }>
                                <h3 >{ `Peso: ${Number.parseFloat(p.peso / 10).toFixed(1)} Kg - Altura: ${p.altura / 10} m` }</h3>
                            </div>
                        </div>


                    </div>

                </div>


            </div >
        )
    }



    return (
        <div className={ styles.detailContainer }>

            {
                isLoading ?
                    "Cargando..." :
                    renderCardInfo()
            }

        </div>
    )
}