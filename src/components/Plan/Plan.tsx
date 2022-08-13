import styled from 'styled-components';
import HeartIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentIcon from '@mui/icons-material/TextsmsOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import UserLogo from '../UserLogo';

function Plan() {
	return (
		<PlanContainer>
			<section className='header'>
				<UserLogo size='3rem' title='Mariazinha' />
				<p>Aulas individuais</p>
			</section>
			<img
				src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
				alt='user-logo'
			/>
			<section className='footer'>
				<div className='actions'>
					<HeartIcon />
					<CommentIcon />
					<InfoIcon />
				</div>
				<button>Rquerir</button>
			</section>
		</PlanContainer>
	);
}

export default Plan;

const PlanContainer = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: auto;

	overflow: hidden;
	border-radius: var(--border-radius-base);

	box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.2);
	background-color: var(--color-tertiary);

	& > .header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		width: 100%;
		height: auto;

		padding: 0.5rem 1rem;
		background-color: var(--color-tertiary);

		& > p {
			font-size: var(--font-size-tiny);
			color: var(--font-color-primary);
		}
	}

	& > img {
		--height: calc(20px + 1px);
		width: 100%;
		aspect-ratio: calc(16 / 9);

		object-fit: cover;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	& > .footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		width: 100%;
		height: auto;

		padding: 1rem 1rem;

		& > .actions > svg {
			cursor: pointer;
			font-size: var(--font-size-base);
			color: var(--font-color-primary);
			margin-right: 1rem;

			&:hover {
				color: var(--color-hover-primary);
			}
		}

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
`;
