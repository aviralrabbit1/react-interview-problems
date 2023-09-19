// Take input of number of items for checkout, 
//  and push it into a queue from the given number of queus with least items
// Then decrement every line by line(like a checkout counter)

import { useEffect, useState } from "react";

export default function ItemsCheckoutQueue() {
    const [items, setItems] = useState<number | undefined>(1);
    const [lines, setLines] = useState<number[][]>([[10,6,8],[12],[2, 1, 3],[4],[9]]);

    function addItemsToQueue(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();      
      // Loop through the queue, find one with the list items, push into it

      let lineWithLeast: number[] | undefined ;
      let leastItemAmount = 1e9;

      for(let line of lines){
        const totalInLine = line.reduce((sum, value) => sum+value, 0);
        if(totalInLine < leastItemAmount) {
          lineWithLeast = line;
          leastItemAmount = totalInLine;
        }
      }
      // console.log(`lineWithLeast is ${lines[lineWithLeast]} array containing ${lineWithLeast}`);

      if(!lineWithLeast) return; // for undefined value
      // console.log(`before ${lineWithLeast}`);

      // lineWithLeast.push(items); // pushing current items into the array with least items

      setLines((prevLines) => prevLines.map((line) => 
        line === lineWithLeast ? [...line, items]: line
      ));
      // console.log(`after ${lineWithLeast}`);
    }

    useEffect(() => {
      const interval = setInterval(() => {
        setLines(prevLines => {
          return prevLines.map(line => {
            return [line[0]-1, ...line.slice(1)].filter((value) => value > 0);
             // removing the first line(amount) of every queue
          })
        })
      }, 1000); // Updated every second
    
      return () => {
        clearInterval(interval);
      };
    }, [])
    

  return (
    <div className="queue" 
      style={{
        height: "100vh",
        background: "black",
        color: "red",
        alignItems: "center",
        justifyContent: "center",
        display: "flex", // Center horizontally
        flexDirection: "column", // Center vertically
        gap: "20px"
    }}>
      <h1>
        Items-Checkout-Queue
      </h1>
        <form onSubmit={addItemsToQueue}>
            <input required type="number" value={items} 
            onChange={(e) => setItems(e.currentTarget.valueAsNumber || 1)} />
            <button>Checkout</button>
        </form>
        <div className="lines" style={{
          display:'grid', 
          gridTemplateColumns:'repeat(5, 1fr)', 
          gap: '50px',
          // alignItems: "center",
          justifyContent: "center",
          }}>
        {lines.map((line, index) => (
            <div key={index}>
                <h1 style={{paddingBottom:'10px'}} >
                  Q{index}
                </h1>
                <h3 className="rectangle" 
                style={{
                  color: 'cyan', 
                  paddingRight:'10px', 
                  left:'20%',
                  width: '100px',
                  height: '30px',
                  border: '1px solid white',
                  padding: '2px',
                  alignItems: "center",
                  justifyContent: "center",                  
                  }}>
                  Total: {line.reduce((sum, value) => sum+value, 0)}
                </h3>
                <h3 style={{
                  marginTop:'15px', 
                  color: 'yellow',
                  }}>

              {line.map((items, index) => (
                <li key={index} style={{
                  listStyle:'none',                   
                  width: '30px',
                  borderRadius: '50%',
                  border: '1px solid white',
                  padding:'3px'
                }} >{items}</li>
                ))}
                </h3>
            </div>
        ))}
        </div>
    </div> 
  )
}
