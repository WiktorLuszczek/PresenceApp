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
    const url = () =>{
        if(typeof user === 'object')return '/user' + user.id;
        else return '/'
    }
    return (
        <form className={styles.form} action={url()} method='get'>
            <div className={styles.box}>
                <p>Imię:</p>
                <Input placeholder={'Podaj swoje imię'} action={e => setName(e.target.value)} />
            </div>
            <div className={styles.box}>
                <p>Numer:</p>
                <Input placeholder={'Podaj swój numer'} action={e => setNumber(e.target.value)} />
            </div>
            <Button>Zaloguj</Button>
        </form>
    )
}