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
		</LoginComponent>
	);
}

export default Login;

const LoginComponent = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	width: 100%;
	min-height: 100%;

	padding: 1rem;

	& > article {
		width: 30%;
		height: 30%;

		margin-top: 15%;
		margin-bottom: auto;
	}
`;
