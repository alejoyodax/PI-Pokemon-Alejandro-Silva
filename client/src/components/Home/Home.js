import { Outlet } from "react-router-dom";
import styles from './Home.module.css'

import Nav from '../NavBar/NavBar.js'

export default function Home() {
    return (
        <div className={ styles.home }>
            <Nav />
            <h1>HOME</h1>
            <Outlet />
        </div>
    );
}