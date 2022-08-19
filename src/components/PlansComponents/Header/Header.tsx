import { useState } from 'react';
import styled from 'styled-components';
import useHeader from '../../../hooks/useHeader';
import Backdrop from '../../Backdrop';
import UserLogo from '../../UserLogo';
import CreatePlan from '../CreatePlan';

export interface HeaderProps {
	isOwner: boolean;
}

function Header({ isOwner }: HeaderProps) {
	const [showCreatePlan, setShowCreatePlan] = useState(false);
	const { headerInstructor } = useHeader();

	if (!headerInstructor) {
		return <h1>No instructor</h1>;
	}

	const handleCreatePlan = (state: boolean) => {
		return () => {
			setShowCreatePlan(state);
		};
	};

	const backdrop = showCreatePlan ? (
		<Backdrop>
			<CreatePlan hiddenBackdrop={handleCreatePlan(false)} />
		</Backdrop>
	) : null;

	return (
		<InstructorHeaderProfileContainer>
			<section>
				<UserLogo
					image={headerInstructor.User.image}
					size='4.2rem'
					title={headerInstructor.User.name}
				/>
				<button onClick={handleCreatePlan(true)} hidden={!isOwner}>
					Novo plano
				</button>
			</section>
			<section>
				<p>{headerInstructor.description}</p>
			</section>
			{backdrop}
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
