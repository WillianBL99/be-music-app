import styled from 'styled-components';
import UserLogo from '../../UserLogo';

function Message() {
	return (
		<MessageContainer>
			<UserLogo size='2.2rem' />
			<p>
				<strong>Mariazinha</strong>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod,
				nisi euismod consectetur consectetur, nisi nisi consectetur nisi,
				euismod nisi nisi nisi.
			</p>
		</MessageContainer>
	);
}

export default Message;

const MessageContainer = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: auto auto;
	align-items: start;
	justify-items: start;
	align-content: center;

	width: 100%;
	height: auto;
	margin-bottom: 0.5rem;
	padding: 0.5rem 1rem;
	border-radius: calc(var(--border-radius-base) * 0.5);

	background-color: var(--color-low-opacity);

	& > p {
		font-size: var(--font-size-small);
		color: var(--font-color-primary);
		margin-top: 0.45rem;
		margin-left: 0.5rem;

		& > strong {
			font-weight: bold;
			margin-right: 0.5rem;
		}
	}
`;
