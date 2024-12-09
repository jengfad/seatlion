import React from 'react';

interface TableWithSeatsProps {
  id: string;
  seats: number;
  radius: number;
  seatRadius: number;
  stroke: string;
  strokeWidth: number;
}

const TableWithSeats: React.FC<TableWithSeatsProps> = ({ id, seats, radius, seatRadius, stroke, strokeWidth }) => {
  const angleStep = (2 * Math.PI) / seats;
  const seatPositions = Array.from({ length: seats }, (_, i) => {
    const angle = i * angleStep;
    return {
      x: radius + radius * Math.cos(angle),
      y: radius + radius * Math.sin(angle),
    };
  });

  return (
    <g id={id}>
      <circle cx={radius} cy={radius} r={radius} stroke={stroke} strokeWidth={strokeWidth} fill="none" />
      {seatPositions.map((pos, index) => (
        <circle key={index} cx={pos.x} cy={pos.y} r={seatRadius} stroke={stroke} strokeWidth={strokeWidth} fill="none" />
      ))}
    </g>
  );
};

export default TableWithSeats;