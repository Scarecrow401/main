import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsFilesComponent } from './projects-files.component';

describe('ProjectsFilesComponent', () => {
  let component: ProjectsFilesComponent;
  let fixture: ComponentFixture<ProjectsFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
