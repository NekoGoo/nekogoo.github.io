import { NestedTreeControl } from '@angular/cdk/tree';
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import {
  MatNestedTreeNode,
  MatTree,
  MatTreeNestedDataSource,
  MatTreeNode,
  MatTreeNodeDef,
  MatTreeNodeOutlet,
  MatTreeNodeToggle,
} from '@angular/material/tree';

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

@Component({
  selector: 'coc-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss'],
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatTree,
    MatTreeNodeDef,
    MatTreeNode,
    MatTreeNodeToggle,
    NgIf,
    MatIcon,
    MatNestedTreeNode,
    MatIconButton,
    MatTreeNodeOutlet,
  ],
})
export class CocRoadmapComponent implements OnInit {
  treeControl = new NestedTreeControl<TaskNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<TaskNode>();

  constructor() {
    this.dataSource.data = TASK_DATA;
  }

  hasChild = (_: number, node: TaskNode) =>
    !!node.children && node.children.length > 0;

  ngOnInit(): void {}
}
