import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './dialogs.module.scss'
import Button from "@material-ui/core/Button";

import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs.reducer';

const DialogItem = props => {
    const url = '/dialogs/' + props.id;
    return(
        <li className={s.dialogs + ' ' + s.active}>
            <NavLink to={url}>{props.name}</NavLink>
        </li>
    );
};
const Message = props => {
  return (
      <li className={s.dialog}>{props.message}</li>
  );
};

const Dialogs = props => {
    const state = props.store.getState().dialogsPage;

    const DialogItems = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    const MessagesItems = state.messages.map(msg => <Message message={msg.message} />);
    const newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    const onNewMessageChange = e => {
        const body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                {DialogItems}
            </ul>
            <ul className={s.messages}>
                {MessagesItems}
            </ul>
            <div className={s.messages}>
                <textarea onChange={onNewMessageChange} value={newMessageBody} cols="30" rows="10" />
                <div><Button onClick={onSendMessageClick} variant="contained" color="primary">Send</Button></div>
            </div>
        </div>
    );
};
export default Dialogs;
