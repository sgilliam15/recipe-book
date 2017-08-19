import { Component, Input } from '@angular/core';

// Models
import { Recipe } from '../models/recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent {
  recipeId = 1;

  @Input() recipe: Recipe;

}
