import { TestBed } from '@angular/core/testing';

import { ProductsPage } from './products.page';

describe('ProductsService', () => {
  let service: ProductsPage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsPage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
