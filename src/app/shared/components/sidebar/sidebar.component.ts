import { Component, Input, OnInit } from '@angular/core';

import { Routes } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() items: Routes;
  constructor() {}

  ngOnInit(): void {
    if (this.items) {
      this.items = this.items.filter((value) => value.path);
    }
  }
}
