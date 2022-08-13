import styled from 'styled-components';

const userImg =
	'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200';

interface UserProps {
	size?: string;
	title?: string;
	describe?: string;
}

function UserLogo(props: UserProps) {
	const { size, title, describe } = props;
	return (
		<UserContainer size={size} title={title} describe={describe}>
			<img src={userImg} alt='user-logo' />
			<div className='describe'>
				<h4>{title}</h4>
				<p>{describe}</p>
			</div>
		</UserContainer>
	);
}

export default UserLogo;

const UserContainer = styled.div<UserProps>`
	--size: ${(props) => props.size || 'var(--font-size-large)'};
	--display-title: ${(props) => (props.title ? 'block' : 'none')};
	--display-describe: ${(props) => (props.describe ? 'block' : 'none')};

	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: auto;
	height: auto;
	font-size: var(--size);

	& > img {
		width: 1em;
		height: 1em;
		border-radius: 50%;

		margin-right: 0.2em;

		object-fit: cover;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	& > .describe {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		width: auto;
		height: auto;

		& > h4 {
			display: var(--display-title);
			font-size: 0.4em;

			color: var(--font-color-primary);
		}

		& > p {
			display: var(--display-describe);
			font-size: 0.28em;
			margin-top: 0.2em;

			color: var(--font-color-secondary);
		}
	}
`;
