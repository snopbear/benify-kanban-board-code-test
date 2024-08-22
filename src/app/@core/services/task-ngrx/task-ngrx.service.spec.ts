/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskNgrxService } from './task-ngrx.service';

describe('Service: TaskNgrx', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskNgrxService]
    });
  });

  it('should ...', inject([TaskNgrxService], (service: TaskNgrxService) => {
    expect(service).toBeTruthy();
  }));
});
