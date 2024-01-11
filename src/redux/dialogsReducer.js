const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    newMessageBody: "",
    dialogs: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jim' },
        { id: 3, name: 'Bob' },
        { id: 4, name: 'Silas' },
        { id: 5, name: 'Nathan' },
        { id: 6, name: 'Arthur' }
    ],
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Wanna hang out?' }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return { ...state, newMessageBody: action.body };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return { ...state, newMessageBody: '', messages: [...state.messages, { id: 6, message: body }] };

        default:
            return state;
    }
}

export const sendMessageCreater = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;