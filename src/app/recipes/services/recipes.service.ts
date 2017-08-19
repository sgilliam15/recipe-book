import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../../shared/models/ingredient';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(0, 'Schnitzel', 'Very tasty', 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork', 1)
    ]),
    new Recipe(1, 'Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];

  recipe: Recipe;

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipe = this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
