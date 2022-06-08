import { Link } from "react-router-dom"
import styles from './Homepage.module.css'

export default function Homepage() {

    return (
        <div className={ styles.homepageContainer }>

            <div className={ styles.boxWelcome }>
                <h2 className="normalizar">Bienvenido a PokemonLand</h2>
                <br></br>
                <Link to="/home">Vamos!</Link>
            </div>

        </div>

    )
}