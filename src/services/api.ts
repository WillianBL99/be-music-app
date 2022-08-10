import axios from 'axios';

const baseAPI = axios.create({
	baseURL: 'http://localhost:5000',
});

interface UserDataRegister {
	name: string;
	email: string;
	state: number;
	city: number;
	type: 'instructor' | 'student';
	password: string;
}

interface UserDataLogin {
	email: string;
	password: string;
}

// function getConfig(token: string) {
// 	return {
// 		headers: {
// 			Authorization: `Bearer ${token}`,
// 		},
// 	};
// }

async function signUp(data: UserDataRegister) {
	await baseAPI.post('/sign-in', data);
}

async function login(data: UserDataLogin) {
	const { data: token } = await baseAPI.post('/sign-in', data);
	return token;
}

async function getStates() {
	const { data } = await baseAPI.get('/data/states');
	return data;
}

function getCities(state: number) {
	const promise = baseAPI.get(`/data/satate/${state}/cities`);
	return promise;
}

const api = { signUp, login, getStates, getCities };

export default api;
