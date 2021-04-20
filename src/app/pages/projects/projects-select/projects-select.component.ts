import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-select',
  templateUrl: './projects-select.component.html',
  styleUrls: ['./projects-select.component.scss'],
})
export class ProjectsSelectComponent implements OnInit {
  items = [
    { id: 0, name: '1' },
    { id: 1, name: '2' },
    { id: 2, name: '3' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
