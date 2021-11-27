import { TestBed } from '@angular/core/testing';

import { GetkeyService } from './getkey.service';

describe('GetkeyService', () => {
  let service: GetkeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetkeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
