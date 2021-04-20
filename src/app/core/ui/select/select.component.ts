import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { ISelectItem } from './types';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations: [
    trigger('overlayAnimation', [
      transition(':enter', [style({ opacity: 0, transform: 'scaleY(0.8)' }), animate('{{showTransitionParams}}')]),
      transition(':leave', [animate('{{hideTransitionParams}}', style({ opacity: 0 }))]),
    ]),
  ],
})
export class SelectComponent implements OnInit {
  @Input() items: ISelectItem[];

  @Output() selected = new EventEmitter<ISelectItem>();

  title = 'Default placeholder';
  isOpen = false;
  selectedItem: ISelectItem;
  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  selectItem(item: ISelectItem): void {
    if (item === this.selectedItem) {
      return;
    }

    this.title = item.name;
    this.selectedItem = item;
    this.selected.emit(item);
    this.isOpen = false;
  }
}
