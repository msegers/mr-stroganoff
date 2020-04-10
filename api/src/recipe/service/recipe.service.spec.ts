import { Test, TestingModule } from '@nestjs/testing';
import { RecipeService } from './recipe.service';
import { Recipe } from '../models/recipe';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('RecipeService', () => {
  let service: RecipeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipeService, {
        provide: getRepositoryToken(Recipe),
        useValue: { findAll: () => {}},
      }],
    }).compile();

    service = module.get<RecipeService>(RecipeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
