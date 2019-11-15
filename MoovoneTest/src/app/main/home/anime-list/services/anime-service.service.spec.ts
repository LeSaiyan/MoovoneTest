import { TestBed } from '@angular/core/testing';

import { AnimeServiceService } from './anime-service.service';

describe('AnimeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimeServiceService = TestBed.get(AnimeServiceService);
    expect(service).toBeTruthy();
  });
});
