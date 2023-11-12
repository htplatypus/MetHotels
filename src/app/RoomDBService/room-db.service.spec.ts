import { TestBed } from '@angular/core/testing';

import { RoomDBService } from './room-db.service';

describe('RoomDBService', () => {
  let service: RoomDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
