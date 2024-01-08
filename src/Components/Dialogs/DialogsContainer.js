import StoreContext from '../../StoreContext';
import { sendMessageCreater, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {(store) => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreater());
            };
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            };

            return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={store.getState().dialogsPage} />
        }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer;