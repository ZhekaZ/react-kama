import React from 'react';
// import {randomInt} from "../../CONST";
import {AxiosInstance as axios} from 'axios';

const Users = props => {
    console.log(props.users);
    const photoUrl = 'https://randomuser.me/api/portraits/med/lego/6.jpg';

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    console.log(response);
                    props.setUsers(response.data.items);
                });
        }
    };

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map( u => {
                    return <div key={u.id}>
                        <div>
                            <img src={
                                u.photos && u.photos.small ? u.photos.small : photoUrl
                            } alt=""/>
                            <br/>
                            { u.followed ?
                                <button onClick={() => { props.unfollow(u.id) } }>Unfollow</button> :
                                <button onClick={() => { props.follow(u.id) } }>Follow</button> }
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
    );
};

export default Users;
