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
    const { screenX, screenY } = e;
    setPoints([
      ...points,
      {
        x: screenX,
        y: screenY,
      },
    ]);
  }
  return (
    <div className="App" onClick={placeCircle}>
      {points.map((point) => (
        <div
          className="point"
          style={{
            left: point.x-13 + 'px',
            top: point.y-13 + 'px',
            // circles are viewed as stacked in left side, because of display: block
            display: 'inline-block', // Now stacks linearly
            position: 'absolute', // now following x,y coordinate
          }}
        >
          O
        </div>
      ))}
    </div>
  );
}
