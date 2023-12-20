import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


    let PostsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />
    );
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                New Post
            </div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <button onClick={addPost}>Add Post</button>
            <div className={s.posts}>
                {PostsElements}
            </div>
        </div>
    );
};

export default MyPosts;