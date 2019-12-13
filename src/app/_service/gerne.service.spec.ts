import { TestBed } from '@angular/core/testing';

import { GerneService } from './gerne.service';

describe('GerneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GerneService = TestBed.get(GerneService);
    expect(service).toBeTruthy();
  });
});
