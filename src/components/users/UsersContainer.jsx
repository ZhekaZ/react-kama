import Users from './UsersС';
import connect from "react-redux/es/connect/connect";
import {followAC, setCurrentPageAC, setUsersAC, setUsersToltalCountAC, unfollowAC} from "../../redux/users.reducer";
// import mapStateToProps from 'react-redux/es/connect/mapStateToProps'
// import mapDispatchToProps from 'react-redux/es/connect/mapDispatchToProps'

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        follow: userId => {
            dispatch(followAC(userId))
        },
        unfollow: userId => {
            dispatch(unfollowAC(userId))
        },
        setUsers: users => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: pageNumber => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: totalCount => {
            dispatch(setUsersToltalCountAC(totalCount));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
