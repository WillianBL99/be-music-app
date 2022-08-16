import styled from 'styled-components';
import InstructorPlan from '../../components/InstructorPlans/InstructorPlans';

function Home() {
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
