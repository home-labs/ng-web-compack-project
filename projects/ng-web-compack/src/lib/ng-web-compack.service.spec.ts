import { TestBed } from '@angular/core/testing';

import { NgWebCompackService } from './ng-web-compack.service';

describe('NgWebCompackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgWebCompackService = TestBed.get(NgWebCompackService);
    expect(service).toBeTruthy();
  });
});
