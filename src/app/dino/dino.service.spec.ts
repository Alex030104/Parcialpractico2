/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DinoService } from './dino.service';

describe('Service: Dino', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DinoService]
    });
  });

  it('should ...', inject([DinoService], (service: DinoService) => {
    expect(service).toBeTruthy();
  }));
});
