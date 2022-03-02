import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './SelectionForm.module.scss'
import { translateStatus } from '../../../untils/translateStatus'
import { findStatusByMatchIdAndUserId, sendStatusRequest } from '../../../redux/statusRedux'

export const SelectionForm = props =>{
    const dispatch = useDispatch()
    const matchId = props.matchId;
    const userId = props.userId;
    const objStatus = props.objStatus;
    const id = objStatus.id;
    const [status, setStatus] = useState(objStatus.status);
    const handleSubmit = (e) => {
        dispatch(sendStatusRequest({id, matchId, userId, status}))
        alert('Zmieniono status na mecz w kolejce ' + matchId + ' na: ' + translateStatus(status));
    }
    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <input type="radio" id="present" name="status" value="louie" onClick={e => setStatus(e.target.id)}></input>
                <label id='desc' name='presentLabel'>Obecny</label>
            </div>
            <div>
                <input type="radio" id="absent" name="status" value="dewey" onClick={e => setStatus(e.target.id)}></input>
                <label id='desc' name='absentLabel'>Nieobecny</label>
            </div>
            <div>
                <input type="radio" id="dontKnow" name="status" value="louie" onClick={e => setStatus(e.target.id)}></input>
                <label id='desc' name='dontKnowLabel'>Nie wiem</label>
            </div>
            <p>Aktualny stauts: <span>{translateStatus(status)}</span></p>
            <button>ZAPISZ</button>
        </form>
    )
}