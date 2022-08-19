/* eslint-disable @typescript-eslint/no-unused-expressions */
import styled from 'styled-components';

interface Props {
	description: string;
	classLevel: string;
	instrument: string;
	availableDays: any;
}

function Info(props: Props) {
	const { description, classLevel, instrument, availableDays } = props;

	const assemblyDays = (): JSX.Element[] => {
		const days: any = {
			sun: 'dom',
			mon: 'seg',
			tue: 'ter',
			wed: 'qua',
			thu: 'qui',
			fri: 'sex',
			sat: 'sab',
		};
		const listAvailableDays: JSX.Element[] = [];

		for (const day in availableDays) {
			if (availableDays[day]) {
				listAvailableDays.push(<li>{days[day]}</li>);
			}
		}

		return listAvailableDays;
	};

	return (
		<InfoContainer>
			<p className='description'>{description}</p>
			<div className='level'>
				<p>Nivel:</p>
				<span>{classLevel}</span>
			</div>
			<div className='instruments'>
				<p>Instrumento:</p>
				<ul>
					<li>{instrument}</li>
				</ul>
			</div>
			<div className='available-days'>
				<p>Dias disponíveis:</p>
				<ul>{assemblyDays()}</ul>
			</div>
		</InfoContainer>
	);
}

export default Info;

const InfoContainer = styled.article`
	--margin: 1rem;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;

	width: 100%;
	height: auto;
	padding: 1rem 0.5rem;
	padding-bottom: 0.5rem;

	font-size: var(--font-size-small);
	color: var(--color-primary);

	& > div {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		margin-bottom: var(--margin);

		p {
			font-weight: var(--font-weight-bold);
			margin-right: 0.5rem;
		}

		ul {
			display: flex;
			flex-direction: row;
			justify-content: start;
			align-items: center;
		}
	}

	& span,
	li {
		background-color: var(--color-low-opacity);
		border-radius: 3px;

		padding: 0.1rem 1rem;
		margin-right: 0.8rem;
	}

	& > .description,
	& > .level {
		margin-bottom: var(--margin);
	}
`;
