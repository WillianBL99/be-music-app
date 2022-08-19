import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { parseHeader } from '../../services/api/baseAPI';
import planAPI from '../../services/api/planAPI';
import Header from '../PlansComponents/Header';
import PlansList from '../PlansComponents/PlansList/PlansList';

export interface InstructorPlansProps {
	instructorId: number;
	isOwner: boolean;
}

function InstructorPlan(props: InstructorPlansProps) {
	const { token } = useAuth();
	const config = parseHeader(token as string);
	const { instructorId, isOwner } = props;
	const [plans, setPlans] = useState([]);

	const getPlans = async () => {
		try {
			const response = await planAPI.getPlansByInstructorId(
				instructorId,
				config
			);

			setPlans(response.plans);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPlans();
	}, []);

	return (
		<>
			<Header isOwner={isOwner} />
			<PlansList plansList={plans} />
		</>
	);
}

export default InstructorPlan;
