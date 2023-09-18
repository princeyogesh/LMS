import { TestBed } from '@angular/core/testing';

import { HideOnloginService } from './hide-onlogin.service';

describe('HideOnloginService', () => {
  let service: HideOnloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HideOnloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
