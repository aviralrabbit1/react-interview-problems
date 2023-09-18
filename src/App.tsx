import { FC } from 'react';
import { CircleUncircle } from './Circle-Uncircle/CircleUncircle';
import Tree from './Folder-Tree-structure-display/Tree';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div className='App'>
      <CircleUncircle />
    </div>
  );
};
