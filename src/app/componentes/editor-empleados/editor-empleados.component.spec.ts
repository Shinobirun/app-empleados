import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorEmpleadosComponent } from './editor-empleados.component';

describe('EditorEmpleadosComponent', () => {
  let component: EditorEmpleadosComponent;
  let fixture: ComponentFixture<EditorEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
