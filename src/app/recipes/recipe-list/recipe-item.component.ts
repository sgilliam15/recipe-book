import { Component, OnInit, Input } from '@angular/core';
// Models
import { Recipe } from '../models/recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent implements OnInit {
  @Input()
  recipe: Recipe;

  recipeId: number;

  constructor() { }

  ngOnInit() {
    console.log(this.recipe)
  }

}
