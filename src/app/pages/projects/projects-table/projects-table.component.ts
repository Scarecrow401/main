import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss'],
})
export class ProjectsTableComponent implements OnInit {
  cols = [
    { colName: 'name', fieldName: 'name' },
    { colName: 'age', fieldName: 'age' },
    { colName: 'points', fieldName: 'points' },
    { colName: 'assessment', fieldName: 'assessment' },
    { colName: 'status', fieldName: 'status' },
    { colName: 'action', fieldName: 'action' },
  ];

  data = [
    { name: 'Sah', age: 20, points: 76, assessment: true, status: 'allowed' },
    { name: 'Asg', age: 20, points: 76, assessment: true, status: 'allowed' },
    { name: 'Hst', age: 20, points: 76, assessment: true, status: 'allowed' },
    { name: 'Jas', age: 20, points: 76, assessment: true, status: 'allowed' },
    { name: 'Lsgj', age: 20, points: 76, assessment: true, status: 'allowed' },
    { name: 'Jjdg', age: 20, points: 76, assessment: true, status: 'allowed' },
    { name: 'Sah', age: 20, points: 76, assessment: true, status: 'allowed' },
    { name: 'Sah', age: 20, points: 76, assessment: true, status: 'allowed' },
    { name: 'Sah', age: 20, points: 76, assessment: true, status: 'allowed' },
    { name: 'Sah', age: 20, points: 76, assessment: true, status: 'allowed' },
    { name: 'Sah', age: 20, points: 76, assessment: true, status: 'allowed' },
    { name: 'Sah', age: 20, points: 76, assessment: true, status: 'allowed' },
    { name: 'Sah', age: 20, points: 76, assessment: true, status: 'allowed' },
    { name: 'Sah', age: 20, points: 76, assessment: true, status: 'allowed' },
    { name: 'Sah', age: 20, points: 76, assessment: true, status: 'allowed' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
