import {CONST, randomInt} from '../CONST'

const initialState = {
    messages: [
        {id:randomInt(1, 1000000), message: 'Hi'},
        {id:randomInt(1, 1000000), message: 'How is your deal?'},
        {id:randomInt(1, 1000000), message: 'Yo man'},
        {id:randomInt(1, 1000000), message: 'Are you hear me?'},
    ],
    dialogs: [
        {id:randomInt(1, 1000000), name: 'Item ' + randomInt(1, 1000000)},
        {id:randomInt(1, 1000000), name: 'Item ' + randomInt(1, 1000000)},
        {id:randomInt(1, 1000000), name: 'Item ' + randomInt(1, 1000000)},
        {id:randomInt(1, 1000000), name: 'Item ' + randomInt(1, 1000000)},
        {id:randomInt(1, 1000000), name: 'Item ' + randomInt(1, 1000000)},
        {id:randomInt(1, 1000000), name: 'Item ' + randomInt(1, 1000000)},
        {id:randomInt(1, 1000000), name: 'Item ' + randomInt(1, 1000000)},
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
