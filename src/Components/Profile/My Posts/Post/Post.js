import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://images.template.net/wp-content/uploads/2017/02/09174631/Small-Marketing-Business-Logo.jpg"></img>
            {props.message}
            <div>
                <span>{props.likeCount} Like</span>
            </div>
        </div>
    );
};

export default Post;