import React from 'react';
// import {randomInt} from "../../CONST";
import * as axios from 'axios';
import s from './users.module.scss';

class Users extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                console.log(response);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                console.log(response);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        const photoUrl = 'https://randomuser.me/api/portraits/med/lego/6.jpg';

        const pagesCount = this.props.totalUsersCount / this.props.pageSize;

        const pages = [];

        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={s.pagination}>
                    {
                        pages.map(p =>
                            <span
                                onClick={() => { this.onPageChanged(p) }}
                                className={this.props.currentPage === p && s.active}>{p}</span>
                        )
                    }
                </div>
                <div className={s.users}>
                {
                    this.props.users.map( u => {
                        return <div key={u.id} className={s.user} >
                            <div>
                                <img src={
                                    u.photos && u.photos.small ? u.photos.small : photoUrl
                                } alt=""/>
                                <br/>
                                { u.followed ?
                                    <button onClick={() => { this.props.unfollow(u.id) } }>Unfollow</button> :
                                    <button onClick={() => { this.props.follow(u.id) } }>Follow</button> }
                            </div>
                            <div>
                                {u.name}
                                &nbsp;
                                {u.status}
                            </div>
                            <div>
                                {'u.location.country'}
                                &nbsp;
                                {'u.location.city'}
                            </div>
                        </div>
                    })
                }
                </div>
            </div>
        );
    }
}

export default Users;
