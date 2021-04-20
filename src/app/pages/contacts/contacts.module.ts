import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContactsComponent],
  exports: [ContactsComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: ContactsComponent }])],
})
export class ContactsModule {}
