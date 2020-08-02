import { useState, useCallback } from 'react';

import { TETROMINOS, randomization } from '../tetrominos';
import { STAGE_WIDTH, checkCollision } from '../gameHelpers';

export default function () {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  function rotate(matrix, dir) {
    const rotatedTetro = matrix.map((_, i) => {
      return matrix.map(col => col[i]);
    });

    if (dir > 0) return rotatedTetro.map(row => row.reverse());
    return rotatedTetro.reverse();
  }

  function playerRotate(stage, dir) {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        return clonedPlayer.pos.x = pos;
      }
    }

    setPlayer(clonedPlayer);
  }

  function updatePlayerPos({ x, y, collided }) {
    setPlayer(prev => ({
      ...prev,
      pos: {
        x: prev.pos.x += x,
        y: prev.pos.y += y,
      },
      collided,
    }));
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: {
        x: STAGE_WIDTH / 2 - 2,
        y: 0,
      },
      tetromino: randomization().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
} 