import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

let state = {
    posts: [
        { id: 1, message: 'Hi. How are you?', likesCount: 20 },
        { id: 2, message: 'It\'s my first post.', likesCount: 15 }
    ]
};

it('length of posts should be incremented', () => {
    // 1. Testing data
    let action = addPostActionCreator("TestingProfileReducer");
    // 2. Action
    let newState = profileReducer(state, action);
    // 3. Expectations
    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    // 1. Testing data
    let action = addPostActionCreator("TestingProfileReducer");
    // 2. Action
    let newState = profileReducer(state, action);
    // 3. Expectations
    expect(newState.posts[2].message).toBe("TestingProfileReducer");
});

it('after deleting, length of messages should be decremented', () => {
    // 1. Test data
    let action = deletePost(1);

    // 2. Action
    let newState = profileReducer(state, action)

    // 3. Expectations
    expect(newState.posts.length).toBe(1);
})