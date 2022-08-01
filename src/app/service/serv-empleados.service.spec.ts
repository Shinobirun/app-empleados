import { TestBed } from '@angular/core/testing';

import { ServEmpleadosService } from './serv-empleados.service';

describe('ServEmpleadosService', () => {
  let service: ServEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
