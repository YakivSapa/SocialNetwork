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
            ]
        }
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

    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);

    },

    dispatch(action) {  // { type: 'ADD-POST' }
        if (action.type === 'ADD-POST') {
            this._addPost();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText);
        }
    }

};
export default store;
window.store = store;