import { Test, TestingModule } from '@nestjs/testing';
import { FermentableController } from './fermentable.controller';
import { FermentableService } from '../service/fermentable.service';

describe('Fermentable Controller', () => {
  let controller: FermentableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FermentableController],
      providers: [
        {
          provide: FermentableService,
          useValue: { findAll: () => [] },
        }
      ]
    })
    .compile();

    controller = module.get<FermentableController>(FermentableController);
  });

  it('should return all fermentables', async () => {
    expect(controller).toBeDefined();
    const result = await controller.findAll();
    expect(result).toEqual([]);
  });
});
