import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {
    let PostsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} key={p.id} />
    );

    // let newPostElement = React.createRef();

    let addPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostsFormRedux onSubmit={addPost} />
            <div className={s.posts}>
                {PostsElements}
            </div>
        </div>
    );
};
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name='newPostText' placeholder='Write a post...' value={props.newPostText} />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddPostsFormRedux = reduxForm({ form: "postsAddPostForm" })(AddPostForm);

export default MyPosts;