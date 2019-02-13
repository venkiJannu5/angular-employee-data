import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCustomComponent } from './employee-custom.component';

describe('EmployeeCustomComponent', () => {
  let component: EmployeeCustomComponent;
  let fixture: ComponentFixture<EmployeeCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
