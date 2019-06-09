import React from 'react';

import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs.reducer';
import Dialogs from "./dialogs";

import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    // const state = props.store.getState().dialogsPage;

    return (
        <StoreContext.Consumer>
            {
                store => {
                    // const state = store.getState().dialogsPage;

                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator());
                    };

                    const onNewMessageChange = body => {
                        store.dispatch(updateNewMessageBodyCreator(body));
                    };

                    return <Dialogs
                        dialogsPage={store.getState().dialogsPage}
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick} />
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
