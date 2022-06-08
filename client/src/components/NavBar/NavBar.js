import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'

// ESTABLECE COLOR AL LINK ACTIVO
const getColorIfActive = ({ isActive }) => {
    return isActive ? styles.activeLink : ''
}

export default function NavBar() {
    return (
        <header className={ styles.header }>


            <nav >
                <ul>
                    <li>
                        <NavLink className={ getColorIfActive }
                            to="pokemons" >Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink className={ getColorIfActive }
                            to="create-pokemon">Crear pokemon</NavLink>
                    </li>
                    <li>
                        <NavLink className={ getColorIfActive }
                            to="about">Acerca de</NavLink>
                    </li>

                </ul>
            </nav>
        </header >
    );
}


