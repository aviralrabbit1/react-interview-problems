export function CircleUncircle() {
  function placeCircle(e: React.MouseEvent<HTMLDivElement>) {
    console.log(e);
  }
  return <div className="App" onClick={placeCircle}></div>;
}
