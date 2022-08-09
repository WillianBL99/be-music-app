import { ChangeEvent, useState } from 'react';
import Button from '../../components/Buttom';
import Input from '../../components/Input';
import Link from '../../components/Link';
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
		<form onSubmit={() => {}}>
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
			<Button color='--color-primary' text='Entrar' st='solid' />
		</form>
	);
}

export default Login;
