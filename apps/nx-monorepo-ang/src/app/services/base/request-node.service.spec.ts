import { TestBed } from '@angular/core/testing';

import { RequestNodeService } from './request-node.service';

describe('RequestNodeService', () => {
  let service: RequestNodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestNodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
