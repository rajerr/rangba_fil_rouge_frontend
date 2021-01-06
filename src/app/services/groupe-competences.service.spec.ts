import { TestBed } from '@angular/core/testing';

import { GroupeCompetencesService } from './groupe-competences.service';

describe('GroupeCompetencesService', () => {
  let service: GroupeCompetencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupeCompetencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
