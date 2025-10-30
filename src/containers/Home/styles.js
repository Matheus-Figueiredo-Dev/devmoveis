import styled from "styled-components";

export const Background = styled.div`
	background-image: url(${(props) => props.img});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 0;
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 100%;
	max-width: 1500px;
`;

export const Info = styled.div`
	z-index: 1;
	padding: 20px;
	width: 50%;

	h1 {
			font-size: 60px;
			font-weight: 700;
			color: #fff;
		}

		p {
			font-size: 20px;
			font-weight: 500;
			color: #fff;
			margin-top: 30px;
			margin-bottom: 20px;
		}

		div {
			display: flex;
			gap: 20px;
			margin-top: 40px;
		}
`;

export const Poster = styled.div`
	z-index: 2;
		img {
			width: 400px;
			border-radius: 30px;
		}
`;
