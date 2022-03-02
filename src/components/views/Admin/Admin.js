import { useState } from 'react'
import { useSelector } from 'react-redux'
import { findMatches } from '../../../redux/matchesRedux'
import { SummaryCard } from '../../features/SummaryCard/SummaryCard'
import styles from './Admin.module.scss'
import { Input } from '../../common/Input/Input'

export const Admin = () => {
    const matches = useSelector(state => findMatches(state))
    const adminName = 'Wiktor'
    const adminPass = 'olimpia'
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [log, setLog] = useState(false)
    const handleSubmit = e => {
        e.preventDefault();
        if(name === adminName && pass === adminPass) setLog(true)
    }
    if(log) {
        return(
            <>
                <h1 className={styles.title}>Podgląd statusów</h1>
                <article className={styles.article}>
                    {matches.map(match => <SummaryCard key={match.id} match={match} />)}
                </article>
            </>
        )
        }
    else{
        return( 
            <form onSubmit={handleSubmit}>
            <div>
                <p>Imię: </p>
                <Input placeholder={'Podaj swoje imię'} action={e => setName(e.target.value)}/>
            </div>
            <div>
                <p>Hasło: </p>
                <Input placeholder={'Podaj hasło'} action={e => setPass(e.target.value)}/>
            </div>
            <button>Zaloguj</button>
        </form>
        )
    }
}