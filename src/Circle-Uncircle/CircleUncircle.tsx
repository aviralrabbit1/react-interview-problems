import { useState } from 'react';

type TCoordinates = {
  x: number;
  y: number;
};

export function CircleUncircle() {
  const [points, setPoints] = useState<TCoordinates[]>([]);
  function placeCircle(e: React.MouseEvent<HTMLDivElement>) {
    console.log(e);
    // SyntheticBaseEvent : can be - ClientX,Y, pageX,Y , screenX,Y
    const { clientX, clientY } = e;
    setPoints([
      ...points,
      {
        x: clientX,
        y: clientY,
      },
    ]);
  }
  return (
    <div className="App" onClick={placeCircle}>
      {points.map((point) => (
        <div
          className="point"
          style={{
            left: point.x + 'px',
            right: point.y + 'px',
          }}
        >
          O
        </div>
      ))}
    </div>
  );
}
