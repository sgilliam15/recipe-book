import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

// Custom Modules
import { ShoppingListModule } from '../shopping-list/shopping-list.module';

// Containers
import { RecipesComponent } from './recipes.component';

// Components
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

// Services
import { RecipesService } from './services/recipes.service';


const recipeRoutes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
    {
      path: '',
      component: RecipeStartComponent
    },
    {
      path: 'new',
      component: RecipeEditComponent
    },
    {
      path: ':id',
      component: RecipeDetailComponent
    },
    {
      path: ':id/edit',
      component: RecipeEditComponent
    }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(recipeRoutes),
    ShoppingListModule
  ],
  declarations: [
    RecipesComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  exports: [
    RecipesComponent
  ],
  providers: [
    RecipesService
  ]
})

export class RecipesModule { }
