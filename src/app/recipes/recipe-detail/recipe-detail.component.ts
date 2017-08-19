import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../models/recipe';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

// Services
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { RecipesService } from '../services/recipes.service';
import { RecipesShoppinglistSharedServiceService } from '../../shared/services/recipes-shoppinglist-shared-service.service';

// Services
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private recipeIndex: number;
  private subscription: Subscription;

  selectedRecipe: Recipe;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private sls: ShoppingListService,
              private recipeService: RecipesService,
              private getShoppingListService: RecipesShoppinglistSharedServiceService ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      });
  }

    onEdit() {
      this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
    }

    onDelete() {
      this.recipeService.deleteRecipe(this.selectedRecipe);
      this.router.navigate(['recipes']);
    }


  onAddToShoppingList() {
    this.getShoppingListService.getList(this.selectedRecipe);
  }

  onRecipeSelected(recipe: Recipe) {
    this.getShoppingListService.getList(recipe);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
