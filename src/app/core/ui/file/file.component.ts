import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  @ViewChild('fileRef', { static: true }) fileRef: ElementRef<HTMLInputElement>;
  @HostListener('change', ['$event.target']) changeHandler() {
    this.selectedFile = this.fileRef.nativeElement.files[0];
    this.selected.emit(this.selectedFile);
  }
  @Output() selected = new EventEmitter<File>();

  selectedFile: File;
  constructor() {}

  ngOnInit(): void {}

  triggerInput(): void {
    this.fileRef.nativeElement.click();
  }

  remove(): void {
    this.selectedFile = null;
  }
}
