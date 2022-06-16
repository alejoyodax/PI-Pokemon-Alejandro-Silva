import { Outlet } from "react-router-dom";
import styles from './Home.module.css'

import Nav from '../NavBar/NavBar.js'
// import OrderFilter from "../OrderFilter/OrderFilter";

export default function Home() {
    return (
        <div className={ styles.home }>
            <Nav />
            <Outlet />
        </div>
    );
}