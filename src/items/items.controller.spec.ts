import { Test } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

describe('ItemController', () => {
  let itemsController;
  let itemsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [
        {
          provide: ItemsService,
          useValue: {
            findById: jest.fn(),
          },
        },
      ],
    }).compile();

    itemsController = module.get<ItemsController>(ItemsController);
    itemsService = module.get<ItemsService>(ItemsService);
  });

  describe('findBy', () => {
    it('findBy', async () => {
      itemsController.findBy('hoge');
      console.log(itemsService.findById.mock);
      expect(itemsService.findById.mock.calls[0][0]).toBe('hoge');
    });
  });

});
