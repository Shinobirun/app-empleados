import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosHComponent } from './empleados-h.component';

describe('EmpleadosHComponent', () => {
  let component: EmpleadosHComponent;
  let fixture: ComponentFixture<EmpleadosHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
