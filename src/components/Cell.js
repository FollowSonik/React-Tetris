import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

export default function ({ type }) {
  return (
    <StyledCell type={'L'} color={TETROMINOS['L'].color}>CELL</StyledCell >
  );
}