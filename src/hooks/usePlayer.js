import { useState } from 'react';

import { randomization } from '../tetrominos';

export default function () {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomization().shape,
    collided: false,
  });

  return [player];
} 