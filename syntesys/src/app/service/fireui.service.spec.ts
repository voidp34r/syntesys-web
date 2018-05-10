import { TestBed, inject } from '@angular/core/testing';

import { FireuiService } from './fireui.service';

describe('FireuiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireuiService]
    });
  });

  it('should be created', inject([FireuiService], (service: FireuiService) => {
    expect(service).toBeTruthy();
  }));
});
