import styled from 'styled-components';
import { UserInfo } from '../../../contexts/AuthContext';
import useAuth from '../../../hooks/useAuth';
import UserLogo from '../../UserLogo';

interface Props {
	createPlan: () => void;
}

function Header({ createPlan }: Props) {
	const { userInfo } = useAuth();
	const user = userInfo as UserInfo;
	return (
		<InstructorHeaderProfileContainer>
			<section>
				<UserLogo image={user.image} size='4.2rem' title={user.name} />
				<button onClick={createPlan}>Novo plano</button>
			</section>
			<section>
				<p>{user.instructorData.description}</p>
			</section>
		</InstructorHeaderProfileContainer>
	);
}

export default Header;

const InstructorHeaderProfileContainer = styled.article`
	display: flex;
	flex-direction: column;

	width: 100%;
	height: auto;

	margin-block: 2rem;
	background-color: var(--color-tertiary);

	& > section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: auto;

		& > button {
			border: none;
			padding: 0.5rem 2.5rem;
			border-radius: calc(var(--border-radius-base) * 0.5);

			cursor: pointer;

			font-size: var(--font-size-tiny);
			color: var(--color-base);
			background-color: var(--color-secondary);

			&:hover {
				background-color: var(--color-hover-secondary);
			}
		}
	}

	& > section:last-child {
		margin-top: 2rem;

		& > p {
			font-size: var(--font-size-small);
			color: var(--font-color-tertiary);
		}
	}
`;
