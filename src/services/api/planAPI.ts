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

async function getPlansByInstructorId(instructorId: number, headers: any) {
	const response = await baseAPI.get(
		`/plans?byInstructorId=${instructorId}`,
		headers
	);
	return response.data;
}

async function postComment(
	planId: number,
	data: { comment: string; userId: number },
	headers: any
) {
	const response = await baseAPI.post(
		`/plans/${planId}/comments`,
		data,
		headers
	);
	return response.data;
}

const planAPI = {
	postPlan,
	getInstruments,
	getPlans,
	getPlansByInstructorId,
	postComment,
};

export default planAPI;
