import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import styles from '../../Dialogs/Dialogs.module.css';

const MyPosts = React.memo(props => {
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
});

let maxLength = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.textForm}>
            <div>
                <Field className={styles.textarea} component={Textarea} name='newPostText' placeholder='Write a post...' value={props.newPostText}
                    validate={[required, maxLength]} />
            </div>
            <div>
                <button className={styles.button}>Add Post</button>
            </div>
        </form>
    )
}

const AddPostsFormRedux = reduxForm({ form: "postsAddPostForm" })(AddPostForm);

export default MyPosts;