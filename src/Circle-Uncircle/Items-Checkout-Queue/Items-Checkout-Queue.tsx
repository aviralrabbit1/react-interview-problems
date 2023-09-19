// Take input of number of items for checkout, 
//  and push it into a queue from the given number of queus with least items

import { useState } from "react";

export default function ItemsCheckoutQueue() {
    const [items, setItems] = useState(0);
    const [lines, setLines] = useState([[],[],[],[],[]]);
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
        <form>
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
