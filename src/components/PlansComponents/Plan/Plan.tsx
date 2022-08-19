import styled from 'styled-components';
import CommentIcon from '@mui/icons-material/TextsmsOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import UserLogo from '../../UserLogo';
import MessagesContainer from '../Messages';
import Info from '../Info';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IstructorPageData } from '../../../pages/Instructors/Instructors';
import RequestPlan from '../RequestPlan.tsx';
import Backdrop from '../../Backdrop';

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
	description: string;
	User: {
		name: string;
		image: string;
	};
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
	phoneNumber: string;
	id: number;
}

export type PlanProps = {
	planData: PlanData & {
		isOwner: boolean;
	};
};

function Plan({ planData }: PlanProps) {
	const [open, setOpen] = useState<any>({
		info: false,
		comments: false,
	});
	const [hiddenBackdrop, setHiddenBackdrop] = useState(true);

	const {
		id: planId,
		isOwner,
		image,
		classType,
		instrument,
		classLevel,
		Instructor,
		description,
		AvailableDay,
	} = planData;

	const {
		id: instructorId,
		User: { image: userImage, name: userName },
	} = Instructor;

	const handleOpen = (type: string) => {
		return () => {
			const option = open[type];
			setOpen({ comments: false, info: false, [type]: !option });
		};
	};

	const handleCreateRequest = () => {
		return hiddenBackdrop ? null : (
			<Backdrop>
				<RequestPlan
					hiddenBackdrop={() => setHiddenBackdrop(true)}
					planData={planData}
				/>
			</Backdrop>
		);
	};

	const footer = (
		<section className='footer'>
			<div className='actions'>
				<CommentIcon onClick={handleOpen('comments')} />
				<InfoIcon onClick={handleOpen('info')} />
			</div>
			<button hidden={isOwner} onClick={() => setHiddenBackdrop(false)}>
				Rquerir
			</button>
		</section>
	);

	const comments = open.comments ? <MessagesContainer id={planId} /> : null;

	const info = open.info ? (
		<Info
			description={description}
			classLevel={classLevel}
			instrument={instrument}
			availableDays={AvailableDay}
		/>
	) : null;

	const instructorPageData: IstructorPageData = {
		isOwner,
		instructor: Instructor,
	};

	return (
		<PlanContainer id={`${instructorId}`}>
			{handleCreateRequest()}
			<section className='header'>
				<Link
					to={`/app/instructors/${instructorId}`}
					state={instructorPageData}
				>
					<UserLogo image={userImage} size='3.5rem' title={userName} />
				</Link>
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

		& > a {
			text-decoration: none;
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
