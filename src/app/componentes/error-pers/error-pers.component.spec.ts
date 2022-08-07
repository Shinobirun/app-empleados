import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPersComponent } from './error-pers.component';

describe('ErrorPersComponent', () => {
  let component: ErrorPersComponent;
  let fixture: ComponentFixture<ErrorPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
