import { parseHeader } from '../../services/api/baseAPI';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import planAPI from '../../services/api/planAPI';
import PlansList from '../../components/PlansComponents/PlansList/PlansList';
import useHeader from '../../hooks/useHeader';

function Plans() {
	const { setCurrentPage } = useHeader();
	const { token } = useAuth();
	const config = parseHeader(token as string);
	const [plans, setPlans] = useState([]);

	setCurrentPage('plans');

	const getPlans = async () => {
		try {
			const response = await planAPI.getPlans(config);

			setPlans(response.plans);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPlans();
	}, []);

	return <PlansList plansList={plans} />;
}

export default Plans;
