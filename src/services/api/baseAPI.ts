import axios from 'axios';

const baseAPI = axios.create({
	baseURL: 'http://localhost:5000',
});

export function parseHeader(token: string) {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
}

export default baseAPI;
