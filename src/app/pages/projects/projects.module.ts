import { CommonModule } from '@angular/common';
import { FileModule } from 'src/app/core/ui/file/file.module';
import { InputModule } from 'src/app/core/ui/input/input.module';
import { NgModule } from '@angular/core';
import { ProjectsButtonComponent } from './projects-button/projects-button.component';
import { ProjectsComponent } from './projects.component';
import { ProjectsFilesComponent } from './projects-files/projects-files.component';
import { ProjectsInputComponent } from './projects-input/projects-input.component';
import { ProjectsModalComponent } from './projects-modal/projects-modal.component';
import { ProjectsSelectComponent } from './projects-select/projects-select.component';
import { ProjectsTableComponent } from './projects-table/projects-table.component';
import { RouterModule } from '@angular/router';
import { SelectModule } from 'src/app/core/ui/select/select.module';
import { TableModule } from 'src/app/core/ui/table/table.module';
import { TemplateHeaderDirective } from 'src/app/core/ui/table/template-header.directive';
import { projectsRoutes } from './const';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsSelectComponent,
    ProjectsButtonComponent,
    ProjectsFilesComponent,
    ProjectsModalComponent,
    ProjectsInputComponent,
    ProjectsTableComponent,
  ],
  exports: [ProjectsComponent],
  imports: [CommonModule, SelectModule, FileModule, TableModule, InputModule, RouterModule.forChild(projectsRoutes)],
})
export class ProjectsModule {}
