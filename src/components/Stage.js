import React from 'react';
import { StyledStage } from './styles/StyledStage';
import Cell from './Cell';

export default function ({ stage }) {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map(row => row.map((cell, x) => {
        return <Cell key={x} type={cell[0]} />
      }))}
    </StyledStage>
  );
}