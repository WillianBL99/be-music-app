import styled from 'styled-components';
import InputStyle from '../../assets/style/inputStyle';

export type Props = {
	onChange: any;
	value: string;
	lable: string;
	type: string;
	name: string;
	color?: any;
	marginBottom?: string;
};

type InputComponentProps = Pick<Props, 'marginBottom'>;

function Input(props: Props) {
	const { lable, name, onChange, value, color, type, marginBottom } = props;
	const inputLable = value ? <label htmlFor={name}>{lable}</label> : <></>;
	return (
		<InputContainer>
			{inputLable}
			<InputComponent
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				color={color}
				placeholder={lable}
				marginBottom={marginBottom}
			/>
		</InputContainer>
	);
}

export default Input;

const InputContainer = styled(InputStyle)``;

const InputComponent = styled.input<InputComponentProps>`
	--color: ${(props) => props.color || '#000'};
	--margin-bottom: ${(props) => props.marginBottom};

	width: 100%;
	height: 2rem;

	padding-left: 0.6rem;
	margin-bottom: var(--margin-bottom);

	border-radius: var(--border-radius-input);
	border: 1px solid var(--color);

	background-color: 'transparent';
`;
