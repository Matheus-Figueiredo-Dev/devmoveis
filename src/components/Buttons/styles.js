import styled, { css } from "styled-components";

const buttonStyles = css`
border: 3px solid #fff;
	background: transparent;
	color: #fff;
	border-radius: 30px;
	padding: 10px 20px;
	cursor: pointer;
	font-size: 20px;
	font-weight: 500;
	transform: scale(1);

	&:hover {
		color: #ff0000;
		background-color: #fff;
		border-color: #ff0000;
		transition: all 0.3s ease-in-out;
		transform: scale(1.05);
	}`;

export const WhiteButton = styled.button`
	${buttonStyles}
`;

export const RedButton = styled.button`
	${buttonStyles}
	background-color: #ff0000;
	border: 4px solid transparent;
	box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

	&:hover {
		box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
		color: #fff;
		background-color: #ff0000;
	}
`;
