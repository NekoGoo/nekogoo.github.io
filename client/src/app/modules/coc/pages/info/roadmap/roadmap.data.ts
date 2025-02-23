/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
export interface TaskNode {
  name: string;
  children?: TaskNode[];
  link?: string;
}

export const TASK_DATA: TaskNode[] = [
  {
    name: 'High Level Plan',
    children: [
      { name: 'Able to play game in memory' },
      { name: 'Able to save game to local storage' },
      { name: 'System able to handle all of Corruption of Champions data' },
    ],
  },
  {
    name: 'DevOps',
    children: [
      {
        name: 'Planning board',
        link: 'https://www.example.com',
      },
      { name: 'Project setup and automation' },
      { name: 'Deployment pipeline' },
    ],
  },
  {
    name: 'Web Application (client)',
    children: [
      {
        name: 'Green',
        children: [
          { name: 'Broccoli', link: 'https://www.example.com' },
          { name: 'Brussels sprouts' },
        ],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
  {
    name: 'Web Application (server api)',
    children: [
      { name: 'Apple', link: 'https://www.example.com' },
      { name: 'Banana' },
      { name: 'Fruit loops' },
    ],
  },
];
