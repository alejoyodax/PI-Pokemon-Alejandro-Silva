import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'
import logo from "../../img/logo.png"

// ESTABLECE COLOR AL LINK ACTIVO
const getColorIfActive = ({ isActive }) => {
    return isActive ? styles.activeLink : styles.link
}

export default function NavBar() {
    return (
        <header className={ styles.header }>
            <div>
                <img src={ logo } alt='logo pokeland'></img>
            </div>

            <nav className={ styles.navContainer }>
                <ul>
                    <li className={ styles.liContainer }>
                        <NavLink className={ getColorIfActive }
                            to="pokemons" >Inicio</NavLink>
                    </li>
                    <li className={ styles.liContainer }>
                        <NavLink className={ getColorIfActive }
                            to="crear-pokemon">Crear pokemon</NavLink>
                    </li>
                    <li className={ styles.liContainer }>
                        <NavLink className={ getColorIfActive }
                            to="acerca-de">Acerca de</NavLink>
                    </li>

                </ul>
            </nav>
        </header >
    );
}


