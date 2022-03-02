import { useSelector } from 'react-redux';
import { findStatus, findStatusByMatchId } from '../../../redux/statusRedux';
import { UserStatus } from '../UserStatus.js/UserStatus';
import styles from './SummaryCard.module.scss'

export const SummaryCard = props => {
    const match = props.match;
    const matchId = match.matchId;
    const status = useSelector(state => findStatusByMatchId(state, matchId))
    return (
        <section className={styles.box}>
            <h2>Kolejka: {match.round} -- {match.guest}</h2>
            <div>
                {status.map(stat => <UserStatus key={stat.id} status={stat}/>)}
            </div>
        </section>
    )
}