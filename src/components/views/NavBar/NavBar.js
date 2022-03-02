import styles from './NavBar.module.scss';
import image from '../../../img/herb_olimpii.png'
import { Link } from 'react-router-dom';
export const NavBar = () => {
    return(
        <nav className={styles.container}>
            <div><img src={image} alt='Herb Olimpii'></img></div>
            <div><Link to='/admin'>ADMIN</Link></div>
        </nav>
    )
}