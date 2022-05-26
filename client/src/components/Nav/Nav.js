import styles from './Nav.module.css'
import Link from 'react-router-dom'

export default function App() {
    return (
        <nav className={ styles.nav }>
            <ul>
                <li>
                    <Link></Link>
                </li>
            </ul>
        </nav>
    );
}


