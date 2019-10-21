import { TestBed } from '@angular/core/testing';

import { MovieListService } from './movie-list.service';

describe('MovieListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieListService = TestBed.get(MovieListService);
    expect(service).toBeTruthy();
  });
});
