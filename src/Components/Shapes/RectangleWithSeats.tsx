import React from 'react';

const RectangleWithSeats = ({ numberOfSeats, seatWidth = 30, seatHeight = 30, gap = 5 }) => {
  const rows = 2;
  const columns = Math.ceil(numberOfSeats / rows);
  const rectWidth = columns * (seatWidth + gap) - gap;
  const rectHeight = rows * (seatHeight + gap) - gap;

  const seats = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const seatIndex = i * columns + j;
      if (seatIndex < numberOfSeats) {
        seats.push(
          <rect
            key={`${i}-${j}`}
            x={j * (seatWidth + gap)}
            y={i * (seatHeight + gap)}
            width={seatWidth}
            height={seatHeight}
            fill="lightgray"
            stroke="black"
          />
        );
      }
    }
  }

  return (
    <svg width={rectWidth} height={rectHeight} style={{ border: '2px solid black' }}>
      {seats}
    </svg>
  );
};

export default RectangleWithSeats;