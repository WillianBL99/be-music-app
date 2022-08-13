import styled from 'styled-components';
import UserLogo from '../../components/UserLogo';
import Plan from '../../components/Plan';

function Home() {
	return (
		<HomeContainer>
			<InstructorHeaderProfileContainer>
				<section>
					<UserLogo size='4.2rem' title='Joãozinho' describe='20 likes' />
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

const InstructorHeaderProfileContainer = styled.article`
	display: flex;
	flex-direction: column;

	width: 100%;
	height: auto;

	margin-block: 2rem;
	background-color: var(--color-tertiary);

	& > section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: auto;

		& > button {
			border: none;
			padding: 0.5rem 2.5rem;
			border-radius: calc(var(--border-radius-base) * 0.5);

			cursor: pointer;

			font-size: var(--font-size-tiny);
			color: var(--color-base);
			background-color: var(--color-secondary);

			&:hover {
				background-color: var(--color-hover-secondary);
			}
		}
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
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
	grid-gap: 2rem;

	width: 100%;
	height: auto;

	padding-block: 2.5rem;

	border-top: 1px solid var(--color-primary);
`;
