import { useState } from 'react'
import { useSelector } from 'react-redux'
import { findMatches } from '../../../redux/matchesRedux'
import { SummaryCard } from '../../features/SummaryCard/SummaryCard'
import styles from './Admin.module.scss'
import { Input } from '../../common/Input/Input'
import { Link } from 'react-router-dom'

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
                <Link className={styles.linkToHeadpage} to={'/'} >Strona główna</Link>
                <h1 className={styles.title}>Podgląd statusów</h1>
                <article className={styles.article}>
                    {matches.map(match => <SummaryCard key={match.id} match={match} />)}
                </article>
            </>
        )
        }
    else{
        return( 
            <form className={styles.adminLogForm} onSubmit={handleSubmit}>
                <div>
                    <p>Imię: </p>
                    <input placeholder={'Podaj swoje imię'} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <p>Hasło: </p>
                    <input placeholder={'Podaj hasło'} type='password' onChange={e => setPass(e.target.value)}/>
                </div>
            <button>Zaloguj</button>
        </form>
        )
    }
}