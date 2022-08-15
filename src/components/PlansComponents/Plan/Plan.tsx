import styled from 'styled-components';
import HeartIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentIcon from '@mui/icons-material/TextsmsOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import UserLogo from '../../UserLogo';
import MessagesContainer from '../Messages';
import Info from '../Info';

export interface Comment {
	id: number;
	comment: string;
	createdAt: string;
	planId: number;
	userId: number;
	User: {
		image: string;
		name: string;
	};
}

export interface PlanProps {
	Instructor: {
		id: number;
		name: string;
		image: string;
	};
	Comments: Comment[];
	image: string;
	description: string;
	classLevel: string;
	classType: string;
	instrument: string;
	AvailableDay: any;
}

function Plan(props: PlanProps) {
	const {
		Instructor,
		Comments,
		image,
		description,
		classLevel,
		classType,
		instrument,
		AvailableDay,
	} = props;

	const { id, image: userImage, name: userName } = Instructor;

	return (
		<PlanContainer id={`${id}`}>
			<section className='header'>
				<UserLogo image={userImage} size='3.5rem' title={userName} />
				<p>{classType}</p>
			</section>
			<div className='img'>
				<img src={image} alt='banner do plano' />
			</div>
			<section className='footer'>
				<div className='actions'>
					<HeartIcon />
					<CommentIcon />
					<InfoIcon />
				</div>
				<button>Rquerir</button>
			</section>
			<MessagesContainer listComments={Comments} />
			<Info
				description={description}
				classLevel={classLevel}
				instrument={instrument}
				availableDays={AvailableDay}
			/>
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
	position: relative;
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
			font-size: var(--font-size-small);
			color: var(--font-color-primary);
		}
	}

	& > .img {
		--height: calc(20px + 1px);
		width: 100%;
		aspect-ratio: calc(16 / 9);
		overflow: hidden;

		& > img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
		}
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
