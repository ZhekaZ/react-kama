import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile.reducer';
import connect from "react-redux/es/connect/connect";
import MyPosts from "./MyPosts";

const mapStateToProps = state => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateNewPostText: text => {
            const action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
