import styled from 'styled-components';
import Plan from '../../components/PlansComponents/Plan';
import Backdrop from '../../components/Backdrop';
import CreatePlan from '../../components/PlansComponents/CreatePlan';
import { useEffect, useState } from 'react';
import planAPI from '../../services/api/planAPI';
import useAuth from '../../hooks/useAuth';
import { parseHeader } from '../../services/api/baseAPI';
import { PlanProps } from '../../components/PlansComponents/Plan/Plan';
import InstructorPlan from '../../components/InstructorPlans/InstructorPlans';

function Home() {
	const { token } = useAuth();
	const config = parseHeader(token as string);
	const [plans, setPlans] = useState([]);

	const getPlans = async () => {
		try {
			const response = await planAPI.getPlans(config);

			const listPlan = response.plans.map((planData: any) => {
				return {
					...planData,
					Instructor: planData.Instructor.User,
				};
			});
			console.log({ listPlan });
			setPlans(listPlan);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPlans();
	}, []);

	return (
		<HomeContainer>
			<InstructorPlan />
		</HomeContainer>
	);
}

export default Home;

const HomeContainer = styled.div`
	background-color: var(--color-tertiary);
`;
