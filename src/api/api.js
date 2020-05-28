import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '26d690f8-c7bc-4d44-bdf5-6d28a6f0e28d'
	}
});

export const usersAPI = {
	getUsers: (currentPage = 1, pageSize = 10) => {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`, {
				withCredentials: true
			})
			.then((res) => res.data);
	},
	unfollow: (userId) => {
		return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
	},
	follow: (userId) => {
		return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
	}
};
