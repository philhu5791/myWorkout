import { TestBed } from '@angular/core/testing';

import { StepSourceService } from './step-source.service';

describe('StepSourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StepSourceService = TestBed.get(StepSourceService);
    expect(service).toBeTruthy();
  });
});
