import {CONST, randomInt} from '../CONST'

const initialState = {
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
    newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONST.UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };
        case CONST.SEND_MESSAGE:
            const body = state.newMessageBody;

            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: randomInt(1, 1000000), message: body}],
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({ type: CONST.SEND_MESSAGE });
export const updateNewMessageBodyCreator = body => ({ type: CONST.UPDATE_NEW_MESSAGE_BODY, body });

export default dialogsReducer;
