import { ProjectsButtonComponent } from './projects-button/projects-button.component';
import { ProjectsComponent } from './projects.component';
import { ProjectsFilesComponent } from './projects-files/projects-files.component';
import { ProjectsInputComponent } from './projects-input/projects-input.component';
import { ProjectsModalComponent } from './projects-modal/projects-modal.component';
import { ProjectsSelectComponent } from './projects-select/projects-select.component';
import { Routes } from '@angular/router';
import { ProjectsTableComponent } from './projects-table/projects-table.component';

export const projectsRoutes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      { path: '', redirectTo: 'button' },
      { path: 'button', component: ProjectsButtonComponent },
      { path: 'select', component: ProjectsSelectComponent },
      { path: 'input', component: ProjectsInputComponent },
      { path: 'files', component: ProjectsFilesComponent },
      { path: 'modal', component: ProjectsModalComponent },
      { path: 'table', component: ProjectsTableComponent },
    ],
  },
];
