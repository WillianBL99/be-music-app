import { parseHeader } from '../../services/api/baseAPI';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useAuth from '../../hooks/useAuth';
import planAPI from '../../services/api/planAPI';

import Plan, { PlanData } from '../../components/PlansComponents/Plan/Plan';

function Plans() {
	const { token } = useAuth();
	const config = parseHeader(token as string);

	const [plans, setPlans] = useState([]);

	const assemblyPlans = (): JSX.Element[] => {
		return plans.map((plan: PlanData) => (
			<Plan
				key={plan.id}
				planId={plan.id}
				description={plan.description}
				classLevel={plan.classLevel}
				classType={plan.classType}
				image={plan.image}
				AvailableDay={plan.AvailableDay}
				instrument={plan.instrument}
				Instructor={plan.Instructor}
				Comments={plan.Comments}
			/>
		));
	};

	const getPlans = async () => {
		try {
			const response = await planAPI.getPlans(config);

			const listPlan = response.plans.map((planData: any) => {
				return {
					...planData,
					Instructor: planData.Instructor.User,
				};
			});

			setPlans(listPlan);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPlans();
	}, []);
	return (
		<>
			<InstructorBodyProfileContainer>
				{assemblyPlans()}
			</InstructorBodyProfileContainer>
		</>
	);
}

export default Plans;

const InstructorBodyProfileContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
	grid-gap: 4rem 2rem;

	width: 100%;
	height: auto;

	padding-block: 2.5rem;

	border-top: 1px solid var(--color-low-opacity);
`;
