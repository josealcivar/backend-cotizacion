import { Test, TestingModule } from '@nestjs/testing';
import { PlazoController } from './plazo.controller';

describe('PlazoController', () => {
  let controller: PlazoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlazoController],
    }).compile();

    controller = module.get<PlazoController>(PlazoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
