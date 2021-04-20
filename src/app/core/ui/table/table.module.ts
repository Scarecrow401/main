import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { TemplateHeaderDirective } from './template-header.directive';

@NgModule({
  declarations: [TableComponent, TemplateHeaderDirective],
  exports: [TableComponent, TemplateHeaderDirective],
  imports: [CommonModule],
})
export class TableModule {}
