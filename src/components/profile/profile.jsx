import React from 'react';
import s from './profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
    console.log(props);
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts
                dispatch={props.dispatch}
                newPostText={props.state.newPostText}
                posts={props.state.posts} />
        </div>
    );
};

export default Profile;
