import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Buttom';
import Input from '../../components/Input';
import Link from '../../components/Link';
import PasswordInput from '../../components/PasswordInput';
import Select, { Options } from '../../components/Select';
import api, { UserDataRegister } from '../../services/api';

export interface FormDataInput {
	name: string;
	email: string;
	password: string;
}

export interface FormDataSelect {
	state: number;
	city: number;
	type: 'instructor' | 'student' | '';
}

interface Region {
	states: Options[];
	cities: Options[];
}

function Register() {
	const navigate = useNavigate();
	const [region, setRegion] = useState<Region>({
		states: [],
		cities: [],
	});

	const types: Options[] = [
		{ value: 'instructor', label: 'Instrutor' },
		{ value: 'student', label: 'Aluno' },
	];

	const [formData, setFormData] = useState<FormDataInput>({
		name: '',
		email: '',
		password: '',
	});

	const [formDataSelect, setFormDataSelect] = useState<FormDataSelect>({
		state: -1,
		city: -1,
		type: '',
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSelect = (name: string) => {
		return (e: any) => {
			setFormDataSelect({ ...formDataSelect, [name]: e.value });
		};
	};

	const handleGetStates = async () => {
		const states = await api.getStates();
		setRegion({ ...region, states });
	};

	const handleGetCities = async () => {
		const cities = await api.getCities(formDataSelect.state);
		setRegion({ ...region, cities });
	};

	useEffect(() => {
		try {
			handleGetStates();
		} catch (error) {
			console.log(error);
		}
	}, []);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const dataSubmit: UserDataRegister = {
			...formData,
			...formDataSelect,
		};

		try {
			await api.signUp(dataSubmit);
			navigate('/');
		} catch (error: any) {
			if (error.response.status === 409) {
				window.alert(
					'Usuário já cadastrado\nFaça login ou registre outra conta'
				);
			} else {
				window.alert('Erro ao cadastrar usuário');
			}
		}
	};

	useEffect(() => {
		if (formDataSelect.state !== -1) {
			try {
				handleGetCities();
			} catch (error) {
				console.log(error);
			}
		}
	}, [formDataSelect.state]);

	return (
		<form onSubmit={handleSubmit}>
			<h1>Cadastro</h1>
			<Input
				name='name'
				value={formData.name}
				onChange={handleInputChange}
				lable='Nome'
				type='text'
				marginBottom='0.8rem'
			/>
			<Input
				name='email'
				value={formData.email}
				onChange={handleInputChange}
				lable='Email'
				type='email'
				marginBottom='0.8rem'
			/>
			<Select
				name='state'
				value={formDataSelect.state}
				lable='Estado'
				options={region.states}
				placeholder='Estado'
				onChange={handleSelect('state')}
			/>
			<Select
				name='city'
				value={formDataSelect.city}
				lable='Cidade'
				options={region.cities}
				placeholder='Cidade'
				onChange={handleSelect('city')}
				disabled={formDataSelect.state === -1}
			/>

			<Select
				name='type'
				value={formDataSelect.type}
				lable='Tipo'
				options={types}
				placeholder='Tipo'
				onChange={handleSelect('type')}
			/>
			<PasswordInput
				lable={'Senha'}
				name='password'
				onChange={handleInputChange}
				value={formData.password}
				marginBottom='calc(var(--font-size-small) + 1rem)'
			/>
			<Link to='/'>Já tenho uma conta</Link>
			<Button
				color='--color-primary'
				type='submit'
				text='Cadastrar'
				st='solid'
				marginBottom='0.8rem'
			/>
		</form>
	);
}

export default Register;
