import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "ec41ccbc-c141-448d-b6b5-da075e6dde92" },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    apiUnfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    apiFollow(userId) {
        return instance.post(`follow/${userId}`);
    }
}