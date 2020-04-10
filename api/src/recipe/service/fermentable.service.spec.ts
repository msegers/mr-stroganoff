import { Test, TestingModule } from '@nestjs/testing';
import { FermentableService } from './fermentable.service';
import { Fermentable } from '../models/fermentable';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('FermentableService', () => {
  let service: FermentableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FermentableService, {
        provide: getRepositoryToken(Fermentable),
        useValue: { findAll: () => {}},
      }],
    }).compile();

    service = module.get<FermentableService>(FermentableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
