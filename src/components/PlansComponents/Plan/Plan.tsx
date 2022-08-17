import styled from 'styled-components';
import CommentIcon from '@mui/icons-material/TextsmsOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import UserLogo from '../../UserLogo';
import MessagesContainer from '../Messages';
import Info from '../Info';
import { useState } from 'react';

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

export interface Instructor {
	id: number;
	name: string;
	image: string;
}

export interface PlanData {
	Instructor: Instructor;
	Comments: Comment[];
	image: string;
	description: string;
	classLevel: string;
	classType: string;
	instrument: string;
	AvailableDay: any;
	id: number;
}

export type PlanProps = Omit<PlanData, 'id'> & { planId: number };

function Plan(props: PlanProps) {
	const [open, setOpen] = useState<any>({
		info: false,
		comments: false,
	});

	const handleOpen = (type: string) => {
		return () => {
			const option = open[type];
			setOpen({ comments: false, info: false, [type]: !option });
		};
	};

	const {
		planId,
		image,
		Comments,
		classType,
		instrument,
		classLevel,
		Instructor,
		description,
		AvailableDay,
	} = props;

	const { id: instructorId, image: userImage, name: userName } = Instructor;

	const footer = (
		<section className='footer'>
			<div className='actions'>
				<CommentIcon onClick={handleOpen('comments')} />
				<InfoIcon onClick={handleOpen('info')} />
			</div>
			<button>Rquerir</button>
		</section>
	);

	const comments = open.comments ? (
		<MessagesContainer
			id={planId}
			instructor={Instructor}
			listComments={Comments}
		/>
	) : null;

	const info = open.info ? (
		<Info
			description={description}
			classLevel={classLevel}
			instrument={instrument}
			availableDays={AvailableDay}
		/>
	) : null;

	return (
		<PlanContainer id={`${instructorId}`}>
			<section className='header'>
				<UserLogo image={userImage} size='3.5rem' title={userName} />
				<p>{classType}</p>
			</section>
			<div className='img'>
				<img src={image} alt='banner do plano' />
			</div>
			{footer}
			{comments}
			{info}
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
