import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
