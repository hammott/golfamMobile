import { TestBed } from '@angular/core/testing';

import { PassengerInteractionService } from './passenger-interaction.service';

describe('PassengerInteractionService', () => {
  let service: PassengerInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
