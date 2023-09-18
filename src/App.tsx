import { FC } from 'react';
import Tree from './Folder-Tree-structure-display/Tree';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Tree/>
    </div>
  );
};
