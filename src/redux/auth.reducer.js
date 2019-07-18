import { CONST } from '../CONST'
import { authAPI } from "../api/api";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONST.SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({
    type: CONST.SET_USER_DATA,
    data: {userId, email, login},
});

// thunks

export const getAuthUserData = () => dispatch => {
    authAPI.me().then(response => {
        if (!response.data.resultCode) {
            let {login, id, email} = response.data.data;

            dispatch(setAuthUserData(login, id, email));
        }
    });
};

export default authReducer;
