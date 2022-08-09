import React from 'react';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Buttom';
import Input from '../../components/Input';
import Logo from '../../components/Logo ';
import PasswordInput from '../../components/PasswordInput';

type FormData = {
	email: string;
	password: string;
};

function Login() {
	const [formData, setFormData] = useState<FormData>({
		email: '',
		password: '',
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<LoginComponent>
			<article>
				<Logo size='100%' />
			</article>
			<form onSubmit={() => {}}>
				<h1>Login</h1>
				<Input
					name='email'
					value={formData.email}
					onChange={handleInputChange}
					lable='Email'
					type='email'
					marginBottom='0.4rem'
				/>
				<PasswordInput
					lable={'Senha'}
					name='password'
					onChange={handleInputChange}
					value={formData.password}
					marginBottom='1.2rem'
				/>
				<Button color='--color-primary' text='Entrar' st='solid' />
			</form>
		</LoginComponent>
	);
}

export default Login;

const LoginComponent = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	min-height: 100%;

	padding: 1rem;

	& > article {
		display: none;
		width: 30vh;
		height: 30vh;

		margin-top: 5vh;
		margin-bottom: auto;

		@media (min-height: 500px) {
			display: flex;
		}
	}

	& > form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		width: 100%;
		height: 100%;

		@media (min-height: 500px) {
			height: auto;
		}

		& > h1 {
			font-size: var(--font-size-large);
			font-weight: var(--font-weight-bold);
			color: var(--color-primary);
			margin-bottom: auto;

			@media (min-height: 500px) {
				margin-bottom: 0.8rem;
		}
	}
`;
