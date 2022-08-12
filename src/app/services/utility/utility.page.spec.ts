import { TestBed } from '@angular/core/testing';

import { UtilityPage } from './utility.page';

describe('UtilityPage', () => {
  let service: UtilityPage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityPage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
