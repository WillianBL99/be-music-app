import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo ';

function AuthBase() {
	return (
		<AuthBaseComponent>
			<article>
				<h1>UM PASSO DE CADA VEZ</h1>
				<p>Encontre o plano perfeito para você, o mais perto da sua casa</p>
			</article>
			<SideFormContainer className='side-form'>
				<article>
					<Logo size='100%' />
				</article>
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

	overflow-y: auto;

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

		padding-right: 3rem;

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
	justify-content: space-between;
	align-items: center;

	width: 100%;
	min-height: 100%;

	padding-block: 1rem;

	@media (min-width: 800px) {
		max-width: 30rem;
		padding-block: 2rem;
	}

	& > article {
		// logo
		display: none;
		width: 40vmin;
		max-width: 14rem;
		height: 40vmin;
		max-height: 14rem;

		margin-top: 5vh;
		margin: auto;

		@media (min-height: 500px) {
			display: flex;
		}

		@media (min-height: 800px) {
			width: 30vmin;
			height: 30vmin;
		}
	}

	& > form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		width: 100%;
		height: 100%;

		@media (min-height: 500px) {
			height: auto;
		}

		& > h1 {
			font-size: var(--font-size-large);
			font-weight: var(--font-weight-bold);
			color: var(--color-primary);
			margin-bottom: auto;

			@media (min-height: 500px) {
				margin-bottom: 1.5rem;
			}
		}
	}

	& > input {
		margin-bottom: 0.8rem;
	}

	label,
	label::before,
	label::after {
		color: var(--color-text-secondary);
		font-size: var(--font-size-small);
	}
`;
