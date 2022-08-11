import styled from 'styled-components';

function Header() {
	return (
		<HeaderContainer>
			<Logo />
			<ul className='comands'>
				<li>Home</li>
				<li>Requisições</li>
				<li>Planos</li>
				<li>Instrutores</li>
			</ul>
			<div className='user'></div>
		</HeaderContainer>
	);
}

export default Header;

const HeaderContainer = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	height: auto;
	padding-block: 2rem;

	padding-inline: var(--padding-inline-page);
	background-color: var(--color-base);

	& > ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		width: auto;

		& > li {
			margin: 0 1.2rem;
			cursor: pointer;
			list-style: none;
			font-size: var(--font-size-small);
			color: var(--font-color-tertiary);

			:hover {
				color: var(--color-primary);

				&::after {
					content: '';
					display: block;
					width: 100%;
					height: 1px;
					background-color: var(--color-primary);
					margin-top: 0.3rem;
				}
			}
		}
	}
`;

const Logo = styled.div`
	width: 9rem;
	height: 2rem;

	cursor: pointer;
	border-right: 1px solid var(--color-primary);

	background-image: var(--logo-inline);
	object-fit: contain;
	object-position: center;
	background-size: contain;
	background-repeat: no-repeat;
`;
