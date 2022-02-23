import React, {useEffect, useState} from 'react';
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
  const [sudokuNumberList, setSudokuNumberList] = useState<number[]>([])
  console.log('asd')
  useEffect(() => {
    makeSudokuGameNumber()
  }, [])

  const makeSudokuGameNumber = () => {
    for (let square = 0; square < 9; square++) {
      for (let number = 0; number < 9; number++) {
        createNumber(square, number)
      }
    }
  }

  const createNumber = (squareCount: number, number: number) => {
    let count: number = 0
    while (count > 9) {
      let itemNumber: number = getRandomArbitrary(1, 9)
      deduplicationSquareNumber(squareCount, number, itemNumber)
    }
  }

  const deduplicationSquareNumber = (squareCount: number, number: number, itemNumber: number) => {
    switch (squareCount) {
      case 0 :
        return sudokuNumberList.push(itemNumber)
      case 1:
        return
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
    }
  }

  const deduplicationSudokuNumber = (number: number, itemNumber: number) => {

  }

  const getRandomArbitrary = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  return (
    <Container>
      <SquareListComponent/>
      <SquareListComponent/>
      <SquareListComponent isLast={true}/>
    </Container>
  );
};

export default GameComponent;