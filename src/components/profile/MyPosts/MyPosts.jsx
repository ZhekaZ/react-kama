import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.scss';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile.reducer';

const MyPosts = props => {
    const postsElements =
        props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    const newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea
                    id="filled-multiline-flexible"
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}
                />
                <div>
                    <Button onClick={onAddPost} variant="contained" color="primary"> Add post </Button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
