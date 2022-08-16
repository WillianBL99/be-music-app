import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from '../../hooks/useAuth';
import useHeader from '../../hooks/useHeader';

function Header() {
	const { userInfo } = useAuth();
	const { currentPage, setCurrentPage } = useHeader();
	const navigate = useNavigate();

	const pages = new Map([
		['home', { name: 'Home', path: '/app/home' }],
		['plans', { name: 'Planos', path: '/app/plans' }],
		['request', { name: 'Solicitações', path: '/app/request' }],
		['instructors', { name: 'Instrutores', path: '/app/instructors' }],
	]);

	const handleChangePage = (path: string) => {
		return (e: any) => {
			const value = e.target.attributes.value.nodeValue;
			setCurrentPage(value);
			navigate(path);
		};
	};

	const options = () => {
		if (!userInfo?.isInstructor) {
			pages.delete('home');
		}

		const options: JSX.Element[] = [];

		pages.forEach((page: any) => {
			const selected = currentPage === page.name ? 'selected' : '';
			options.push(
				<Option
					key={page.name}
					value={page.name}
					onClick={handleChangePage(page.path)}
					className={selected}
				>
					{page.name}
				</Option>
			);
		});

		return options;
	};

	return (
		<HeaderContainer>
			<Logo />
			<ul className='comands'>{options()}</ul>
			<div className='user'></div>
		</HeaderContainer>
	);
}

export default Header;

const HeaderContainer = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	height: auto;
	padding-block: 2rem;

	padding-inline: var(--padding-inline-page);
	background-color: var(--color-base);

	& > ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		width: auto;
		& > .selected {
			color: var(--color-secondary);

			&::after {
				content: '';
				display: block;
				width: 100%;
				height: 1px;
				background-color: var(--color-secondary);
				margin-top: 0.3rem;
			}
		}
	}
`;

const Logo = styled.div`
	width: 9rem;
	height: 2rem;

	cursor: pointer;
	border-right: 1px solid var(--color-primary);
	color: var(--color-secondary);

	background-image: var(--logo-inline);
	object-fit: contain;
	object-position: center;
	background-size: contain;
	background-repeat: no-repeat;
`;

const Option = styled.li`
	margin: 0 1.2rem;
	cursor: pointer;
	list-style: none;
	font-size: var(--font-size-small);
	color: var(--color-primary);

	:hover {
		color: var(--color-secondary);
	}
`;
