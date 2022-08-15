import React from 'react';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Buttom';
import Input from '../../components/Input';
import Link from '../../components/Link';
import PasswordInput from '../../components/PasswordInput';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api/authAPI';

type FormData = {
	email: string;
	password: string;
};

function Login() {
	const navigate = useNavigate();
	const { signIn } = useAuth();
	const [formData, setFormData] = useState<FormData>({
		email: '',
		password: '',
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const { token } = await api.signIn(formData);
			signIn(token);
			navigate('app/home');
		} catch (error: any) {
			if (error.response.status === 401) {
				alert('Usuário ou senha inválidos');
			} else {
				alert('Erro ao fazer login');
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Login</h1>
			<Input
				name='email'
				value={formData.email}
				onChange={handleInputChange}
				lable='Email'
				type='email'
				marginBottom='0.8rem'
			/>
			<PasswordInput
				lable={'Senha'}
				name='password'
				onChange={handleInputChange}
				value={formData.password}
				marginBottom='calc(var(--font-size-small) + 1rem)'
			/>
			<Link to='/register'>Não tenho uma conta</Link>
			<Button type='submit' color='--color-primary' text='Entrar' st='solid' />
		</form>
	);
}

export default Login;
