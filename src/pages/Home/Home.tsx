import styled from 'styled-components';
import AccessDenied from '../../components/AccessDenied/AccessDenied';
import InstructorPlan from '../../components/InstructorPlans/InstructorPlans';
import useAuth from '../../hooks/useAuth';

function Home() {
	const { userInfo } = useAuth();

	if (!userInfo?.isInstructor) {
		return <AccessDenied />;
	}

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
