import React from 'react';
import styled from "styled-components";

const Item = styled.div<{ isLast: boolean | undefined }>`
  width: 33.33333333%;
  height: 100%;
  border-right: ${(props) => (props.isLast) ? 'none' : '3px solid black'};;
`

interface Props {
  isLast?: boolean
}

const SquareComponent = ({isLast}: Props) => {
  return (
    <Item isLast={isLast}/>
  );
};

export default SquareComponent;