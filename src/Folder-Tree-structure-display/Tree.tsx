// Render a Tree structure of folder/file

const files = {
  children: [
    {
      name: 'public',
      children: [
        'index.html',
      ]
    },
    {
      name: 'src',
      children: [
        {
          name: 'Folder-Tree-strcuture-display',
          children: [
            {
              name: 'Tree.tsx',
            }
          ]
        },
        {
          name: 'App.tsx',
        },
        {
          name: 'index.tsx',
        }
      ]
    },
    {
      name: 'package.json',
    },
    {
      name: 'Readme.md',
    }
  ]
};

type TEntry = {
  name: string,
  children?: TEntry[]
}

function Node({ name, children}: TEntry){
  return (
    <div>
      Individual items
    </div>
  )
}

export default function Tree() {
  return (
    <div>
      Tree:
      <div>
        Tree rendering
      </div>
    </div>
  )
}