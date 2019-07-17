import CONST from '../CONST'

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

export const toggleIsFetchingAC = isFetching => ({ type: CONST.TOGGLE_IS_FETCHING, isFetching });
export const followAC = userId => ({ type: CONST.FOLLOW, userId });
export const unfollowAC = userId => ({type: CONST.UNFOLLOW, userId});
export const setUsersAC = users => ({ type: CONST.SET_USERS, users });
export const setCurrentPageAC = currentPage => ({ type: CONST.SET_CURRENT_PAGE, currentPage });
export const setUsersToltalCountAC = totalUsersCount => ({ type: CONST.SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleFollowingProgressAC = (isFetching, userId) => ({ type: CONST.TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export default usersReducer;
