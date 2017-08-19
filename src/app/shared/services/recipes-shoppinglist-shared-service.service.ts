import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { Recipe } from '../../recipes/models/recipe';

@Injectable()
export class RecipesShoppinglistSharedServiceService {
  private recipe = new Subject<any>();

  changeEmitted$ = this.recipe.asObservable();

  getList(recipe: Recipe) {
    this.recipe.next(recipe);
  }
}
