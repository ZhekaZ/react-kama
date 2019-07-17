import * as axios from 'axios';
import CONST from '../CONST';

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    browserBaseURL: baseURL,
    headers: {
        API_KEY: CONST.API_KEY,
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data);
    },
};
