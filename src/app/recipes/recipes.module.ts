import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Modules
import { ShoppingListModule } from '../shopping-list/shopping-list.module';

// Containers
import { RecipesComponent } from './recipes.component';

// Components
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesService } from './services/recipes.service';

// Services
import { ShoppingListService } from '../shopping-list/services/shopping-list.service';



@NgModule({
  imports: [
    CommonModule,
    ShoppingListModule
  ],
  declarations: [
    RecipesComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeDetailComponent
  ],
  exports: [
    RecipesComponent
  ],
  providers: [
    RecipesService,
    ShoppingListService
  ]
})

export class RecipesModule { }
