import styled from 'styled-components';

function AccessDenied() {
	return (
		<AlertContainer>
			<h1>Acesso negado</h1>
			<p>Você não tem autorização para acessar esta página.</p>
		</AlertContainer>
	);
}

export default AccessDenied;

const AlertContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: flex-start;

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	padding: 3rem;

	background-color: var(--color-tertiary);

	& > h1 {
		font-size: var(--font-size-large);
		color: var(--font-color-primary);
		margin-bottom: 1rem;
	}

	& > p {
		font-size: var(--font-size-small);
		color: var(--font-color-primary);
	}
`;
