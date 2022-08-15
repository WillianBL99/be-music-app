import SendIcon from '@mui/icons-material/SendOutlined';
import styled from 'styled-components';
import UserLogo from '../../UserLogo';
import Message from '../Message/Message';
import { Comment } from '../Plan/Plan';

type ListComments = {
	listComments: Comment[];
};

function Messages({ listComments }: ListComments) {
	const assembleMessages = () => {
		return listComments.map((comment) => (
			<Message key={comment.id} comment={comment} />
		));
	};

	return (
		<MessagesContainer>
			{assembleMessages()}
			<InputMessageContainer>
				<UserLogo image='https://europe.yamaha.com/en/files/eg-top-banner-01-770x750_7248009f0c721e107688cfecc9b74d88.jpg?impolicy=resize&imwid=770&imhei=750' />
				<div className='input'>
					<input type='text' placeholder='Digite sua mensagem...' />
					<SendIcon color='disabled' />
				</div>
			</InputMessageContainer>
		</MessagesContainer>
	);
}

export default Messages;

const MessagesContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: auto;
	max-height: 20rem;
	overflow-y: auto;
	padding: 1rem 0.5rem;
	padding-bottom: 0.5rem;

	background-color: var(--color-tertiary);
	box-shadow: inset 0px 5px 10px -8px rgba(0, 0, 0, 0.2);
`;

const InputMessageContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;

	width: 100%;
	height: auto;
	padding: 0.5rem 1rem;
	border-radius: calc(var(--border-radius-base) * 0.5);
	background-color: var(--color-low-opacity);

	& > .input {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		width: 100%;
		height: auto;

		padding: 0.5rem 1rem;
		border-radius: calc(var(--border-radius-base) * 0.35);
		background-color: var(--color-tertiary);
		color: var(--font-color-primary);

		& > input {
			width: 100%;
			height: auto;
			font-size: var(--font-size-tiny);
			border: none;
			outline: none;
		}

		& > svg {
			&:hover {
				cursor: pointer;
				color: var(--font-color-primary);
			}
		}
	}
`;
