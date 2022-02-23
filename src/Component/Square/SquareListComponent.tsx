import React from 'react';
import styled from "styled-components";
import SquareComponent from "./SquareComponent";

const ItemList = styled.div<{ isLast: boolean | undefined }>`
  width: 100%;
  height: 33.3333333%;
  border-bottom: ${(props) => (props.isLast) ? 'none' : '3px solid black'};
  display: flex;
`

interface Props {
  isLast?: boolean
}

const SquareListComponent = ({isLast}: Props) => {
  return (
    <ItemList isLast={isLast}>
      <SquareComponent/>
      <SquareComponent/>
      <SquareComponent isLast={true}/>
    </ItemList>
  );
};

export default SquareListComponent;