import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi. How are you?', likesCount: 20 },
            { id: 2, message: 'It\'s my first post.', likesCount: 15 }
        ],
        newPostText: 'newPostText'
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
};

window.state = state;

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;