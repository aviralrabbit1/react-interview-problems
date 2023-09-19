// Take input of number of items for checkout, 
//  and push it into a queue from the given number of queus with least items

import { useState } from "react";

export default function ItemsCheckoutQueue() {
    const [items, setItems] = useState(0);
    const [lines, setLines] = useState([[10,6,8],[12],[2, 0, 3],[4],[9]]);
    function addItemsToQueue(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();      
      // Loop through the queue, find one with the list items, push into it

      let lineWithLeast, leastItemAmount = 1e9;

      for(let line of lines){
        const totalInLine = line.reduce((sum, value) => sum+value, 0);
        if(totalInLine < leastItemAmount) {
          lineWithLeast = line;
          leastItemAmount = totalInLine;
        }
      }
      console.log(`lineWithLeast is ${lines[lineWithLeast]} array containing ${lineWithLeast}`);
    }
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
        Items-Checkout-Queue
        <form onSubmit={addItemsToQueue}>
            <input required type="number" value={items} 
            onChange={(e) => setItems(e.currentTarget.valueAsNumber)} />
            <button>Checkout</button>
        </form>
        <div className="lines" style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap: '50px'}}>
        {lines.map((people, index) => (
            <div key={index}>Q{index+1}</div>
            ))}
        </div>
    </div> 
  )
}
