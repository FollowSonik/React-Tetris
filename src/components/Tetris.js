import React from 'react';

import { createStage } from '../gameHelpers';
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

export default function () {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text='score' />
            <Display text='rows' />
            <Display text='level' />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}