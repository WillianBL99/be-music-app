import React from 'react';
import SelectComponent from 'react-select';
import styled from 'styled-components';
export type Options = { value: any; label: string };

export type Props = {
	name?: string;
	options: Options[] | [];
	placeholder?: string;
	lable?: string;
	value?: any;
	disabled?: boolean;
	onChange?: (e: any) => void;
};

function Select(props: Props) {
	const {
		disabled = false,
		name,
		options,
		placeholder,
		onChange,
		lable,
		value,
	} = props;

	const inputLable =
		!value || value < 0 ? <></> : <label htmlFor={name}>{lable}</label>;
	return (
		<SelectContainer>
			{inputLable}
			<SelectComponent
				name={name}
				options={options}
				placeholder={placeholder}
				onChange={onChange}
				tabSelectsValue={true}
				isSearchable={true}
				isDisabled={disabled}
			/>
		</SelectContainer>
	);
}

export default Select;

const SelectContainer = styled.div`
	width: 100%;
	height: auto;
	margin-bottom: 10px;

	& > div {
		width: 100%;
		height: var(--height-input);
		max-height: var(--height-input);
		min-height: var(--height-input);

		& > div:nth-child(3) {
			width: 100%;
			height: 100%;

			font-size: var(--font-size-base);

			& > div {
				color: var(--font-color-tertiary);
			}
		}
	}
`;
