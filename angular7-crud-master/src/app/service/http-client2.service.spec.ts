import { TestBed } from '@angular/core/testing';

import { HttpClient2Service } from './http-client2.service';

describe('HttpClient2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpClient2Service = TestBed.get(HttpClient2Service);
    expect(service).toBeTruthy();
  });
});
