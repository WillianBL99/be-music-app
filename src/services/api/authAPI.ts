import baseAPI from './baseAPI';

export interface UserDataRegister {
	name: string;
	email: string;
	city: number;
	type: 'instructor' | 'student' | '';
	password: string;
}

interface UserDataLogin {
	email: string;
	password: string;
}

async function signUp(data: UserDataRegister) {
	await baseAPI.post('/sign-up', data);
}

async function signIn(data: UserDataLogin) {
	const { data: signData } = await baseAPI.post('/sign-in', data);
	return signData;
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

const authAPI = { signUp, signIn, getStates, getCities };

export default authAPI;
