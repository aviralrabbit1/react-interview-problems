import { FC } from 'react';
import { CircleUncircle } from './Circle-Uncircle/CircleUncircle';
import Tree from './Folder-Tree-structure-display/Tree';

import './style.css';
import ItemsCheckoutQueue from './Circle-Uncircle/Items-Checkout-Queue/Items-Checkout-Queue';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div className='App'>
      <ItemsCheckoutQueue />
    </div>
  );
};
