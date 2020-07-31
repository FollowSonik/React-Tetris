import { useState } from 'react';

import { createStage } from '../gameHelpers';

export default function () {
  const [stage, setStage] = useState(createStage());

  return [stage, setStage];
} 