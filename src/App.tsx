import * as React from 'react';
import './App.css';
import MainPage from "./Component/MainPage";
import styled from "styled-components"

const Main = styled.div`
  width: 100%;
  height: 100%;
`
const App = () => {
  return (
    <Main>
      <MainPage/>
    </Main>
  );
}

export default App;
// <Link to="/sudoku">시작하기</Link>