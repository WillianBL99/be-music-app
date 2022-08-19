import { useState, createContext } from 'react';
import { Instructor } from '../components/PlansComponents/Plan/Plan';
import useAuth from '../hooks/useAuth';

type PagesName = 'home' | 'requests' | 'plans' | 'instructors';
export type Pages = Map<PagesName, { name: string; path: string }>;

interface IHeaderContext {
	pages: Pages;
	currentPage: PagesName;
	setCurrentPage: (page: PagesName) => void;
	headerInstructor: Instructor | null;
	setHeaderInstructor: (instructor: Instructor | null) => void;
}

interface Props {
	children: React.ReactNode;
}

const HeaderContext = createContext<IHeaderContext | null>(null);

function HeaderProvider({ children }: Props) {
	const { userInfo } = useAuth();
	const currentUserIsInstructor = !!userInfo?.isInstructor;
	const defaultPage = currentUserIsInstructor ? 'home' : 'plans';
	const [currentPage, setCurrentPage] = useState<PagesName>(defaultPage);
	const [headerInstructor, setHeaderInstructor] = useState<Instructor | null>(
		null
	);

	const pages = new Map<PagesName, { name: string; path: string }>([
		['home', { name: 'Home', path: '/app/home' }],
		['plans', { name: 'Planos', path: '/app/plans' }],
		['requests', { name: 'Solicitações', path: '/app/request' }],
		['instructors', { name: 'Instrutores', path: '/app/instructors' }],
	]);

	if (!currentUserIsInstructor) {
		pages.delete('home');
	}

	return (
		<HeaderContext.Provider
			value={{
				pages,
				currentPage,
				setCurrentPage,
				setHeaderInstructor,
				headerInstructor,
			}}
		>
			{children}
		</HeaderContext.Provider>
	);
}

export { HeaderContext, HeaderProvider };
