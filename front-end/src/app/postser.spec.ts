import { TestBed } from '@angular/core/testing';

import { Postser } from './postser';

describe('Postser', () => {
  let service: Postser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Postser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
