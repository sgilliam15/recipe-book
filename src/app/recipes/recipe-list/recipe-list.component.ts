import { Component, OnInit } from '@angular/core';

// Models
import { Recipe } from '../models/recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  recipe = new Recipe();

  constructor() { }

  ngOnInit() {
    this.recipe.name = 'Dummy';
    this.recipe.description = 'Dummy';
    this.recipe.imagePath = 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg';
  }

}
