import React from "react";
// import './App.css';
import styled from "styled-components";
import { Heading } from "../../components/Typography/Headings";

import Container from "../../wrappers/Container";

const Wrapper = styled.div`
	&.dnd-page {
		.container {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		}

		.column {
			height: 400px;
			width: 200px;
			margin: 20px;
			border-radius: 10px;
			box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
		}

		.first-column {
			background-color: #f5ffea;
		}

		.second-column {
			background-color: #fffbf5;
		}

		.movable-item {
			border-radius: 10px;
			background-color: #fff3f3;
			height: 100px;
			width: 170px;
			margin: 10px auto;
			display: flex;
			justify-content: center;
			align-items: center;
			box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
		}
	}
`;

const MovableItem = () => {
	return <div className="movable-item">We will move this item</div>;
};

const FirstColumn = () => {
	return (
		<div className="column first-column">
			Column 1
			<MovableItem />
		</div>
	);
};

const SecondColumn = () => {
	return <div className="column second-column">Column 2</div>;
};

const Index: React.FC = () => {
	return (
		<Wrapper className="dnd-page">
			<Container>
				<Heading size={1}>Drag N drop</Heading>
				<FirstColumn />
				<SecondColumn />
			</Container>
		</Wrapper>
	);
};

export default Index;
