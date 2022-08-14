import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header';

function AppBase() {
	return (
		<AppBaseContainer>
			<Header />
			<main>
				<Outlet />
			</main>
		</AppBaseContainer>
	);
}

export default AppBase;

const AppBaseContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;

	main {
		display: flex;
		flex-direction: column;

		width: 100%;
		height: 100%;

		padding-inline: calc(var(--padding-inline-page) * 1.5);

		overflow: hidden;
		overflow-y: auto;

		background-color: var(--color-tertiary);

		&::-webkit-scrollbar {
			width: 5px;

			&-thumb {
				background-color: var(--color-primary);
				border-radius: 3px;
				border: 1px solid #fff;

				&:hover {
					background-color: #fff;
				}
			}
		}
	}
`;
