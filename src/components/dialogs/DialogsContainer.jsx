import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs.reducer';
import Dialogs from "./dialogs";
import connect from "react-redux/es/connect/connect";

const mapStateToProps = state => {
    return {
        dialogsPage: state.dialogsPage
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateNewMessageBody: body => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
