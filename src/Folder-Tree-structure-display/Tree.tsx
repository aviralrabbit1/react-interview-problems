// Render a Tree structure of folder/file

const files = {
  children: [
    {
      name: 'public',
      children: ['index.html'],
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

function Node({ name, children }: TNode) {
  return (
    <div>
      {name}
      {children?.map((entry) => (
        <Node {...entry} />
      ))}
    </div>
  );
}

export default function Tree() {
  return (
    <div>
      {files.children.map((entry) => (
        <Node {...entry} />
      ))}
    </div>
  );
}
