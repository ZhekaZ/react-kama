import CONST from '../CONST'
import { usersAPI } from "../api/api";

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONST.FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            };

        case CONST.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            };

        case CONST.SET_USERS:
            return { ...state, users: action.users };

        case CONST.SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case CONST.SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count};

        case CONST.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        case CONST.TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
            };

        default:
            return state;
    }
};

// action creators
export const toggleIsFetchingAC = isFetching => ({ type: CONST.TOGGLE_IS_FETCHING, isFetching });
export const followSuccess = userId => ({ type: CONST.FOLLOW, userId });
export const unfollowSuccess = userId => ({type: CONST.UNFOLLOW, userId});
export const setUsersAC = users => ({ type: CONST.SET_USERS, users });
export const setCurrentPageAC = currentPage => ({ type: CONST.SET_CURRENT_PAGE, currentPage });
export const setUsersToltalCountAC = totalUsersCount => ({ type: CONST.SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleFollowingProgressAC = (isFetching, userId) => ({ type: CONST.TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

// thunks
export const follow = userId => {
    return dispatch => {
        dispatch(toggleFollowingProgressAC(true, userId));
        usersAPI.follow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }

                dispatch(toggleFollowingProgressAC(false, userId));
            })
            .catch(err => console.log(err));
    }
};

export const unfollow = userId => {
    return dispatch => {
        dispatch(toggleFollowingProgressAC(true, userId));
        usersAPI.unfollow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }

                dispatch(toggleFollowingProgressAC(false, userId));
            })
            .catch(err => console.log(err));
    }
};

export default usersReducer;
