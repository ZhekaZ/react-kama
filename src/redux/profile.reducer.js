import {CONST, randomInt} from '../CONST'

const initialState = {
    posts: [
        {id: randomInt(1, 1000000), message: 'Hi, how are you?', likesCount: randomInt(1, 1000000)},
        {id: randomInt(1, 1000000), message: 'It is my 1st post', likesCount: randomInt(1, 1000000)},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONST.ADD_POST:
            const newPost = {
                id: randomInt(1, 1000000),
                message: state.newPostText,
                likesCount: 0,
            };

            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        case CONST.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText,
            };
        case CONST.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: CONST.ADD_POST });
export const updateNewPostTextActionCreator = newPostText => ({type: CONST.UPDATE_NEW_POST_TEXT, newPostText});
export const setUserProfile = profile => ({ type: CONST.SET_USER_PROFILE, profile });

export default profileReducer;
