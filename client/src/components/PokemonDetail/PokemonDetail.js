import { useParams } from "react-router-dom";

export default function PokemonDetail() {
    const { idPokemon } = useParams()
    // console.log(params)

    return (
        <div>
            <h1>POKEMON DETAIL</h1>
            { idPokemon }
        </div>
    )
}