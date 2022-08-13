import styled from 'styled-components';

function Info() {
	return (
		<InfoContainer>
			<p className='description'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<div className='level'>
				<p>Nivel:</p>
				<span>Iniciante</span>
			</div>
			<div className='instruments'>
				<p>Instrumentos:</p>
				<ul>
					<li>Guitar</li>
					<li>Piano</li>
				</ul>
			</div>
			<div className='available-days'>
				<p>Dias disponíveis:</p>
				<ul>
					<li>seg</li>
					<li>ter</li>
				</ul>
			</div>
		</InfoContainer>
	);
}

export default Info;

const InfoContainer = styled.article`
	--margin: 1rem;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;

	width: 100%;
	height: auto;
	padding: 1rem 0.5rem;
	padding-bottom: 0.5rem;

	font-size: var(--font-size-small);
	color: var(--color-primary);

	& span,
	li {
		background-color: var(--color-low-opacity);
		border-radius: 3px;

		padding: 0.1rem 1rem;
		margin-right: 0.8rem;
	}

	& > div > ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	& > div > p {
		font-weight: var(--font-weight-bold);
		margin-right: 0.5rem;
	}

	& > div {
		display: flex;
		width: 100%;
		margin-bottom: var(--margin);
	}

	& > .description {
		margin-bottom: var(--margin);
	}

	& > .level {
		margin-bottom: var(--margin);
	}
`;
