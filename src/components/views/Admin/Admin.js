import { useSelector } from 'react-redux'
import { findMatches } from '../../../redux/matchesRedux'
import { SummaryCard } from '../../features/SummaryCard/SummaryCard'
import styles from './Admin.module.scss'

export const Admin = () => {
    const matches = useSelector(state => findMatches(state))
    return(
        <>
            <h1 className={styles.title}>Podgląd statusów</h1>
            <article className={styles.article}>
                {matches.map(match => <SummaryCard key={match.id} match={match} />)}
            </article>
        </>
    )
}