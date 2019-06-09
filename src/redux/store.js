import profileReducer from '../redux/profile.reducer';
import dialogsReducer from '../redux/dialogs.reducer';
import sidebarReducer from '../redux/sidebar.reducer';

// STORE
const store = {
    _state: {
        sidebar: {},
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 3},
                {id: 2, message: 'It is my 1st post', likesCount: 13},
            ],
            newPostText: 'it-kamasutra.com',
        },
        dialogsPage: {
            messages: [
                {id:3, message: 'Hi'},
                {id:4, message: 'How is your deal?'},
                {id:5, message: 'Yo man'},
                {id:6, message: 'Are you hear me?'},
            ],
            dialogs: [
                {id:7, name: 'Item 1'},
                {id:8, name: 'Item 2'},
                {id:9, name: 'Item 3'},
                {id:10, name: 'Item 4'},
                {id:11, name: 'Item 5'},
                {id:12, name: 'Item 6'},
                {id:13, name: 'Item 7'},
            ],
            newMessageBody: [

            ],
        },
    },
    _callSubscriber() {
        console.log('State was changed!');
    },
    addPost() {
        const newPost = {
            id: 123,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;
window.store = store;
