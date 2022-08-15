import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useAuth from '../../hooks/useAuth';
import { parseHeader } from '../../services/api/baseAPI';
import planAPI from '../../services/api/planAPI';
import Backdrop from '../Backdrop';
import CreatePlan from '../PlansComponents/CreatePlan';
import Header from '../PlansComponents/Header';
import Plan from '../PlansComponents/Plan';
import { PlanProps } from '../PlansComponents/Plan/Plan';

function InstructorPlan() {
	const { token } = useAuth();
	const config = parseHeader(token as string);

	const [plans, setPlans] = useState([]);
	const [showCreatePlan, setShowCreatePlan] = useState(false);

	const backdrop = showCreatePlan ? (
		<Backdrop>
			<CreatePlan hiddenBackdrop={() => setShowCreatePlan(false)} />
		</Backdrop>
	) : null;

	const assemblyPlans = (): JSX.Element[] => {
		return plans.map((plan: PlanProps & { id: number }) => {
			return (
				<Plan
					key={plan.id}
					description={plan.description}
					classLevel={plan.classLevel}
					classType={plan.classType}
					image={plan.image}
					AvailableDay={plan.AvailableDay}
					instrument={plan.instrument}
					Instructor={plan.Instructor}
					Comments={plan.Comments}
				/>
			);
		});
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
			<Header createPlan={() => setShowCreatePlan(true)} />
			<InstructorBodyProfileContainer>
				{backdrop}
				{assemblyPlans()}
			</InstructorBodyProfileContainer>
		</>
	);
}
const InstructorBodyProfileContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
	grid-gap: 4rem 2rem;

	width: 100%;
	height: auto;

	padding-block: 2.5rem;

	border-top: 1px solid var(--color-low-opacity);
`;

export default InstructorPlan;
