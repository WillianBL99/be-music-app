import baseAPI from './baseAPI';

export interface Plan {
	image: string;
	description: string;
	classLevel: 'beginner' | 'intermediate' | 'advanced';
	classType: 'group' | 'private';
	instrument: string;
	availableDays: number[];
}

async function postPlan(data: Plan, headers: any) {
	const response = await baseAPI.post('/plans', data, headers);
	return response.data;
}

async function getInstruments(headers: any) {
	const response = await baseAPI.get('/instruments', headers);
	return response.data;
}

async function getPlans(headers: any) {
	const response = await baseAPI.get('/plans', headers);
	return response.data;
}

const planAPI = {
	postPlan,
	getInstruments,
	getPlans,
};

export default planAPI;
