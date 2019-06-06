import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.scss';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile.reducer';

const MyPosts = props => {
    const postsElements =
        props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const onPostChange = () => {
        let action = updateNewPostTextActionCreator(newPostElement.current.value);
        props.dispatch(action);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea
                    id="filled-multiline-flexible"
                    label="Multiline"
                    multiline
                    rowsMax="4"
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}
                    margin="normal"
                    variant="filled"
                />
                <div>
                    <Button onClick={addPost} variant="contained" color="primary"> Add post </Button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
