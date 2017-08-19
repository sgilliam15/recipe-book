import { Component, Input, OnInit } from '@angular/core';

// Models
import { Ingredient } from '../../../shared/models/ingredient';

// Services
import { ShoppingListService } from '../../services/shopping-list.service';
import { Recipe } from '../../../recipes/models/recipe';
import { RecipesShoppinglistSharedServiceService } from '../../../shared/services/recipes-shoppinglist-shared-service.service';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  recipe: Recipe;

  constructor(private sls: ShoppingListService,
              private getRecipe: RecipesShoppinglistSharedServiceService) { }

  ngOnInit() {
      this.items = this.sls.getitems();
    this.getRecipe.changeEmitted$.subscribe((recipe) => {
      this.recipe = recipe;
      this.sls.addItems(this.recipe.ingredients);
    });
  }
}
