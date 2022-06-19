import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
// import NavBar from './components/NavBar/NavBar.js'
import Home from './components/Home/Home';
import About from './components/About/About.js';
import NotFound from './components/NotFound/NotFoundPage.js';
import Homepage from './components/Homepage/Homepage.js';
import CreatePokemon from './components/CreatePokemon/CreatePokemon.js'
import PokemonDetail from './components/PokemonDetail/PokemonDetail.js';

//ACTIONS
import { getAllPokemons } from './redux/actions/getAllPokemons';
import Pokemons from './components/Pokemons/Pokemons';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPokemons())
  }, [dispatch]
  )

  return (
    <div className="App">
      <Routes>

        <Route path='/' element={ <Homepage /> } />

        {/* RUTA PRINCIPAL */ }
        <Route path='/home' element={ <Home /> } >
          <Route path='' element={ <Navigate to="pokemons" /> } />
          <Route path='pokemons' element={ <Pokemons /> } />
          <Route path='about' element={ <About /> } />
          <Route path='create-pokemon' element={ <CreatePokemon /> } />
          <Route path='pokemon-detail/:idPokemon' element={ <PokemonDetail /> } />
        </Route>

        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </div>
  );
}


export default App;
