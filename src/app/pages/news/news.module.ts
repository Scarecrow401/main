import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NewsComponent],
  exports: [NewsComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: NewsComponent }])],
})
export class NewsModule {}
