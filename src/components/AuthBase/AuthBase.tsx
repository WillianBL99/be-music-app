import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function AuthBase() {
	return (
		<AuthBaseComponent>
			<article>
				<h1>UM PASSO DE CADA VEZ</h1>
				<p>Encontre o plano perfeito para você, o mais perto da sua casa</p>
			</article>
			<SideFormContainer className='side-form'>
				<Outlet />
			</SideFormContainer>
		</AuthBaseComponent>
	);
}

export default AuthBase;

const AuthBaseComponent = styled.body`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	width: 100%;
	height: 100%;
	min-height: 100%;

	padding-inline: var(--padding-inline-page);

	background-image: var(--background-image);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	& > article {
		display: none;
		flex-direction: column;
		justify-content: center;

		width: 50%;
		min-height: 100%;

		padding-right: 4rem;

		@media (min-width: 800px) {
			display: flex;
		}

		& > h1 {
			font-size: var(--font-size-large);
			font-weight: var(--font-weight-bold);
			color: var(--color-primary);
		}

		& > p {
			font-size: var(--font-size-large);
			color: var(--font-color-secondary);
		}
	}
`;

const SideFormContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;

	width: 100%;

	@media (min-width: 800px) {
		max-width: 20rem;
	}

	label,
	label::before,
	label::after {
		color: var(--color-text-secondary);
		font-size: var(--font-size-small);
	}
`;
