import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
	children?: ReactNode;
}

function Backdrop({ children }: Props) {
	return (
		<BackdropContainer>
			<div>{children}</div>
		</BackdropContainer>
	);
}

export default Backdrop;

const BackdropContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	background-color: rgba(0, 0, 0, 0.5);
	z-index: 11;
`;
