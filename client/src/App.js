import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css';
// import NavBar from './components/NavBar/NavBar.js'
import Home from './components/Home/Home';
import About from './components/About/About.js';
import NotFound from './components/NotFound/NotFoundPage.js';
import Homepage from './components/Homepage/Homepage.js';
import Pokemons from './components/Inicio/Pokemons.js'
import CreatePokemon from './components/CreatePokemon/CreatePokemon.js'
import PokemonDetail from './components/PokemonDetail/PokemonDetail.js';

function App() {
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
