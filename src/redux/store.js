import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi. How are you?', likesCount: 20 },
                { id: 2, message: 'It\'s my first post.', likesCount: 15 }
            ]
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Wanna hang out?' }
            ],
            dialogs: [
                { id: 1, name: 'John' },
                { id: 2, name: 'Jim' },
                { id: 3, name: 'Bob' },
                { id: 4, name: 'Silas' },
                { id: 5, name: 'Nathan' },
                { id: 6, name: 'Arthur' }
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },



    dispatch(action) {  // { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;