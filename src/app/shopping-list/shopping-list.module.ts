import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Containers
import { ShoppingListComponent } from './shopping-list.component';

// Components
import { ShoppingListAddComponent } from './shopping-list-add/shopping-list-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent
  ],
  exports: [
    ShoppingListComponent
  ]
})
export class ShoppingListModule { }
