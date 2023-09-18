// Render a Tree structure of folder/file

import { useState } from 'react';

const files = {
  children: [
    {
      name: 'public',
      children: [
        {
          name: 'index.html',
        },
      ],
    },
    {
      name: 'src',
      children: [
        {
          name: 'Folder-Tree-strcuture-display',
          children: [
            {
              name: 'Tree.tsx',
            },
          ],
        },
        {
          name: 'App.tsx',
        },
        {
          name: 'index.tsx',
        },
      ],
    },
    {
      name: 'package.json',
    },
    {
      name: 'Readme.md',
    },
  ],
};

type TNode = {
  name: string;
  children?: TNode[]; // '?' denotes optional
};

function Node({ entry, depth }: { entry: TNode; depth: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {entry.children && (
        <button onClick={() => setExpanded(!expanded)}>+</button>
      )}
      {entry.name}

      {expanded && (
        <div style={{ paddingLeft: `${depth * 20}px` }}>
          {entry.children?.map((entry) => (
            <Node entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Tree() {
  return (
    <div>
      {files.children.map((entry) => (
        <Node entry={entry} depth={1} />
      ))}
    </div>
  );
}
