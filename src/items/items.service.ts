import { Injectable } from '@nestjs/common';
import { Item } from './items.model';

@Injectable()
export class ItemsService {

  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  findById(id: string): Item {
    return this.items.find((item) => item.id === id);
  }

  create(item: Item): Item {
    this.items.push(item);
    return item;
  }

  update(id: string): Item {
    const item = this.items.find((item) => item.id === id);
    item.status = 'SOLD_OUT';
    return item;
  }
}
