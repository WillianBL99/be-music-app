import { ChangeEvent, useEffect, useState } from 'react';
import Button from '../../components/Buttom';
import Input from '../../components/Input';
import Link from '../../components/Link';
import PasswordInput from '../../components/PasswordInput';
import Select, { Options } from '../../components/Select';
import api from '../../services/api';

export interface FormDataInput {
	name: string;
	email: string;
	password: string;
}

export interface FormDataSelect {
	state: number;
	city: number;
	type: string;
}

interface Region {
	states: Options[];
	cities: Options[];
}

function Register() {
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

	console.log({ states: region.states });

	useEffect(() => {
		api
			.getStates()
			.then((promise) => {
				console.log({ promise });
				const states = promise.states.map((fullState: any) => ({
					value: fullState.id,
					label: fullState.nome,
				}));
				setRegion({ ...region, states });
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<form onSubmit={() => {}}>
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
				text='Cadastrar'
				st='solid'
				marginBottom='0.8rem'
			/>
		</form>
	);
}

export default Register;
