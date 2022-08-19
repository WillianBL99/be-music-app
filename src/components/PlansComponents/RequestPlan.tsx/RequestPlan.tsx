import React, { useState } from 'react';
import styled from 'styled-components';
import useAuth from '../../../hooks/useAuth';
import Input from '../../Input';
import { PlanData } from '../Plan/Plan';

interface Props {
	hiddenBackdrop: () => void;
	planData: PlanData;
}

function RequestPlan({ hiddenBackdrop, planData }: Props) {
	const { userInfo } = useAuth();
	const [message, setMessage] = useState('');

	if (!userInfo) {
		return null;
	}

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setMessage(value);
	};

	const handleWhatsappMessage = (e: any) => {
		e.preventDefault();

		const defaultBaseMessage = `*BeMusic*: Requisição de aula\nAula do tipo ${
			planData.classType
		}\n*Instrumento*: ${planData.instrument}\n*Nível*: ${
			planData.classLevel
		}\n\n*Informações do requisitante*\n*Nome*: ${userInfo.name}\n\n${
			message ? `*Observações*:\n${message}` : ''
		}`;
		const messageEncoded = encodeURI(defaultBaseMessage);
		const url = `https://wa.me/55${planData.phoneNumber}?text=${messageEncoded}`;

		try {
			window.open(url, '_blank');
		} catch (error) {
			console.log(error);
		}
		hiddenBackdrop();
	};

	return (
		<CreateRequestContainer>
			<p>Requisitar plano</p>
			<form onSubmit={handleWhatsappMessage}>
				<Input
					type='text'
					lable='Mensagem adicional'
					onChange={handleInput}
					value={message}
					name={'image'}
				/>
				<div className='comands'>
					<button className='cancel' onClick={hiddenBackdrop}>
						Cancelar
					</button>
					<button className='create' type='submit'>
						Criar
					</button>
				</div>
			</form>
		</CreateRequestContainer>
	);
}

export default RequestPlan;

const CreateRequestContainer = styled.article`
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
