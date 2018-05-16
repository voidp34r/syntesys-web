import { TestBed, inject } from '@angular/core/testing';

import { IlegraService } from './ilegra.service';

describe('IlegraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IlegraService]
    });
  });

  it('should be created', inject([IlegraService], (service: IlegraService) => {
    expect(service).toBeTruthy();
  }));
});
