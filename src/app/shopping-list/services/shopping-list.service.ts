import { Ingredient } from '../../shared/models/ingredient';

export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getitems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }
}
