import styled from 'styled-components';

export type Props = {
	color?: string;
	size: string;
};

type LogoComponent = {
	padding: string;
};

function Logo({ color = '--color-primary', size }: Props) {
	return <LogoImg padding={size} width={size} height={size} color={color} />;
}

export default Logo;

const LogoImg = styled.img<LogoComponent>`
	--color: ${(props) => `var(${props.color})`};

	color: var(--color);
	background-image: var(--logo);
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	padding: calc(${(props) => props.padding} / 2);
`;
