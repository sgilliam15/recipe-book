import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Containers
import { ShoppingListComponent } from './containers/shopping-list/shopping-list.component';

// Components
import { ShoppingListAddComponent } from './components/shopping-list-add/shopping-list-add.component';

// Services
import { ShoppingListService } from './services/shopping-list.service';


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
  ],
  providers: [
    ShoppingListService
  ]
})

export class ShoppingListModule { }
