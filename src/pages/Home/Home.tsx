import styled from 'styled-components';
import Plan from '../../components/PlansComponents/Plan';
import Header from '../../components/PlansComponents/Header';

function Home() {
	return (
		<HomeContainer>
			<Header />
			<InstructorBodyProfileContainer>
				<Plan />
				<Plan />
				<Plan />
				<Plan />
				<Plan />
				<Plan />
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
	grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
	grid-gap: 4rem 2rem;

	width: 100%;
	height: auto;

	padding-block: 2.5rem;

	border-top: 1px solid var(--color-low-opacity);
`;
