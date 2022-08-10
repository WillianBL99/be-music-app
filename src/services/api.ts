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

export { signUp, login };
