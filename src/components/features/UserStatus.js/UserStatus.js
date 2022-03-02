import { useSelector } from 'react-redux'
import { findUserById } from '../../../redux/usersRedux'
import { translateStatus } from '../../../untils/translateStatus'

export const UserStatus = props => {
    const status = props.status
    const userId = status.userId
    const user = useSelector(state => findUserById(state, userId))
    if(typeof user === 'object') return (
        <p>{user.number} - {user.name} - {translateStatus(status.status)}</p>
    )
    else return null
}