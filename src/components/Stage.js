import React from 'react';
import Cell from './Cell';

export default function ({ stage }) {
  return (
    <div>
      {stage.map(row => row.map((cell, x) => {
        return <Cell key={x} type={cell[0]} />
      }))}
    </div>
  );
}