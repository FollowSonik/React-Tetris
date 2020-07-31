import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

export default function ({ gameOver, text }) {
  return (
    <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
  );
}