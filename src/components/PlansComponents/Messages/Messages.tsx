import SendIcon from '@mui/icons-material/SendOutlined';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserInfo } from '../../../contexts/AuthContext';
import useAuth from '../../../hooks/useAuth';
import { parseHeader } from '../../../services/api/baseAPI';
import planAPI from '../../../services/api/planAPI';
import UserLogo from '../../UserLogo';
import Message from '../Message/Message';
import { Comment } from '../Plan/Plan';

type ListComments = {
	id: number;
};

function Messages({ id }: ListComments) {
	const { refresh, handleRefresh } = useAuth();
	const [message, setMessage] = useState('');
	const [listComments, setListComments] = useState<Comment[]>([]);

	const { userInfo, token } = useAuth();
	const user = userInfo as UserInfo;
	const config = parseHeader(token as string);

	const assembleMessages = () => {
		return listComments.map((comment) => (
			<Message key={comment.id} comment={comment} />
		));
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value);
	};

	const handleSendMessage = () => {
		try {
			const commentData = {
				comment: message,
			};

			planAPI.postComment(id, commentData, config);
			handleRefresh();
			handleRefresh();
			setMessage('');
		} catch (error) {
			console.log(error);
		}
	};

	const getComments = async () => {
		try {
			const data = await planAPI.getComments(id, config);
			setListComments(data.comments);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getComments();
	}, [refresh]);

	return (
		<MessagesContainer>
			<InputMessageContainer>
				<UserLogo image={user.image} />
				<div className='input'>
					<input
						type='text'
						placeholder='Digite sua mensagem...'
						value={message}
						onChange={handleInputChange}
						onKeyDown={(e) => {
							if (e.key === 'Enter') handleSendMessage();
						}}
					/>
					<SendIcon color='disabled' onClick={handleSendMessage} />
				</div>
			</InputMessageContainer>
			{assembleMessages()}
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
	margin-bottom: 1rem;
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
