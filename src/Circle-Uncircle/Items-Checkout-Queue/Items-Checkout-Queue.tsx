// Take input of number of items for checkout, 
//  and push it into a queue from the given number of queus with least items

import { useState } from "react";

export default function ItemsCheckoutQueue() {
    const [items, setItems] = useState(0);
  return (
    <div>Items-Checkout-Queue
        <form>
            <input required type="number" value={items} 
            onChange={(e) => setItems(e.currentTarget.valueAsNumber)} />
            <button>Checkout</button>
        </form>
    </div> 
  )
}
