import { TestBed } from '@angular/core/testing';

import { GersiteService } from './gersite.service';

describe('GersiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GersiteService = TestBed.get(GersiteService);
    expect(service).toBeTruthy();
  });
});
