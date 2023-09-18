import { useState } from 'react';

type TCoordinates = {
  x: number;
  y: number;
};

export function CircleUncircle() {
  const [points, setPoints] = useState<TCoordinates[]>([]);
  const [undone, setUndone] = useState<TCoordinates[]>([]);
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

  function undo(){
    const newPoints = [...points];
    const undonePoint = newPoints.pop();
    if(!undonePoint) return;
    setUndone([...undone, undonePoint]);
    setPoints(newPoints);
  }
  function redo(){
    const newUndone = [...undone];
    const newPoints = [...points];
    const undonePoint = newUndone.pop(); // Pop the latest
    if(!undonePoint) return;
    newPoints.push(undonePoint);
    setPoints(newPoints);
    setUndone(newUndone);
  }
  return (
    <>
      <button className='undo' onClick={undo} >Undo</button>
      <button className='undo' onClick={redo} >Redo</button>
      <div
        className="dashboard"
        style={{ height: '100vh', background: 'black', color: 'red' }}
        onClick={placeCircle}
      >
        {points.map((point) => (
          <div
            className="point"
            style={{
              left: point.x - 6 + 'px', // offset = 13px
              top: point.y - 13 + 'px',
              // circles are viewed as stacked in left side, because of display: block
              display: 'inline-block', // Now stacks linearly
              position: 'absolute', // now following x,y coordinate
              borderRadius: '50%',
              width: '10px',
              height: '10px',
              background: 'red',
            }}
          ></div>
        ))}
      </div>
    </>
  );
}
