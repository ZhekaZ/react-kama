export const CONST = {
    ADD_POST: 'ADD-POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
    UPDATE_NEW_MESSAGE_BODY: 'UPDATE-NEW-MESSAGE-BODY',
    SEND_MESSAGE: 'SEND-MESSAGE',
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET_USERS',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT: 'SET_TOTAL_USERS_COUNT',
};

export const randomInt = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
};

export default CONST;