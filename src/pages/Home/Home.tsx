import styled from 'styled-components';
import UserLogo from '../../components/UserLogo';

function Home() {
	return (
		<div>
			<InstructorHeaderProfileContainer>
				<section>
					<UserLogo size='4.2rem' displayDescribe={true} displayTitle={true} />
					<button>Novo plano</button>
				</section>
				<section>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						euismod, nisi euismod consectetur consectetur, nisi nisi consectetur
						nisi, euismod nisi nisi nisi.
					</p>
				</section>
			</InstructorHeaderProfileContainer>
			<InstructorBodyProfileContainer>
				<PlanContainer></PlanContainer>
			</InstructorBodyProfileContainer>
		</div>
	);
}

export default Home;

const InstructorHeaderProfileContainer = styled.article`
	display: flex;
	flex-direction: column;

	width: 100%;
	height: auto;

	margin-block: 2rem;

	& > section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: auto;
	}

	& > section:last-child {
		margin-top: 2rem;

		& > p {
			font-size: var(--font-size-small);
			color: var(--font-color-tertiary);
		}
	}
`;

const InstructorBodyProfileContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	height: auto;
`;

const PlanContainer = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 3rem;
	height: 3rem;

	background-color: blue;
`;
