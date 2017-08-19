import { Ingredient } from '../../shared/models/ingredient';
import { Recipe } from '../../recipes/models/recipe';


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
