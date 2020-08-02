import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export default function (player, resetPlayer) {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    function sweepRows(newStage) {
      return newStage.reduce((acc, row) => {
        const condition = row.findIndex(cell => cell[0] === 0) === -1;
        if (condition) {
          setRowsCleared(prev => prev + 1);
          acc.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return acc;
        };
        acc.push(row);
        return acc;
      }, []);
    }

    function updateStage(prevStage) {
      const newStage = prevStage.map(row => {
        return row.map(cell => {
          return cell[1] === 'clear' ? [0, 'clear'] : cell;
        });
      });

      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });

      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }

      return newStage;
    }

    setStage(prev => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared];
}