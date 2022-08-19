import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useAuth from '../../../hooks/useAuth';
import Plan, { PlanData } from '../Plan/Plan';

export interface PlanListProps {
	children?: React.ReactNode;
	plansList: PlanData[];
}

function PlansList({ plansList, children }: PlanListProps) {
	const { userInfo } = useAuth();
	const [plans, setPlans] = useState<PlanData[]>(plansList);

	const assemblyPlans = (): JSX.Element[] => {
		return plans.map((plan) => {
			let isOwner = false;
			if (userInfo?.instructorData?.id === plan.Instructor?.id) {
				isOwner = true;
			}

			return <Plan key={plan.id} planData={{ ...plan, isOwner }} />;
		});
	};

	useEffect(() => {
		setPlans(plansList);
	}, [plansList]);

	return (
		<PlansListContainer>
			{children}
			{assemblyPlans()}
		</PlansListContainer>
	);
}

export default PlansList;

const PlansListContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
	grid-gap: 4rem 2rem;

	width: 100%;
	height: auto;

	padding-block: 2.5rem;

	border-top: 1px solid var(--color-low-opacity);
`;
