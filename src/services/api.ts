import axios from 'axios';

const baseAPI = axios.create({
	baseURL: 'http://localhost:5000',
});

export interface UserDataRegister {
	name: string;
	email: string;
	state: number;
	city: number;
	type: 'instructor' | 'student' | '';
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
	await baseAPI.post('/sign-up', data);
}

async function signIn(data: UserDataLogin) {
	const { data: token } = await baseAPI.post('/sign-in', data);
	return token;
}

async function getStates(): Promise<[]> {
	const { data } = await baseAPI.get('/data/states');
	const states = data.states.map((state: any) => ({
		value: state.id,
		label: state.nome,
	}));
	return states;
}

async function getCities(state: number): Promise<[]> {
	const { data } = await baseAPI.get(`/data/states/${state}/cities`);
	const cities = data.cities.map((city: any) => ({
		value: city.id,
		label: city.nome,
	}));
	return cities;
}

const api = { signUp, signIn, getStates, getCities };

export default api;
