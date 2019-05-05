import { TestBed } from '@angular/core/testing';

import { BingoosService } from './bingoos.service';

describe('BingoosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BingoosService = TestBed.get(BingoosService);
    expect(service).toBeTruthy();
  });
});
