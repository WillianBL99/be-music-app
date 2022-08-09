import styled from 'styled-components';

const InputStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;

	min-width: 100%;

	& > label {
		color: var(--font-color-secondary);
	}

	& > input:hover {
		border: 1px solid var(--color-secondary);
	}

	& > ::placeholder {
		color: var(--font-color-tertiary);
	}
`;

export default InputStyle;
