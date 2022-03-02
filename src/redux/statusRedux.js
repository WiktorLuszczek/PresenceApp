import { API_URL } from "../config";

export const findStatus = state => state.status;
export const findStatusByMatchId = ({status}, matchId) => status.filter(stat => stat.matchId === matchId)
export const findStatusByMatchIdAndUserId = ({ status }, matchId, userId) => status.find(stat => stat.matchId === matchId && stat.userId === userId)

const createActionName = name => `api/status/${name}`;
const UPDATE_STATUS = createActionName("UPDATE_STATUS");
const SEND_STATUS = createActionName('SEND_STATUS');

export const updateStatus = payload => ({ type: UPDATE_STATUS, payload});
export const fetchStatus = dispatch => {
    return (dispatch) => {
        fetch(API_URL + '/status')
            .then(res => res.json())
            .then(status => dispatch(updateStatus(status)));
        }
}

export const sendStatus = payload => ({ type: SEND_STATUS, payload});

export const sendStatusRequest = newStatus => {
    const URL = API_URL + '/status/' + newStatus.id;
    return dispatch => {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStatus),
        };
        fetch(URL, options)
            .then(res => {
                if(res.ok) dispatch(sendStatus(newStatus))
                else console.log(res)
            })
    }
}

const reducer = (statePart = [], action) => {
    switch(action.type) {
        case UPDATE_STATUS:
            return [...action.payload];
        case SEND_STATUS:
            return statePart.map(status => (status.matchId === action.payload.matchId && status.userId === action.payload.userId) 
                                            ? { ...action.payload } : status)
        default:
            return statePart;
    }
}
export default reducer;