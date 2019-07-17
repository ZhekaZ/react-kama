import React from 'react';
import s from './users.module.scss';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import CONST from '../../CONST';


const Users = props => {
    const photoUrl = 'https://randomuser.me/api/portraits/med/lego/6.jpg';

    const pagesCount = props.totalUsersCount / props.pageSize;

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={s.pagination}>
            {
                pages.map(p =>
                    <span
                        onClick={() => {
                            props.onPageChanged(p)
                        }}
                        className={props.currentPage === p && s.active}>{p}</span>
                )
            }
        </div>
        <div className={s.users}>
            {
                props.users.map(u => {
                    return <div key={u.id} className={s.user}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={
                                    u.photos && u.photos.small ? u.photos.small : photoUrl
                                } alt=""/>
                            </NavLink>
                            <br/>
                            {u.followed
                                ? <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.toggleFollowingProgress(true, u.id);
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': CONST.API_KEY,
                                            },
                                        })
                                        .then(res => {
                                            if (res.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }

                                            props.toggleFollowingProgress(false, u.id);

                                            // this.props.toggleIsFetching(false);
                                            // this.props.setUsers(res.data.items);
                                            // this.props.setTotalUsersCount(res.data.totalCount);
                                        })
                                        .catch(err => console.log(err));
                                }}>Unfollow</button>
                                : <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.toggleFollowingProgress(true, u.id);

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': CONST.API_KEY,
                                            },
                                        })
                                        .then(res => {
                                            if (res.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }

                                            props.toggleFollowingProgress(false, u.id);
                                        })
                                        .catch(err => console.log(err));
                                }}>Follow</button>
                            }
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
};

export default Users;
