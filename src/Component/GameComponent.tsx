import React from 'react';
import styled from "styled-components";
import SquareListComponent from "./Square/SquareListComponent";

const Container = styled.div`
  width: 600px;
  height: 600px;
  border: 5px solid black;
  background: white;
  box-sizing: border-box;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
`

const GameComponent = () => {
  return (
    <Container>
      <SquareListComponent/>
      <SquareListComponent/>
      <SquareListComponent isLast={true}/>
    </Container>
  );
};

export default GameComponent;