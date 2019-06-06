import React from 'react';
import s from "../MyPosts.module.scss";

const Post = props => {
    return (
        <li className={s.post}>
            {props.message}
        </li>
    );
};

export default Post;
