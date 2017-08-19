import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Containers
import { RecipesComponent } from './recipes.component';

// Components
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesService } from './services/recipes.service';


@NgModule({
  imports: [
    CommonModule
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
    RecipesService
  ]
})

export class RecipesModule { }
