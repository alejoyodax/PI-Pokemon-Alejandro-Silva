import { connect } from "react-redux"
import { getAllPokemons } from '../../redux/actions/index.js'

import * as actionCreators from '../../redux/actions/index.js'
import { bindActionCreators } from "redux"


function Pokemons(props) {

    return (
        <div>
            <h1>POKEMONS</h1>
            <button onClick={ props.getAllPokemons } ></button>


        </div>
    )
}

function mapStateToProps(state) {
    console.log(state)
    return {
        listPokemon: state.pokemonDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllPokemons: () => dispatch(getAllPokemons())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);