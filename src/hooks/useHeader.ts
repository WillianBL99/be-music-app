import { useContext } from 'react';
import { HeaderContext } from '../contexts/HeaderContext';

export default function useHeader() {
	const authContext = useContext(HeaderContext);

	if (!authContext) {
		throw new Error('useHeader must be used within an HeaderProvider');
	}

	return authContext;
}
