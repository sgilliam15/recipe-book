import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { RecipesComponent } from './recipes.component';

// Components
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

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
  },
  {
  path: '**',
  component: RecipeStartComponent
  }
        ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(recipeRoutes),
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
  ]
})

export class RecipesModule { }
