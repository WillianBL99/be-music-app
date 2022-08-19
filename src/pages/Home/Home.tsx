/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import styled from 'styled-components';
import AccessDenied from '../../components/AccessDenied/AccessDenied';
import InstructorPlan from '../../components/InstructorPlans/InstructorPlans';
import { Instructor } from '../../components/PlansComponents/Plan/Plan';
import useAuth from '../../hooks/useAuth';
import useHeader from '../../hooks/useHeader';

function Home() {
	const { userInfo } = useAuth();
	const { setHeaderInstructor } = useHeader();
	const instructorId = userInfo?.instructorData?.id;

	if (!userInfo?.isInstructor) {
		return <AccessDenied />;
	}
	const instructorData: Instructor = {
		id: userInfo.instructorData.id,
		description: userInfo.instructorData.description,
		User: {
			image: userInfo.image,
			name: userInfo.name,
		},
	};

	if (!instructorId) {
		return <div>Erro. Faça o login novamente</div>;
	}

	useEffect(() => {
		setHeaderInstructor(instructorData);
	}, []);

	return (
		<HomeContainer>
			<InstructorPlan isOwner={true} instructorId={instructorId} />
		</HomeContainer>
	);
}

export default Home;

const HomeContainer = styled.div`
	background-color: var(--color-tertiary);
`;
