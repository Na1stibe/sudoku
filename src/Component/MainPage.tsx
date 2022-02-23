import React from 'react';
import styled from "styled-components"
import GameComponent from "./GameComponent";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  width: calc(100% - 400px);
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Header = styled.div`
  width: 700px;
  height: 50px;
  color: red;
`

const MainPage = () => {
  return (
    <Container>
      <Content>
        <Header>1</Header>
        <GameComponent/>
        <p>게임 시작</p>
      </Content>
    </Container>
  );
};

export default MainPage;