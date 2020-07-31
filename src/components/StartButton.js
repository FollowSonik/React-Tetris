import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

export default function ({ callback }) {
  return (
    <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
  );
}