import {CONST, randomInt} from '../CONST'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case CONST.UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        case CONST.SEND_MESSAGE:
            const body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: randomInt(1, 1000000), message: body});
            break;
        default:
            break;
    }

    return state;
};

export const sendMessageCreator = () => ({ type: CONST.SEND_MESSAGE });
export const updateNewMessageBodyCreator = body => ({ type: CONST.UPDATE_NEW_MESSAGE_BODY, body });

export default dialogsReducer;
