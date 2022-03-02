import { API_URL } from "../config";

export const findMatches = state => state.matches;

const createActionName = name => `api/matches/${name}`;
const UPDATE_MATCHES = createActionName("UPDATE_MATCHES");

export const updateMatches = payload => ({ type: UPDATE_MATCHES, payload});
export const fetchMatches = dispatch => {
    return (dispatch) => {
        fetch(API_URL + '/matches')
            .then(res => res.json())
            .then(matches => dispatch(updateMatches(matches)));
        }
}

const reducer = (statePart = [], action) => {
    switch(action.type) {
        case UPDATE_MATCHES:
            return [...action.payload];
        default:
            return statePart;
    }
}
export default reducer;