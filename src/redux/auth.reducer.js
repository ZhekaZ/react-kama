import {CONST, randomInt} from '../CONST'

const initialState = {
    userId: null,
    email: null,
    login: null,
    // isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONST.SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
};

export const setUserDataAC = (userId, email, login) => ({
    type: CONST.SET_USER_DATA,
    data: { userId, email, login },
});

export default authReducer;
