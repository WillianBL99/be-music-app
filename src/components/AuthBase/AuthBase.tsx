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
	justify-content: center;

	width: 100%;
	height: 100%;

	padding: 5px;

	background-image: var(--background-image);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	@media (min-width: 500px) {
		padding-block: var(--padding-block-page);
	}

	& > article {
		display: none;
		flex-direction: column;
		justify-content: center;

		width: 100%;
		min-height: 100%;
	}
`;

const SideFormContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;

	width: 100%;

	background-color: rgba(0, 0, 0, 0.1);

	label,
	label::before,
	label::after {
		color: var(--color-text-secondary);
		font-size: var(--font-size-small);
	}
`;
