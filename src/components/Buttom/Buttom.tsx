import styled from 'styled-components';

export type Props = {
	text: string;
	onClick?: () => void;
	color: string;
	disabled?: boolean;
	st?: 'outline' | 'text' | 'solid';
	type?: 'button' | 'submit';
	marginBottom?: string;
};

type ButtonComponentProps = Pick<Props, 'st' | 'marginBottom'>;

function Button({
	text,
	onClick = () => {},
	color,
	disabled = false,
	st = 'solid',
	type = 'button',
	marginBottom = '0',
}: Props) {
	return (
		<ButtonComponent
			marginBottom={marginBottom}
			disabled={disabled}
			onClick={onClick}
			color={color}
			type={type}
			st={st}
		>
			{text}
		</ButtonComponent>
	);
}

export default Button;

const ButtonComponent = styled.button<ButtonComponentProps>`
	--border: ${(props) =>
		props.st === 'outline' ? '1px solid var(--color-primary)' : 'none'};
	--color: ${(props) =>
		props.st === 'outline' || props.st === 'text'
			? 'var(--color-primary)'
			: '#fff'};
	--background: ${(props) =>
		props.st === 'outline' || props.st === 'text'
			? 'transparent'
			: `var(${props.color})` || 'var(--font-color-primary)'};
	--margin-bottom: ${(props) => props.marginBottom};

	width: 100%;
	height: var(--height-input);
	min-height: var(--height-input);

	padding-inline: 1rem;
	margin-bottom: var(--margin-bottom);

	background-color: var(--background);
	color: var(--color);
	border: var(--border);
	border-radius: var(--border-radius-input);

	&:hover {
		--border: ${(props) =>
			props.st === 'outline' ? '1px solid var(--color-secondary)' : 'none'};
		--color: ${(props) =>
			props.st === 'outline' || props.st === 'text'
				? 'var(--color-secondary)'
				: '#fff'};
		--background: ${(props) =>
			props.st === 'outline' || props.st === 'text'
				? 'transparent'
				: `var(--color-secondary)` || '#000'};

		color: var(--color);
		background-color: var(--background);
	}
`;
