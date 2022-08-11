import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export type Props = {
	to: string;
	children?: JSX.Element | JSX.Element[] | string;
};

function Link(props: Props) {
	const { to, children } = props;
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(to);
	};

	return (
		<LinkContainer onClick={handleNavigate}>
			<span>{children}</span>
		</LinkContainer>
	);
}

export default Link;

const LinkContainer = styled.a`
	color: var(--color-primary);
	margin-bottom: 2rem;

	& > span {
		cursor: pointer;
		text-decoration: underline;
		font-size: var(--font-size-small);
		color: var(--color-primary);

		&:hover {
			color: var(--color-secondary);
		}
	}
`;
