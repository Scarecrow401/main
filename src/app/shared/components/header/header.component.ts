import { Component, Input, OnInit } from '@angular/core';

import { Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() routes: Routes;
  constructor() {}

  ngOnInit(): void {}
}
