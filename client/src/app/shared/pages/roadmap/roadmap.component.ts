import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface TaskNode {
  name: string;
  children?: TaskNode[];
  link?: string;
}

const TASK_DATA: TaskNode[] = [
  {
    name: 'High Level Website Plan',
    children: [
      { name: 'NekoGoo character profile' },
      {
        name: `
          Blog of interspecies monster girl interests, game opinions,
          and updates on my freely hosted lewd text game in development
        `,
      },
      {
        name: `
          Work on eRPGe (Erotic RPG Engine);
          iterate enough to support loading CoC data;
          load with my story template data;
          expand to allow externally submitted data for certain assets;
        `,
      },
    ],
  },
  {
    name: 'DevOps',
    children: [
      {
        name: 'Planning Board (Azure)',
        link: 'https://www.example.com',
      },
      {
        name: 'Scripts to setup system environment (PowerShell, Bash, Python)',
      },
      { name: 'Web App Project (MongoDB, Express, Angular, Node.js)' },
      { name: 'Build Pipeline (Azure)' },
      { name: 'Deployment Pipeline (Azure)' },
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

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
})
export class RoadmapComponent implements OnInit {
  treeControl = new NestedTreeControl<TaskNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<TaskNode>();

  constructor() {
    this.dataSource.data = TASK_DATA;
  }

  hasChild = (_: number, node: TaskNode) =>
    !!node.children && node.children.length > 0;

  ngOnInit(): void {}
}
