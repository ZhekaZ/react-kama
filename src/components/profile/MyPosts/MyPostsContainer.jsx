import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile.reducer';
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    // const state = props.store.getState();

    return (
        <StoreContext.Consumer>
            {
                store => {
                    const state = store.getState();

                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    const onPostChange = text => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    };

                    return (<MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText} />)
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
