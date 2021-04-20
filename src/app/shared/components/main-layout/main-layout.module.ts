import { CommonModule } from '@angular/common';
import { ContentModule } from '../content/content.module';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { MainLayoutComponent } from './main-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
  imports: [CommonModule, HeaderModule, FooterModule, ContentModule, RouterModule],
})
export class MainLayoutModule {}
