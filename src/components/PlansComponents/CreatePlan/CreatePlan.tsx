import styled from 'styled-components';
import Input from '../../Input';
import Select from '../../Select';

function CreatePlan() {
	const instruments = [
		{ value: 'guitar', label: 'Guitar' },
		{ value: 'piano', label: 'Piano' },
	];
	const levels = [
		{ value: 'beginner', label: 'Iniciante' },
		{ value: 'intermediate', label: 'Intermediário' },
		{ value: 'advanced', label: 'Avançado' },
	];

	const qtdStudents = [
		{ value: 'individual', label: 'Individual' },
		{ value: 'group', label: 'Grupo' },
	];

	const assemblyDays = (): JSX.Element[] => {
		const days = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];

		return days.map((day, idx) => (
			<div className='day'>
				<p>{day}</p>
				<input type='checkbox' value={idx.toString()} />
			</div>
		));
	};

	return (
		<CreatePlanContainer>
			<p>Criar novo plano</p>
			<form>
				<Input type='text' lable='Banner' />
				<Input type='text' lable='Descricão' />
				<Select
					lable='Nível'
					name='level'
					placeholder='Selecione o nível'
					options={levels}
				/>
				<Select
					lable='Instrumento'
					name='instrument'
					placeholder='Selecione um instrumento'
					options={instruments}
				/>
				<Select
					lable='Quantidade de alunos'
					name='qtdStudents'
					placeholder='Selecione'
					options={qtdStudents}
				/>
				<div className='available-days'>
					<p>Dias disponíveis:</p>
					<div className='days'>{assemblyDays()}</div>
				</div>
				<div className='comands'>
					<button className='cancel' type='submit'>
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
