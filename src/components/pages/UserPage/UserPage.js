import { useSelector } from 'react-redux'
import { findMatches } from '../../../redux/matchesRedux';
import { findUserById } from '../../../redux/usersRedux';
import { MatchCard } from '../../features/MatchCard/MatchCard';
import styles from './UserPage.module.scss'
import { Link } from 'react-router-dom';

export const UserPage = () => {
    const adressHTTP = window.location.pathname;
    const id = adressHTTP.substring(5)
    const user = useSelector(state => findUserById(state, id));
    const matches = useSelector(state => findMatches(state));
    if(typeof user !== 'object') return null
    else return (
            <>  
                <h1 className={styles.title}>
                    Imię: <span className={styles.spanTitle}>{user.name}</span> 
                    Numer: <span  className={styles.spanTitle}>{user.number}</span>
                </h1>
                <Link className={styles.link} to='/'>Strona główna</Link>
                <article className={styles.article}>
                    {matches.map(match => <MatchCard key={match.id} match={match} playerId={id}/> )}
                </article>
                <Link className={styles.link} to='/'>Strona główna</Link>
            </>
    )
}