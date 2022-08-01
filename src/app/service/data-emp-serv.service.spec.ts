import { TestBed } from '@angular/core/testing';

import { DataEmpServService } from './data-emp-serv.service';

describe('DataEmpServService', () => {
  let service: DataEmpServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataEmpServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
