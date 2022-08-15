import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useAuth from '../../../hooks/useAuth';
import { parseHeader } from '../../../services/api/baseAPI';
import planAPI, { Plan } from '../../../services/api/planAPI';
import Input from '../../Input';
import Select from '../../Select';

interface Props {
	hiddenBackdrop: () => void;
}

function CreatePlan({ hiddenBackdrop }: Props) {
	const { token } = useAuth();
	const config = parseHeader(token as string);

	const [selectValues, setSelectValues] = useState({
		instruments: [],
		levels: [
			{ value: 'beginner', label: 'Iniciante' },
			{ value: 'intermediate', label: 'Intermediário' },
			{ value: 'advanced', label: 'Avançado' },
		],
		qtdStudents: [
			{ value: 'private', label: 'Individual' },
			{ value: 'group', label: 'Grupo' },
		],
	});

	const [formValues, setFormValues] = useState<Plan>({
		image: '',
		description: '',
		classLevel: 'beginner',
		classType: 'private',
		instrument: '',
		availableDays: [0, 0, 0, 0, 0, 0, 0],
	});

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSelect = (name: string) => {
		return (e: any) => {
			setFormValues({ ...formValues, [name]: e.value });
		};
	};

	const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = e.target;
		const newDays = [...formValues.availableDays] as any;
		newDays[value] = checked ? 1 : 0;
		setFormValues({ ...formValues, availableDays: newDays });
	};

	const assemblyDays = (): JSX.Element[] => {
		const days = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];

		return days.map((day, idx) => (
			<div className='day'>
				<p>{day}</p>
				<input
					type='checkbox'
					onChange={handleCheckbox}
					value={idx.toString()}
				/>
			</div>
		));
	};

	const handlePostForm = async (e: any) => {
		e.preventDefault();

		try {
			await planAPI.postPlan(formValues, config);
			hiddenBackdrop();
		} catch (error: any) {
			window.alert(error.message);
			console.log(error);
		}
	};

	const handleGetInstruments = async () => {
		const data = await planAPI.getInstruments(config);
		const instruments = data.instruments.map((instrument: any) => ({
			value: instrument,
			label: instrument,
		}));
		console.log(instruments);
		setSelectValues({ ...selectValues, instruments });
	};

	useEffect(() => {
		handleGetInstruments();
	}, []);

	return (
		<CreatePlanContainer>
			<p>Criar novo plano</p>
			<form onSubmit={handlePostForm}>
				<Input
					type='text'
					lable='Banner'
					onChange={handleInput}
					value={formValues.image}
					name={'image'}
				/>
				<Input
					type='text'
					lable='Descricão'
					onChange={handleInput}
					value={formValues.description}
					name={'description'}
				/>
				<Select
					lable='Nível'
					name='level'
					placeholder='Selecione o nível'
					options={selectValues.levels}
					onChange={handleSelect('classLevel')}
				/>
				<Select
					lable='Instrumento'
					name='instrument'
					placeholder='Selecione um instrumento'
					options={selectValues.instruments}
					onChange={handleSelect('instrument')}
				/>
				<Select
					lable='Quantidade de alunos'
					name='qtdStudents'
					placeholder='Selecione'
					options={selectValues.qtdStudents}
					onChange={handleSelect('classType')}
				/>
				<div className='available-days'>
					<p>Dias disponíveis:</p>
					<div className='days'>{assemblyDays()}</div>
				</div>
				<div className='comands'>
					<button className='cancel' onClick={hiddenBackdrop}>
						Cancelar
					</button>
					<button className='create' type='submit'>
						Criar
					</button>
				</div>
			</form>
		</CreatePlanContainer>
	);
}

export default CreatePlan;

const CreatePlanContainer = styled.article`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: 'header' 'form';
	grid-gap: 20px;

	width: 100vw;
	height: auto;
	padding: 10px;
	overflow: hidden;
	position: relative;
	z-index: 1;

	background-color: var(--color-tertiary);

	@media (min-width: 500px) {
		width: 95vw;
		max-width: 60rem;
		border-radius: var(--border-radius-base);
	}

	& > p {
		grid-area: header;
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-bold);
		margin-left: 0.5rem;
		color: var(--font-color-primary);
	}

	& > form {
		grid-area: form;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		grid-gap: 1.5rem;

		width: 100%;
		height: auto;
		padding: 0.5rem;
		margin-bottom: 10px;

		position: relative;
		z-index: 1;
		overflow: hidden;

		border-radius: 5px;
		background-color: var(--color-tertiary);

		& > div {
			margin: 0;
		}
	}

	.available-days {
		display: flex;
		flex-direction: column;

		width: 100%;
		height: auto;

		& > p {
			margin-bottom: 0.5rem;
			font-size: var(--font-size-base);
		}

		& > .days {
			display: grid;
			grid-template-columns: repeat(7, 1fr);

			width: 100%;
			padding: 0.5rem;

			font-size: var(--font-size-small);
			background-color: var(--color-low-opacity);
			border-radius: calc(var(--border-radius-base) * 0.5);

			& > .day {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: auto;
				height: auto;

				input {
					width: 2rem;
					aspect-ratio: 1;
				}
			}
		}
	}

	.comands {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-gap: 1rem;

		& > button {
			cursor: pointer;
			padding: 0.5rem;
			font-size: var(--font-size-base);
			border-radius: calc(var(--border-radius-base) * 0.5);
			margin-top: 2rem;
		}

		& > .cancel {
			border: none;
			background: none;
			font-weight: var(--font-weight-bold);
			color: var(--color-primary);

			&:hover {
				color: var(--color-hover-primary);
			}
		}

		& > .create {
			border: none;
			background-color: var(--color-primary);
			color: var(--color-base);

			&:hover {
				background-color: var(--color-hover-primary);
			}
		}
	}
`;
