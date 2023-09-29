import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCourseExpFormComponent } from './add-new-course-exp-form.component';

describe('AddNewCourseExpFormComponent', () => {
  let component: AddNewCourseExpFormComponent;
  let fixture: ComponentFixture<AddNewCourseExpFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewCourseExpFormComponent]
    });
    fixture = TestBed.createComponent(AddNewCourseExpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
