import styles from './NavBar.module.scss';
import image from '../../../img/herb_olimpii.png'
export const NavBar = () => {
    return(
        <nav className={styles.container}>
            <div><img src={image} alt='Herb Olimpii'></img></div>
            <div><a href="/log_admin">ADMIN</a></div>
        </nav>
    )
}