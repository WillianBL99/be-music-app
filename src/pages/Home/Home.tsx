import styled from 'styled-components';
import Plan from '../../components/PlansComponents/Plan';
import Header from '../../components/PlansComponents/Header';
import Backdrop from '../../components/Backdrop';
import CreatePlan from '../../components/PlansComponents/CreatePlan';
import { useEffect, useState } from 'react';
import planAPI from '../../services/api/planAPI';
import useAuth from '../../hooks/useAuth';
import { parseHeader } from '../../services/api/baseAPI';
import { PlanProps } from '../../components/PlansComponents/Plan/Plan';

function Home() {
	const { token } = useAuth();
	const config = parseHeader(token as string);
	const [showCreatePlan, setShowCreatePlan] = useState(false);
	const [plans, setPlans] = useState([]);

	const backdrop = showCreatePlan ? (
		<Backdrop>
			<CreatePlan hiddenBackdrop={() => setShowCreatePlan(false)} />
		</Backdrop>
	) : null;

	const assemblyPlans = (): JSX.Element[] => {
		return plans.map((plan: PlanProps & { id: number }) => {
			const {
				id,
				description,
				classLevel,
				classType,
				image,
				AvailableDay,
				instrument,
				Instructor,
				Comments,
			} = plan;

			return (
				<Plan
					key={id}
					description={description}
					classLevel={classLevel}
					classType={classType}
					image={image}
					AvailableDay={AvailableDay}
					instrument={instrument}
					Instructor={Instructor}
					Comments={Comments}
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
			<Header createPlan={() => setShowCreatePlan(true)} />
			<InstructorBodyProfileContainer>
				{backdrop}
				{assemblyPlans()}
			</InstructorBodyProfileContainer>
		</HomeContainer>
	);
}

export default Home;

const HomeContainer = styled.div`
	background-color: var(--color-tertiary);
`;

const InstructorBodyProfileContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
	grid-gap: 4rem 2rem;

	width: 100%;
	height: auto;

	padding-block: 2.5rem;

	border-top: 1px solid var(--color-low-opacity);
`;
