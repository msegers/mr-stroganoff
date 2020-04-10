import { Test, TestingModule } from '@nestjs/testing';
import { RecipeController } from './recipe.controller';
import { RecipeService } from '../service/recipe.service';

describe('Recipe Controller', () => {
  let controller: RecipeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipeController],
      providers: [
        {
          provide: RecipeService,
          useValue: { findAll: () => [] },
        }
      ]
    })
    .compile();

    controller = module.get<RecipeController>(RecipeController);
  });

  it('should return all recipes', async () => {
    expect(controller).toBeDefined();
    const result = await controller.findAll();
    expect(result).toEqual([]);
  });
});
