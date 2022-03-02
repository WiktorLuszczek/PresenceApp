import { useState } from 'react'
import { useSelector } from 'react-redux'
import { findUserByNameAndNumber } from '../../../redux/usersRedux'
import { Button } from '../../common/Button/Button'
import { Input } from '../../common/Input/Input'
import styles from './LogForm.module.scss'
import { Link } from 'react-router-dom'

export const LogForm = () => {
    const [name, setName] = useState(undefined);
    const [number, setNumber] = useState(undefined);
    const user = useSelector(state => findUserByNameAndNumber(state, name, number))
    const log = () => {
        if(typeof user === 'object') return <Link to={'/user' + user.id}>Zaloguj</Link>
        else return 'Podaj swoje dane do logowania'
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(typeof user !== 'object') return alert('poprawne') 
        else {
            if(user.name === name && user.number === number){
            } else return alert('Dane do logowania są niepoprawne')
        }
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.box}>
                <p>Imię: </p>
                <Input placeholder={'Podaj swoje imię'} action={e => setName(e.target.value)} />
            </div>
            <div className={styles.box}>
                <p>Numer: </p>
                <Input placeholder={'Podaj swój numer'} action={e => setNumber(e.target.value)} />
            </div>
            {log()}
        </form>
    )
}