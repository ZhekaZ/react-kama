import React from 'react';
import connect from 'react-redux/es/connect/connect';

// import { usersAPI } from '../../api/api';
import Users from './Users';
import Preloader from '../common/preloader/preloader'

import {
    followSuccess,
    setCurrentPageAC,
    // setUsersAC,
    // setUsersToltalCountAC,
    unfollowSuccess,
    // toggleIsFetchingAC,
    toggleFollowingProgressAC,
    follow,
} from '../../redux/users.reducer';


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onPageChanged = this.onPageChanged.bind(this);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged(pageNumber) {
        this.props.getUsers(pageNumber);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                toggleIsFetching={this.props.toggleIsFetching}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

// const mapDispatchToProps = dispatch => {
//     return {
//         follow: userId => {
//             dispatch(followAC(userId))
//         },
//         unfollow: userId => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: users => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: pageNumber => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: totalCount => {
//             dispatch(setUsersToltalCountAC(totalCount));
//         },
//         toggleIsFetching: isFetching => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         },
//     }
// };

export default connect(mapStateToProps, {
    follow: followSuccess,
    unfollow: unfollowSuccess,
    // setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    // setTotalUsersCount: setUsersToltalCountAC,
    // toggleIsFetching: toggleIsFetchingAC,
    toggleFollowingProgress: toggleFollowingProgressAC,
    getUsers: follow,
})(UsersContainer);
