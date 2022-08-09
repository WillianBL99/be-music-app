import styled from 'styled-components';
import InputStyle from '../../assets/style/inputStyle';

export type Props = {
	onChange: any;
	value: any;
	lable: any;
	name: any;
	color?: any;
	marginBottom?: string;
};

type InputComponentProps = Pick<Props, 'marginBottom'>;

function PasswordInput(props: Props) {
	const { onChange, value, lable, name, color, marginBottom } = props;
	const inputLable = value ? <label htmlFor={name}>{lable}</label> : <></>;
	return (
		<InputContainer>
			{inputLable}
			<PasswordInputComponent
				type='password'
				name={name}
				value={value}
				onChange={onChange}
				color={color}
				placeholder='Senha'
				marginBottom={marginBottom}
			/>
		</InputContainer>
	);
}

export default PasswordInput;

const InputContainer = styled(InputStyle)``;

const PasswordInputComponent = styled.input<InputComponentProps>`
	--color: ${(props) => props.color || '#000'};
	--margin-bottom: ${(props) => props.marginBottom};

	width: 100%;
	height: 2rem;

	padding-left: 0.6rem;
	margin-bottom: var(--margin-bottom);

	font-family: Verdana;
	letter-spacing: 0.125em;
	border-radius: var(--border-radius-input);
	border: 1px solid var(--color);

	background-color: 'transparent';
`;
