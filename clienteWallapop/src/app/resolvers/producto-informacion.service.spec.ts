import { TestBed } from '@angular/core/testing';

import { ProductoInformacionService } from './producto-informacion.service';

describe('ProductoInformacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductoInformacionService = TestBed.get(ProductoInformacionService);
    expect(service).toBeTruthy();
  });
});
