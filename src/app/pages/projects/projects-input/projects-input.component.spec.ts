import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsInputComponent } from './projects-input.component';

describe('ProjectsInputComponent', () => {
  let component: ProjectsInputComponent;
  let fixture: ComponentFixture<ProjectsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
