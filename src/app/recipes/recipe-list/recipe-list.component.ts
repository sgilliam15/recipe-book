import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// Models
import { Recipe } from '../models/recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(0, 'Schnitzel', 'Very tasty', 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', []),
    new Recipe(1, 'Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];

  @Output()
  recipeSelected = new EventEmitter<Recipe>();

  ngOnInit() {}

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
    console.log(recipe);
  }
}
