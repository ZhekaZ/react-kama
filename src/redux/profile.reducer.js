import {CONST, randomInt} from '../CONST'

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It is my 1st post', likesCount: 13},
    ],
    newPostText: 'it-kamasutra.com',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONST.ADD_POST:
            const newPost = {
                id: randomInt(1, 1000000),
                message: state.newPostText,
                likesCount: 0,
            };

            state.posts.push(newPost);
            state.newPostText = '';
            break;

        case CONST.UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            break;

        default:
            break;
    }

    return state;
};

export const addPostActionCreator = () => ({ type: CONST.ADD_POST });
export const updateNewPostTextActionCreator = newPostText =>
    ({type: CONST.UPDATE_NEW_POST_TEXT, newPostText});

export default profileReducer;
