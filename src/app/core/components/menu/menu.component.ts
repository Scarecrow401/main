import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  navigateToAbout() {
    this.router.navigateByUrl('about');
  }

  navigateToMain() {
    this.router.navigateByUrl('main');
  }

  navigateToProjects() {
    this.router.navigateByUrl('projects');
  }
}
