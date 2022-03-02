import { API_URL } from "../config";

export const findUsers = state => state.users;

export const findUserByNameAndNumber = ({users}, name, number) => users.find(user => user.name === name && user.number === number)
export const findUserById = ({users}, id) => users.find(user => user.id === id)

const createActionName = name => `app/users/${name}`;
const UPDATE_USERS = createActionName("UPDATE_USERS");

export const updateUsers = payload => ({ type: UPDATE_USERS, payload});
export const fetchUsers = dispatch => {
    return (dispatch) => {
        fetch(API_URL + '/users')
            .then(res => res.json())
            .then(users => dispatch(updateUsers(users)));
        }
}

const reducer = (statePart = [], action) => {
    switch(action.type) {
        case UPDATE_USERS:
            return [...action.payload];
        default:
            return statePart;
    }
}
export default reducer;