import styles from './MatchCard.module.scss'
import { SelectionForm } from '../SelectionForm/SelectionForm'
import { useSelector } from 'react-redux';
import { findStatusByMatchIdAndUserId  } from '../../../redux/statusRedux';

export const MatchCard = props =>{
    const match = props.match;
    const matchId = match.matchId;
    const userId = props.playerId
    const objStatus = useSelector(state => findStatusByMatchIdAndUserId(state, matchId, userId));
    if(typeof objStatus !== 'object') return null;
    else return (
        <section className={styles.section}>
            <p>Kolejka</p>
            <p className={styles.boldParahraph}>{match.round}</p>
            <p>Rywal:</p>
            <p className={styles.boldParahraph}>{match.guest}</p>
            <p>Miejsce:</p>
            <p className={styles.boldParahraph}>{match.place}</p>
            <p>Data:</p>
            <p className={styles.boldParahraph}>{match.date}</p>
            <p>Godzina:</p>
            <p className={styles.boldParahraph}>{match.hour}</p>
            <SelectionForm matchId={matchId} userId={userId} objStatus={objStatus}/>
        </section>
    )
}