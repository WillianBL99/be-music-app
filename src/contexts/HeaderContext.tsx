import { useState, createContext } from 'react';

type Pages = 'home' | 'requests' | 'plans' | 'instructors';

interface IHeaderContext {
	currentPage: Pages;
	setCurrentPage: (page: Pages) => void;
}

interface Props {
	children: React.ReactNode;
}

const HeaderContext = createContext<IHeaderContext | null>(null);

function HeaderProvider({ children }: Props) {
	const [currentPage, setCurrentPage] = useState<Pages>('home');

	return (
		<HeaderContext.Provider value={{ currentPage, setCurrentPage }}>
			{children}
		</HeaderContext.Provider>
	);
}

export { HeaderContext, HeaderProvider };
