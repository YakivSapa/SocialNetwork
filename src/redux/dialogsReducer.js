const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return { ...state, messages: [...state.messages, { id: 6, message: body }] };

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;