import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaractEmpleadosComponent } from './caract-empleados.component';

describe('CaractEmpleadosComponent', () => {
  let component: CaractEmpleadosComponent;
  let fixture: ComponentFixture<CaractEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaractEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaractEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
