import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// Models
import { Recipe } from '../models/recipe';

// Services
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  @Output()
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
